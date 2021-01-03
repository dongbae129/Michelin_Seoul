const express = require("express");
// const cookieParser = require("cookie-parser");
const db = require("./models");
const app = express();
const morgan = require("morgan");
const dotenv = require("dotenv");
const expressSession = require("express-session");

const restaurantAPIRouter = require("./routes/restaurant");

db.sequelize.sync();
dotenv.config();

app.use(morgan("dev"));
app.use("/", express.static("uploads"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "foodRecommend",
  })
);
app.all("/*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:4040");

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");

  next();
});
app.use("/api/restaurant", restaurantAPIRouter);

app.listen("8010", () => {
  console.log(
    "************************************************\n          express running on port 6000\n************************************************"
  );
});
