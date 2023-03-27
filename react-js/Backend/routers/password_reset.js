const express = require("express");
const router = express.Router();
const User = require("../models/UserSchema");
const Provider = require("../models/ProviderSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
var nodemailer = require("nodemailer");
require("../db");
router.post("/forgotpassword", async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(429).json({});
  }
  try {
    const userExist = await User.findOne({ email: email });
    const providerExist = await Provider.findOne({ p_email: email });
    if (userExist) {
      const secret = process.env.SECRET_KEY + userExist.password;
      const token = jwt.sign(
        { email: userExist.email, id: userExist._id },
        secret,
        {
          expiresIn: "5m",
        }
      );
      const link = `http://localhost:3001/forgot_password/${userExist._id}/${token}`;
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "shreyabundheliya2109@gmail.com",
          pass: "fbqrhmvatldjfhxi",
        },
      });

      var mailOptions = {
        from: "shreyabundheliya2109@gmail.com",
        to: email,
        subject: "Password reset",
        text: link,
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
      console.log(link);
      return res.status(201).json({});
    } else if (providerExist) {
      const secret = process.env.SECRET_KEY + providerExist.p_password;
      const token = jwt.sign(
        { email: providerExist.p_email, id: providerExist._id },
        secret,
        {
          expiresIn: "5m",
        }
      );
      const link = `http://localhost:3001/forgot_password/${providerExist._id}/${token}`;
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "shreyabundheliya2109@gmail.com",
          pass: "fbqrhmvatldjfhxi",
        },
      });

      var mailOptions = {
        from: "shreyabundheliya2109@gmail.com",
        to: email,
        subject: "Password reset",
        text: link,
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
      console.log(link);
      return res.status(201).json({});
    } else {
      return res.status(413).json({ message: "Not exists." });
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/forgot_password/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  const userExist = await User.findOne({ _id: id });
  const providerExist = await Provider.findOne({ _id: id });
  if (userExist) {
    const secret = process.env.SECRET_KEY + userExist.password;
    try {
      const verify = jwt.verify(token, secret);
      res.render("index", { email: verify.email, status: "Not verified" });
    } catch (err) {
      console.log(err);
      res.status(411).send("not verifed.");
    }
  } else if (providerExist) {
    const secret = process.env.SECRET_KEY + providerExist.p_password;
    try {
      const verify = jwt.verify(token, secret);
      res.render("index", { p_email: verify.email, status: "Not verified" });
    } catch (err) {
      console.log(err);
      res.status(411).send("not verifed.");
    }
  } else {
    return res.status(413).json({ message: "Not exists." });
  }
});

router.post("/forgot_password/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  const { password, cpassword } = req.body;
  if (!password || !cpassword) {
    return res.render("index", { status: 402 });
  }
  const userExist = await User.findOne({ _id: id });
  const providerExist = await Provider.findOne({ _id: id });
  if (userExist) {
    const secret = process.env.SECRET_KEY + userExist.password;
    try {
      const verify = jwt.verify(token, secret);
      if (password.length <= 5) {
        return res.render("index", { status: 429 });
      } else if (password != cpassword) {
        return res.render("index", { status: 412 });
      } else {
        const salt = await bcrypt.genSalt(10);
        const n_password = await bcrypt.hash(password, salt);
        const n_cpassword = await bcrypt.hash(cpassword, salt);
        await User.updateOne(
          {
            _id: id,
          },
          {
            $set: {
              password: n_password,
              cpassword: n_cpassword,
            },
          }
        );
        res.render("index", { status: 201 });
      }
    } catch (err) {
      console.log(err);
      res.status(411).json({});
    }
  } else if (providerExist) {
    const secret = process.env.SECRET_KEY + providerExist.p_password;
    try {
      const verify = jwt.verify(token, secret);
      if (password.length <= 5) {
        return res.render("index", { status: 429 });
      } else if (password != cpassword) {
        return res.render("index", { status: 412 });
      } else {
        const salt = await bcrypt.genSalt(10);
        const n_password = await bcrypt.hash(password, salt);
        const n_cpassword = await bcrypt.hash(cpassword, salt);
        await Provider.updateOne(
          {
            _id: id,
          },
          {
            $set: {
              p_password: n_password,
              p_cpassword: n_cpassword,
            },
          }
        );
        res.render("index", { status: 201 });
      }
    } catch (err) {
      console.log(err);
      res.status(411).json({});
    }
  } else {
    return res.render("index", { status: 413 });
  }
});

module.exports = router;
