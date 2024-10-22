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

//! Middleware for validate entries.
const validateReviewSchema = (request, response, next) => {
  const { error } = joiReviewSchema.validate(request.body);
  if (error) {
    let errorMessage = error.details
      .map((element) => element.message)
      .join(",");
    throw new ExpressError(400, errorMessage);
  } else {
    next();
  }
};

app.use("/props", propsRouter);

//* Home Route
app.get(
  "/",
  wrapAsync((request, response) => {
    response.redirect("/props");
  })
);

//? Reviews
//* Post Review Rout
app.post(
  "/props/:id/reviews",
  validateReviewSchema,
  wrapAsync(async (request, response) => {
    const ID = request.params.id;
    const prop = await Props.findById(ID);
    let newReview = new Reviews(request.body.review);

    prop.reviews.push(newReview);

    await newReview.save();
    await prop.save();

    console.log("New Review Saved");
    response.redirect(`/props/${ID}`);
  })
);

//* Delete Review Route
app.delete(
  "/props/:id/reviews/:reviewId",
  wrapAsync(async (request, response) => {
    const { id, reviewId } = request.params;

    await Props.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Reviews.findByIdAndDelete(reviewId);

    response.redirect(`/props/${id}`);
  })
);

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
