const express = require("express");
const router = express.Router();
const Authenticate = require("../middleware/Authenticate");
const Authenticate_provider = require("../middleware/Authenticate_provider");
const Authenticate_admin = require("../middleware/Authenticate_admin");
require("../db");

//---------------Getdata for user-profile-----------------------------
router.get("/profile", Authenticate, (req, res) => {});
router.get("/user_detail", Authenticate, (req, res) => {
  res.send(req.root);
});

//-------------Getdata for provider----------------------------------
router.get("/providerDash", Authenticate_provider, (req, res) => {});
router.get("/provider_detail", Authenticate_provider, (req, res) => {
  res.send(req.root);
});

//-------------Authenticate for admin----------------------------------
router.get("/dashmain", Authenticate_admin, (req, res) => {});

module.exports = router;
