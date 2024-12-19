const Reviews = require("../models/review.js");
const Props = require("../models/props.js");

module.exports.addReview = async (request, response) => {
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
};

module.exports.deleteReview = async (request, response) => {
  const { id, reviewId } = request.params;

  await Props.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Reviews.findByIdAndDelete(reviewId);
  request.flash("success", "Review has Deleted!");
  response.redirect(`/props/${id}`);
};
