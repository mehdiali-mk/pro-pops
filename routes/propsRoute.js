const express = require("express");
const router = express.Router();
const Props = require("../models/props.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { joiPropSchema } = require("../joiSchema.js");
const { isLoggedIn } = require("../middleware.js");

const propsController = require("../controller/propsController.js");

//! Middleware for validate entries.
const validatePropsSchema = (request, response, next) => {
  const { error } = joiPropSchema.validate(request.body);
  if (error) {
    let errorMessage = error.details
      .map((element) => element.message)
      .join(",");
    throw new ExpressError(400, errorMessage);
  } else {
    next();
  }
};

router
  .route("/")
  .get(wrapAsync(propsController.home))
  .post(isLoggedIn, validatePropsSchema, wrapAsync(propsController.add));

//* New Route
router.get("/new", isLoggedIn, wrapAsync(propsController.new));

router
  .route("/:id")
  .get(wrapAsync(propsController.show))
  .put(isLoggedIn, validatePropsSchema, wrapAsync(propsController.update))
  .delete(isLoggedIn, wrapAsync(propsController.delete));

//* Edit Route
router.get("/:id/edit", isLoggedIn, wrapAsync(propsController.edit));

module.exports = router;
