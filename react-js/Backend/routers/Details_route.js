const express = require("express");
const multer = require("multer");
const Details = require("../models/DetailSchema");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const Review = require("../models/ReviewSchema");
const User = require("../models/UserSchema");
require("../db");

// -------------------- add service through admin--------------------------

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/public/details/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/add_services", upload.single("doc_img"), async (req, res) => {
  let doc_img = req.file ? req.file.filename : null;
  const { s_name, price, rating, likes, desc } = req.body;
  if (!s_name || !price || !rating || !likes || !desc || !doc_img) {
    return res.status(412).json({});
  }
  try {
    const de_Exist = await Details.findOne({ s_name });
    if (de_Exist) {
      return res.status(413).json({});
    } else if (rating >= "5") {
      return res.status(411).json({});
    } else {
      const data = new Details({ s_name, price, rating, likes, desc, doc_img });
      await data.save();
      res.status(201).json({});
    }
  } catch (err) {
    return res.status(402).json({});
    res.send("done...");
  }
});

// ------------------------ fetch product details through id (details page per service)-----------

router.get(
  "/details/:id",
  asyncHandler(async (req, res) => {
    const products = await Details.findById(req.params.id);
    if (products) {
      res.json(products);
    } else {
      res.status(404).json({ message: "Product not founded" });
    }
  })
);

router.get(
  "/dashmain/services",
  asyncHandler(async (req, res) => {
    const products = await Details.find({});
    if (products) {
      res.json(products);
    } else {
      res.status(404).json({ message: "Product not founded" });
    }
  })
);

router.get(
  "/dashmain/services:id",
  asyncHandler(async (req, res) => {
    const products = await Details.findById(req.params.id);
    if (products) {
      res.json(products);
    } else {
      res.status(404).json({ message: "Product not founded" });
    }
  })
);

// ------------------------------ reviews --------------------------

router.post("/add_review", async (req, res) => {
  const { uname, rate, description } = req.body;
  if (!uname || !rate || !description) {
    return res.status(417).json({});
  }
  try {
    const de_Exist = await User.findOne({ fname: uname });
    if (!de_Exist) {
      return res.status(419).json({});
    } else {
      const data = new Review({ uname, rate, description });
      await data.save();
      res.status(201).json({});
    }
  } catch (err) {
    return res.status(402).json({});
  }
});

module.exports = router;
