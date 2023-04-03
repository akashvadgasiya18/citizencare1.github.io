const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zipcode: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  s_name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});

OrderSchema.pre("save", async function (next) {
  next();
});

const Order = mongoose.model("ORDER", OrderSchema);
module.exports = Order;
