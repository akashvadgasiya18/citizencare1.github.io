const express = require("express");
const dotenv = require("dotenv");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
// const Authenticate = require('./Authenticate');

dotenv.config({ path: "./config.env" });

require("./db");
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use("./public", express.static("public"));

// // const User = require("./models/UserSchema");
// const Details = require("./models/DetailSchema");
app.use(require("./routers/authRoute"));
app.use(require("./routers/user_details"));
app.use(require("./routers/Details_route"));
app.use(require("./routers/password_reset"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.send("get data.....");
});
// app.get("/about" ,(req, res) =>
// {
//   console.log("Hello");
//   res.json("Hello");
// });
app.listen(PORT, () => {
  console.log("running");
});
