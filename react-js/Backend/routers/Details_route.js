const express = require("express");
const multer = require("multer");
const Details = require("../models/DetailSchema");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const Review = require("../models/ReviewSchema");
const User = require("../models/UserSchema");
const path = require("path");
require("../db");

// -------------------- add service through admin--------------------------

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "assets/image");
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
    return res.status(401).json({});
  } else if (!price) {
    return res.status(402).json({});
  } else if (!rating) {
    return res.status(403).json({});
  } else if (!likes) {
    return res.status(404).json({});
  } else if (!desc) {
    return res.status(405).json({});
  }
  try {
    const de_Exist = await Details.findOne({ s_name });
    if (de_Exist) {
      return res.status(413).json({});
    } else if (rating > "5") {
      return res.status(411).json({});
    } else {
      const data = new Details({ s_name, price, rating, likes, desc, doc_img });
      await data.save();
      res.status(201).json({});
    }
  } catch (err) {
    return res.status(412).json({});
  }
});

// ------------------------service-edit----------------------

router.post("/edit_service", async (req, res) => {
  const { id, price, rating, likes, desc } = req.body;
  if (!id || !price || !rating || !likes || !desc) {
    return res.status(401).json({});
  } else if (!rating) {
    return res.status(402).json({});
  } else if (!likes) {
    return res.status(403).json({});
  } else if (!desc) {
    return res.status(404).json({});
  }
  const de_exist = await Details.findOne({ _id: id });
  if (!de_exist) {
    return res.status(413).json({});
  } else if (rating > "5") {
    return res.status(427).json({});
  } else {
    const n_price = await price;
    const n_rating = await rating;
    const n_likes = await likes;
    const n_desc = await desc;
    await Details.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          price: n_price,
          rating: n_rating,
          likes: n_likes,
          desc: n_desc,
        },
      }
    );
    return res.status(201).json({});
  }
});

//-------------------------------delete-service---------------------------------

router.post("/delete_service", async (req, res) => {
  const { id } = req.body;
  try {
    await Details.deleteOne({ _id: id });
    res.status(201).json({});
  } catch (err) {
    res.status(429).json({});
    console.log(err);
  }
});

// ------------------------ fetch product details through id (details page per service)-----------

router.get(
  "/details/:id",
  asyncHandler(async (req, res) => {
    const products = await Details.findById(req.params.id);
    if (products) {
      res.send(products);
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
      res.send(products);
    } else {
      res.status(404).json({ message: "Product not founded" });
    }
  })
);

router.get(
  "/dashmain/services/editservicepage/:id",
  asyncHandler(async (req, res) => {
    const products = await Details.findById(req.params.id);
    if (products) {
      res.send(products);
    } else {
      res.status(404).json({ message: "Product not founded" });
    }
  })
);

// ------------------------------ reviews --------------------------

router.post("/add_review", async (req, res) => {
  const { uname, rate, description, n_date } = req.body;
  if (!uname) {
    return res.status(401).json({});
  } else if (!rate) {
    return res.status(402).json({});
  } else if (!description) {
    return res.status(403).json({});
  }
  try {
    const de_Exist = await User.findOne({ fname: uname });
    if (!de_Exist) {
      return res.status(419).json({});
    } else {
      const data = new Review({ uname, rate, description, n_date });
      await data.save();
      res.status(201).json({});
    }
  } catch (err) {
    return res.status().json({});
  }
});

//  ------------------------- delete reviews ------------

router.post("/delete_review", async (req, res) => {
  const { id } = req.body;
  try {
    await Review.deleteOne({ _id: id });
    res.status(201).json({});
  } catch (err) {
    res.status(429).json({});
    console.log(err);
  }
});

module.exports = router;