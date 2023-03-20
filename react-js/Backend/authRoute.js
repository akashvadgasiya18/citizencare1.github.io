const express = require("express");
const User = require("./UserSchema");
const Provider = require("./ProviderSchema");
const Details = require("./DetailSchema");
const bcrypt = require("bcrypt");
const router = express.Router();
const multer = require("multer");
const asyncHandler = require("express-async-handler");

require("./db");

router.post("/registration", async (req, res) => {
  const { fname, age, email, password, cpassword } = req.body;
  if (
    fname == "" ||
    age == "" ||
    email == "" ||
    password == "" ||
    cpassword == ""
  ) {
    return res.status(429).json({});
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(413).json({});
    } else if (password.length <= 5) {
      return res.status(411).json({});
    } else if (age <= "45" && age >= "100") {
      return res.status(402).json({});
    } else if (password != cpassword) {
      return res.status(422).json({});
    } else {
      const user = new User({ fname, age, email, password, cpassword });
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

  const { p_name, p_role, p_email, p_password, p_cpassword, p_add } = req.body;
  if (
    p_name == "" ||
    p_role == "" ||
    p_email == "" ||
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
    } else if (p_password.length <= 5) {
      return res.status(411).json({});
    } else if (p_password != p_cpassword) {
      return res.status(422).json({});
    } else {
      const provider = new Provider({
        p_name,
        p_role,
        p_email,
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
        res.status(201).json(token);
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

// -------------------------------------------------------------
// router.get(
//   "/details/:id",
//   asyncHandler(async (req, res) => {
//     const products = await Details.findById(req.params.id);
//     if (products) {
//       res.json(products);
//     } else {
//       res.status(404).json({ message: "Product not founded" });
//     }
//   })
// );

module.exports = router;
