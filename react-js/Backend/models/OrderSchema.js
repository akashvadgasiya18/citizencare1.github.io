const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  Ordername: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  o_address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  stat: {
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
});

OrderSchema.pre("save", async function (next) {
  next();
});

const Order = mongoose.model("ORDER", OrderSchema);
module.exports = Order;
