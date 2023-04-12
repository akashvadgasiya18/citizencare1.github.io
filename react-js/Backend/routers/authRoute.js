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
const Order = require("../models/OrderSchema");

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
    cb(null, "assets/img_pro/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/p_registration", upload.single("p_file"), async (req, res) => {
  let p_file = req.file ? req.file.filename : null;

  const {
    p_name,
    p_role,
    p_email,
    p_mno,
    p_password,
    p_cpassword,
    p_add,
    time_slot,
  } = req.body;
  if (
    p_name == "" ||
    p_role == "" ||
    p_email == "" ||
    p_mno == "" ||
    p_password == "" ||
    p_cpassword == "" ||
    p_add == "" ||
    time_slot == ""
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
        time_slot,
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
    res.send(product);
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

// --------------------- booking get data --------------------------------
router.get(
  "/bookingdetails",
  asyncHandler(async (req, res) => {
    const product = await Order.find({});
    res.send(product);
  })
);

//-------------booking data for provider send email---------------------
router.get(
  "/order_paid",
  asyncHandler(async (req, res) => {
    const product = await Order.find({ status: "paid" });
    res.send(product);
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
  const { id, p_name, p_role, p_mno, p_add, time_slot } = req.body;
  if (
    p_name == "" ||
    p_role == "" ||
    p_mno == "" ||
    p_add == "" ||
    time_slot == ""
  ) {
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
        const n_time = await time_slot;
        await Provider.updateOne(
          {
            _id: id,
          },
          {
            $set: {
              p_name: n_name,
              p_role: n_role,
              p_mno: n_mno,
              p_add: n_add,
              time_slot: n_time,
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
  try {
    await Provider.deleteOne({ _id: id });
    res.status(201).json({});
  } catch (err) {
    res.status(429).json({});
    console.log(err);
  }
});

//--------------------provider-info-send--------------------------
router.post("/send_order", async (req, res) => {
  const { item } = req.body;
  const { detail } = req.body;
  try {
    const providerExist = await Provider.findOne({ p_email: item.p_email });
    if (providerExist) {
      // console.log(detail.total);
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "shreyabundheliya2109@gmail.com",
          pass: "fbqrhmvatldjfhxi",
        },
      });

      var mailOptions = {
        from: "shreyabundheliya2109@gmail.com",
        // to: "akashvadgasiya1832@gmail.com",
        to: item.p_email,
        subject: "Order details",
        html:
          '<p>The customer name is "' +
          detail.fname +
          '".</p> <p>The scheduale for service is "' +
          detail.scheduale +
          '".</p> <p>The date for service is "' +
          detail.date +
          '".</p> <p>The address for service is "' +
          detail.address.line1 +
          "," +
          detail.address.line2 +
          "," +
          detail.address.postal_code +
          ".</p>" +
          '<p> The email address of customer is "' +
          detail.email +
          '".</p> <p>The contact number is "' +
          detail.phone_no +
          '".</p>.',
      };

      transporter.sendMail(mailOptions, async function (error, info) {
        if (error) {
          return res.status(413).json({});
        } else {
          console.log("Email sent: " + info.response);
          await Order.updateOne(
            {
              userId: detail.userId,
            },
            {
              $set: {
                status: "assigned",
                provider: item,
              },
            }
          );
          var transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: "shreyabundheliya2109@gmail.com",
              pass: "fbqrhmvatldjfhxi",
            },
          });

          var mailOptions = {
            from: "shreyabundheliya2109@gmail.com",
            to: detail.email,
            subject: "Service-provider details",
            html:
              '<h2>Details about your service provider</h2><p>The provider name is "' +
              item.p_name +
              '".</p> ' +
              '<p> The email address of provider is "' +
              item.p_email +
              '".</p> <p>The contact number is "' +
              item.p_mno +
              '".</p>.',
          };

          transporter.sendMail(mailOptions, async function (error, info) {
            if (error) {
              return res.status(413).json({});
            } else {
              console.log("Email sent: " + info.response);
            }
          });
          return res.status(201).json({});
        }
      });
    } else {
      return res.status(413).json({ message: "Not exists." });
    }
  } catch (err) {
    console.log(err);
  }
});

//--------------------------------history-User------------------------
router.get(
  "/userorders/:email",
  asyncHandler(async (req, res) => {
    const email = req.params.email;
    const products = await Order.find({ email: email });
    if (products) {
      res.send(products);
    } else {
      res.status(404).json({ message: "Product not founded" });
    }
  })
);

//---------------------------history-provider-----------------
router.get(
  "/providerorders/:p_email",
  asyncHandler(async (req, res) => {
    const p_email = req.params.p_email;
    const products = await Order.find({ "provider.p_email": p_email });
    if (products) {
      res.send(products);
    } else {
      res.status(404).json({ message: "Product not founded" });
    }
  })
);

//----------edit user_history-----------------------

router.post("/edit_history", async (req, res) => {
  const { choice, date, id } = req.body;
  if (!choice || !date) {
    return res.status(429).json({});
  }
  try {
    const userExist = await Order.findOne({ _id: id });
    if (!userExist) {
      return res.status(413).json({});
    } else {
      await Order.updateOne(
        {
          _id: id,
        },
        {
          $set: {
            date: date,
            scheduale: choice,
          },
        }
      );
      if (userExist.status == "assigned") {
        var transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "shreyabundheliya2109@gmail.com",
            pass: "fbqrhmvatldjfhxi",
          },
        });

        var mailOptions = {
          from: "shreyabundheliya2109@gmail.com",
          // to: "akashvadgasiya1832@gmail.com",
          to: userExist.provider[0].p_email,
          subject: "Order details changed",
          html:
            '<h2>Updated scheduale of service </h2>'+
            '<p>The customer name is "' +
            userExist.fname +
            '".</p> <p>The date from service is "' +
            date +
            '".</p> <p>The updated scheduale for service is "' +
            choice +
            '".</p> <p>The address for service is "' +
            userExist.address.line1 +
            "," +
            userExist.address.line2 +
            "," +
            userExist.address.postal_code +
            ".</p>" +
            '<p> The email address of customer is "' +
            userExist.email +
            '".</p> <p>The contact number is "' +
            userExist.phone_no +
            '".</p>.',
        };

        transporter.sendMail(mailOptions, async function (error, info) {
          if (error) {
            return res.status(413).json({});
          } else {
            console.log("Email sent: " + info.response);
          }
        });
        return res.status(201).json({});
      } else {
        return res.status(201).json({});
      }
    }
  } catch (err) {
    console.log(err);
  }
});

