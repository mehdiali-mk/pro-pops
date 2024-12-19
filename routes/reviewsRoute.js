const express = require("express");
const router = express.Router({ mergeParams: true });
const Reviews = require("../models/review.js");
const Props = require("../models/props.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { joiReviewSchema } = require("../joiSchema.js");

const reviewsController = require("../controller/reviewsController.js");

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

//? Reviews
//* Post Review Rout
router.post("/", validateReviewSchema, wrapAsync(reviewsController.addReview));

//* Delete Review Route
router.delete("/:reviewId", wrapAsync(reviewsController.deleteReview));

module.exports = router;
