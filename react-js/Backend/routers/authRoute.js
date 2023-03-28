const express = require("express");
const User = require("../models/UserSchema");
const Provider = require("../models/ProviderSchema");
const Details = require("../models/DetailSchema");
const Admin = require("../models/AdminSchema");
const Review = require("../models/ReviewSchema");
const bcrypt = require("bcrypt");
const router = express.Router();
const multer = require("multer");
var nodemailer = require("nodemailer");
const asyncHandler = require("express-async-handler");

require("../db");

// ---------------------------- registration for user (data store in mongo)---------------------

router.post("/registration", async (req, res) => {
  const { fname, age, email, phone_no, password, cpassword } = req.body;
  if (
    fname == "" ||
    age == "" ||
    email == "" ||
    phone_no == "" ||
    password == "" ||
    cpassword == ""
  ) {
    return res.status(429).json({});
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(413).json({});
    } else if (phone_no.length != 10) {
      return res.status(427).json({});
    } else if (password.length <= 5) {
      return res.status(411).json({});
    } else if (age < "40" && age > "100") {
      return res.status(402).json({});
    } else if (password != cpassword) {
      return res.status(422).json({});
    } else {
      const user = new User({
        fname,
        age,
        email,
        phone_no,
        password,
        cpassword,
      });
      await user.save();
      res.status(201).json({});
    }
  } catch (err) {
    console.log(err);
  }
});

// ---------------------------------- for provider ---------------------------------------------
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/p_registration", upload.single("p_file"), async (req, res) => {
  let p_file = req.file ? req.file.filename : null;

  const { p_name, p_role, p_email, p_mno, p_password, p_cpassword, p_add } =
    req.body;
  if (
    p_name == "" ||
    p_role == "" ||
    p_email == "" ||
    p_mno == "" ||
    p_password == "" ||
    p_cpassword == "" ||
    p_add == ""
  ) {
    return res.status(429).json({});
  }
  try {
    const proExist = await Provider.findOne({ p_email: p_email });
    if (proExist) {
      return res.status(413).json({});
    } else if (p_mno.length != 10) {
      return res.status(427).json({});
    } else if (p_password.length <= 5) {
      return res.status(411).json({});
    } else if (p_password != p_cpassword) {
      return res.status(422).json({});
    } else {
      const provider = new Provider({
        p_name,
        p_role,
        p_email,
        p_mno,
        p_password,
        p_cpassword,
        p_add,
        p_file,
      });
      await provider.save();
      res.status(201).json({});
    }
  } catch (err) {
    return res.status(402).json({});
  }
});

// -------------------------------- for login  --------------------------------------------

router.post("/login", async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(429).json({ error: "not empty" });
    }

    const detail = await User.findOne({ email: email });
    const p_detail = await Provider.findOne({ p_email: email });
    const a_detail = await Admin.findOne({ email: email });

    if (detail) {
      const match = await bcrypt.compare(password, detail.password);
      if (!match) {
        res.status(400).json({ error: "Invalid credentional" });
      } else {
        token = await detail.generateAuthToken();
        res.cookie("jwtoken", token, {
          httpOnly: true,
        });
        res.status(201).json(token);
      }
    } else if (p_detail) {
      const match = await bcrypt.compare(password, p_detail.p_password);
      if (!match) {
        res.status(400).json({ error: "Invalid credentional" });
      } else {
        token = await p_detail.generateAuthToken();
        res.cookie("jwtoken", token, {
          httpOnly: true,
        });
        res.status(202).json(token);
      }
    } else if (a_detail) {
      const match = await bcrypt.compare(password, a_detail.password);
      if (!match) {
        res.status(400).json({ error: "Invalid credentional" });
      } else {
        token = await a_detail.generateAuthToken();
        res.cookie("jwtoken", token, {
          httpOnly: true,
        });
        res.status(203).json(token);
      }
    } else {
      res.status(413).json({ error: "Invalid credentional" });
    }
  } catch (err) {
    console.log(err);
  }
});

//  --------------------------- all details ------------------------

router.get(
  "/details",
  asyncHandler(async (req, res) => {
    const product = await Details.find({});
    res.json(product);
  })
);

// ---------------------------- getdata for USER get -------------------------------
router.get(
  "/userdatas",
  asyncHandler(async (req, res) => {
    const product = await User.find({});
    res.json(product);
  })
);

// ------------------------------- get data for providers -------------------------

router.get(
  "/providersdatas",
  asyncHandler(async (req, res) => {
    const product = await Provider.find({});
    res.json(product);
  })
);

// --------------------------- review data get -----------------------------------

router.get(
  "/reviewdata",
  asyncHandler(async (req, res) => {
    const review = await Review.find({});
    res.json(review);
  })
);

//----------edit user_profile-----------------------

router.post("/edit_detail", async (req, res) => {
  const { fname, age, id, phone_no } = req.body;
  if (fname == "" || age == "" || phone_no == "") {
    return res.status(429).json({});
  }
  try {
    const userExist = await User.findOne({ _id: id });
    if (!userExist) {
      return res.status(413).json({});
    } else {
      if (phone_no.length != 10) {
        return res.status(427).json({});
      } else {
        const n_fname = await fname;
        const n_age = await age;
        const n_phone_no = await phone_no;
        await User.updateOne(
          {
            _id: id,
          },
          {
            $set: {
              fname: n_fname,
              age: n_age,
              phone_no: n_phone_no,
            },
          }
        );
        return res.status(201).json({});
      }
    }
  } catch (err) {
    console.log(err);
  }
});

//----------edit provider_profile-----------------------

router.post("/edit_provider", async (req, res) => {
  const { id, p_name, p_role, p_mno, p_add } = req.body;
  if (p_name == "" || p_role == "" || p_mno == "" || p_add == "") {
    return res.status(429).json({});
  }
  try {
    const providerExist = await Provider.findOne({ _id: id });
    if (!providerExist) {
      return res.status(413).json({});
    } else {
      if (p_mno.length != 10) {
        return res.status(427).json({});
      } else {
        const n_name = await p_name;
        const n_role = await p_role;
        const n_mno = await p_mno;
        const n_add = await p_add;
        await Provider.updateOne(
          {
            _id : id,
          },
          {
            $set: {
              p_name: n_name,
              p_role: n_role,
              p_mno: n_mno,
              p_add: n_add
            },
          }
        );
        return res.status(201).json({});
      }
    }
  } catch (err) {
    console.log(err);
  }
});

//------------------------------delete-provider-----------------------
router.post("/delete_provider", async (req, res) => {
  const { id } = req.body;
  try
  {
    await Provider.deleteOne({ _id: id});
    res.status(201).json({});
  }
  catch(err)
  {
    res.status(429).json({});
    console.log(err);
  }
});

//--------------------provider-info-send--------------------------
router.post("/send_order", async (req,res) => {
  const { p_email } = req.body;
  try
  {
    const providerExist = await Provider.findOne({p_email: p_email});
    if (providerExist) {
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "shreyabundheliya2109@gmail.com",
          pass: "fbqrhmvatldjfhxi",
        },
      });

      var mailOptions = {
        from: "shreyabundheliya2109@gmail.com",
        to: p_email,
        subject: "Order details",
        text: "Hello",
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
      return res.status(201).json({});
    } else
    {
      return res.status(413).json({ message: "Not exists." });
    }
  }
  catch (err) {
    console.log(err);
  }
});

//------------------- logout ------------------------------------
router.get("/logout", (req, res) => {
  res.clearCookie("jwtoken", { path: "/" });
  res.status(200).send("User logout");
});

module.exports = router;