//------------------------------delete-history-----------------------
router.post("/delete_history", async (req, res) => {
  const { id } = req.body;
  try {
    const orderExist = await Order.findOne({ _id: id });
    if (!orderExist) {
      return res.status(413).json({});
    } else {
      await Order.deleteOne({ _id: id });
      if ( orderExist.status == "assigned" ) {
        var transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "shreyabundheliya2109@gmail.com",
            pass: "fbqrhmvatldjfhxi",
          },
        });

        var mailOptions = {
          from: "shreyabundheliya2109@gmail.com",
          // to: "akashvadgasiya1832@gmail.com",
          to: orderExist.provider[0].p_email,
          subject: "Order canceled.",
          html:
            '<h2>Cancelation of service</h2>'+
            '<p>The customer name is "' +
            orderExist.fname +
            '".</p> <p>The date from service is "' +
            orderExist.date +
            '".</p> <p>The scheduale of that service is "' +
            orderExist.scheduale +
            '".</p> <p>The address for service is "' +
            orderExist.address.line1 +
            "," +
            orderExist.address.line2 +
            "," +
            orderExist.address.postal_code +
            ".</p>",
        };

        transporter.sendMail(mailOptions, async function (error, info) {
          if (error) {
            return res.status(413).json({});
          } else {
            console.log("Email sent: " + info.response);
          }
        });
        res.status(201).json({});
      } else {
        res.status(201).json({});
      }
    }
  } catch (err) {
    res.status(429).json({});
    console.log(err);
  }
});

//------------------------------done-history-----------------------
router.post("/done_history", async (req, res) => {
  const { id } = req.body;
  try {
    const orderExist = await Order.find({ _id: id });
    if (!orderExist) {
      return res.status(413).json({});
    } else {
      await Order.updateOne(
        {
          _id: id,
        },
        {
          $set: {
            status: "done",
          },
        }
      );
      res.status(201).json({});
    }
  } catch (err) {
    res.status(429).json({});
    console.log(err);
  }
});

//------------------- logout ------------------------------------
router.get("/logout", (req, res) => {
  res.clearCookie("jwtoken", { path: "/" });
  res.status(200).send("User logout");
});

module.exports = router;
