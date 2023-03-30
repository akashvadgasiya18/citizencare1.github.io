const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    u_name: {
        type: String,
        required: true,
    },
});