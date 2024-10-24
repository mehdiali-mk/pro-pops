const express = require("express");
const app = express();
const PORT = "8088";
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const Props = require("./models/props.js");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const { joiPropSchema, joiReviewSchema } = require("./joiSchema.js");
const Reviews = require("./models/review.js");
const propsRouter = require("./routes/propsRoute.js");
const reviewRouter = require("./routes/reviewsRoute.js");
const session = require("express-session");
const flash = require("connect-flash");

const MONGOOSE_URL = "mongodb://127.0.0.1:27017/pops";

main()
  .then(() => {
    console.log("Database is connected...");
  })
  .catch((error) => {
    console.log(error.message);
  });

async function main() {
  await mongoose.connect(MONGOOSE_URL);
}

app.set("view engine", "ejs");
app.set("/views", path.join(__dirname + "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname + "/public")));

const sessionOptions = {
  secret: "MKDJIndia@786",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

app.use(session(sessionOptions));
app.use(flash());

//* Home Route
app.get(
  "/",
  wrapAsync((request, response) => {
    response.redirect("/props");
  })
);

app.use((request, response, next) => {
  response.locals.success = request.flash("success");
  response.locals.error = request.flash("error");
  next();
});

app.use("/props", propsRouter);
app.use("/props/:id/reviews", reviewRouter);

//?
app.all("*", (request, response, next) => {
  next(new ExpressError(404, "Page Not Found"));
});

// ! Middleware for error Handling.
app.use((error, request, response, next) => {
  let { statusCode = 500, message = "Something Went Wrong!!" } = error;
  // response.status(statusCode).send(message);
  response.render("./props/error.ejs", { statusCode, message });
});

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
