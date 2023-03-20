const express = require("express");
const multer = require("multer");
const Details = require("../models/DetailSchema");
const router = express.Router();
require("../db");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/details/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/add_services", upload.single("doc_img"), async (req, res) => {
  let doc_img = req.file ? req.file.filename : null;
  const { s_name, price, rating, likes, desc } = req.body;
  if (!s_name || !price || !rating || !likes || !desc) {
    return res.status(412).json({});
  }
  try {
    const de_Exist = await Details.findOne({ s_name: s_name });
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

// router.put("/details/:_id", async (req, res) => {
//   const details = await Details.find(
//     (details) => details._id === req.params._id
//   );

//   details.s_name = req.body.s_name;
//   details.price = req.body.price;
//   details.rating = req.body.rating;
//   details.likes = req.body.likes;
//   details.desc = req.body.desc;

//   res.send("update success.....");
// });
module.exports = router;
