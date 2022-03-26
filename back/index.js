const express = require("express");
// const cookieParser = require("cookie-parser");
const db = require("./models");
const app = express();
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const expressSession = require("express-session");
const prod = process.env.NODE_ENV === "production";
const restaurantAPIRouter = require("./routes/restaurant");

db.sequelize.sync();
dotenv.config();

app.use(morgan("dev"));
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
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
app.use("/", (req, res) => {
  res.send("백엔드 정상 작동");
});
// app.all("/*", (req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");

//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");

//   next();
// });
app.use("/api/restaurant", restaurantAPIRouter);

app.listen(prod ? process.env.PORT : 8010, () => {
  console.log(
    `************************************************\n          express running on port ${process.env.PORT}\n************************************************`
  );
});
