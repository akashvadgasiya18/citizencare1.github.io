const express = require("express");
const User = require("../models/UserSchema");
const router = express.Router();

require("../db");

//----------edit user_profile-----------------------
router.post("/edit_detail", async (req, res) => {
  const { fname, age, email, phone_no } = req.body;
  if (fname == "" || age == "" || phone_no == "") {
    return res.status(429).json({});
  }
  try {
    const userExist = await User.findOne({email : email});
    if(!userExist)
    {
        return res.status(413).json("User not exist");
    }
    else
    {
        const n_fname = await fname;
        await User.updateOne(
            {
                email: email,
            },
            {
                $set: {
                    fname: n_fname,
                },
            });
        return res.status(201).json();
    }
  } catch (err) {
    console.log(err);
  }
});
