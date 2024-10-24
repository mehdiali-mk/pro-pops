const express = require("express");
const router = express.Router({ mergeParams: true });
const Reviews = require("../models/review.js");
const Props = require("../models/props.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { joiReviewSchema } = require("../joiSchema.js");

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
router.post(
  "/",
  validateReviewSchema,
  wrapAsync(async (request, response) => {
    const ID = request.params.id;
    console.log(ID);
    const prop = await Props.findById(ID);
    let newReview = new Reviews(request.body.review);

    prop.reviews.push(newReview);

    await newReview.save();
    await prop.save();
    request.flash("success", "New Review has Added!");
    console.log("New Review Saved");
    response.redirect(`/props/${ID}`);
  })
);

//* Delete Review Route
router.delete(
  "/:reviewId",
  wrapAsync(async (request, response) => {
    const { id, reviewId } = request.params;

    await Props.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Reviews.findByIdAndDelete(reviewId);
    request.flash("success", "Review has Deleted!");
    response.redirect(`/props/${id}`);
  })
);

module.exports = router;
