const Admin = require("../models/AdminSchema");
const jwt = require("jsonwebtoken");

const Authenticate_admin = async (req, res, next, e) => {
  try {
    const token = req.cookies.jwtoken;
    const verifying = jwt.verify(token, process.env.SECRET_KEY);
    const root = await Admin.findOne({
      _id: verifying._id,
      "tokens.token": token,
    });
    if (!root) {
      throw new Error("no found.");
    }
    req.token = token;
    req.root = root;
    req.userId = root._id;
    next();
  } catch (err) {
    res.status(401).send("Unauthorized: No Token ");
  }
};
module.exports = Authenticate_admin;
