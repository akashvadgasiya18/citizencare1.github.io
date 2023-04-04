const express = require("express");
const dotenv = require("dotenv");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");

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
app.use(express.static(path.join("/payment_routes", "views")));
app.use(cookieParser());
app.use("/assets", express.static("assets"));

app.use(require("./routers/authRoute"));
app.use(require("./routers/auth_details"));
app.use(require("./routers/Details_route"));
app.use(require("./routers/password_reset"));
app.use(require("./routers/payment-route"));

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.send("get data.....");
});
app.listen(PORT, () => {
  console.log("running");
});
