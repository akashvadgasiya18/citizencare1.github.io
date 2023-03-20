const express = require("express");
const dotenv = require("dotenv");
const app = express();
const asyncHandler = require("express-async-handler");

dotenv.config({ path: "./config.env" });

require("./db");
const PORT = process.env.PORT;
app.use(express.json());
// const User = require("./UserSchema");
const Details = require("./DetailSchema");
app.use(require("./authRoute"));
app.use(require("./Details_route"));

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
