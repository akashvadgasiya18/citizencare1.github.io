const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const ProviderSchema = new mongoose.Schema({
  p_name: {
    type: String,
    required: true,
  },
  p_role: {
    type: String,
    required: true,
  },
  p_email: {
    type: String,
    required: true,
  },
  p_mno:{
    type: String,
    required: true,
  },
  p_password: {
    type: String,
    required: true,
  },
  p_cpassword: {
    type: String,
    required: true,
  },
  p_add: {
    type: String,
    required: true,
  },
  time_slot: {
    type: String,
    required: true,
  },
  p_file: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

ProviderSchema.pre("save", async function (next) {
  if (this.isModified("p_password")) {
    this.p_password = await bcrypt.hash(this.p_password, 12);
    this.p_cpassword = await bcrypt.hash(this.p_cpassword, 12);
  }
  next();
});

ProviderSchema.methods.generateAuthToken = async function (res) {
  try {
    const token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};

const Provider = mongoose.model("Provider", ProviderSchema);

module.exports = Provider;
