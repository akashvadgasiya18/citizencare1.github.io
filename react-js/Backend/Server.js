const express = require("express");
const dotenv = require("dotenv");
const app = express();
const asyncHandler = require("express-async-handler");

dotenv.config({ path: "./config.env" });

require("./db");
const PORT = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))
// const User = require("./models/UserSchema");
const Details = require("./models/DetailSchema");
app.use(require("./routers/authRoute"));
app.use(require("./routers/Details_route"));
app.use(require("./routers/password_reset"));
app.set("view engine","ejs");
app.get("/", (req, res) => {
  res.send("get data.....");
});

app.get(
  "/details/:id",
  asyncHandler(async (req, res) => {
    const products = await Details.findById(req.params.id);
    if (products) {
      res.json(products);
    } else {
      res.status(404).json({ message: "Product not founded" });
    }
  })
);

app.listen(PORT, () => {
  console.log("running");
});
