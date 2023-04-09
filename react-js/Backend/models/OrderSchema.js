const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  cId:{
    type: String
  },
  paymentId :{
    type: String
  },
  fname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone_no: {
    type: String,
    required: true,
  },
  address: {
    type: Object,
    required: true,
  },
  scheduale: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  service: [
    {
      id: { type: String },
      s_name: { type: String },
      price: { type: String },
    },
  ],
  provider: [
    {
      id: { type: String },
      p_name: { type: String },
      p_email: { type: String },
      p_mno: { type: String },
    },
  ],
  total: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: "pending",
  },
},
{timestamps: true});

OrderSchema.pre("save", async function (next) {
  next();
});

const Order = mongoose.model("ORDER", OrderSchema);
module.exports = Order;
