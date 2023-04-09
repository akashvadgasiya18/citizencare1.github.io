const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  uname: {
    type: String,
    required: true,
  },
  rate: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
},
{timestamps: true});

ReviewSchema.pre("save", async function (next) {
  next();
});

const Review = mongoose.model("REVIEW", ReviewSchema);
module.exports = Review;
