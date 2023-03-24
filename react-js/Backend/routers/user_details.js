const express = require("express");
const router = express.Router();
const Authenticate = require('../Authenticate');
require("../db");

//---------------Getdata for user-profile-----------------------------
router.get("/user_details", Authenticate ,(req, res) =>
{
  console.log("Hello");
//   res.json("Hello");
});

module.exports = router;