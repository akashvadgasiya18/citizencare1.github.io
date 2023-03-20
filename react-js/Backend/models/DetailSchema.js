const mongoose = require("mongoose");

const DetailSchema = new mongoose.Schema({
  s_name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  likes: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  doc_img: {
    type: String,
    required: true,
  },
});

DetailSchema.pre("save", async function (next) {
  next();
});

const Details = mongoose.model("DETAILS", DetailSchema);
module.exports = Details;
