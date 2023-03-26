const Provider = require("../models/ProviderSchema");
const jwt = require("jsonwebtoken");

const Authenticate_provider = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken;
    const verifying = jwt.verify(token, process.env.SECRET_KEY);
    const root = await Provider.findOne({
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
module.exports = Authenticate_provider;
