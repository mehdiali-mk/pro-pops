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

//* Home Route
router.get("/", wrapAsync(propsController.home));

//* New Route
router.get("/new", isLoggedIn, wrapAsync(propsController.new));

//* Show Route
router.get("/:id", wrapAsync(propsController.show));

//* Add Route
router.post(
  "/",
  isLoggedIn,
  validatePropsSchema,
  wrapAsync(propsController.add)
);

//* Edit Route
router.get("/:id/edit", isLoggedIn, wrapAsync(propsController.edit));

//* Update Route
router.put(
  "/:id",
  isLoggedIn,
  validatePropsSchema,
  wrapAsync(propsController.update)
);

//* Delete Route
router.delete("/:id", isLoggedIn, wrapAsync(propsController.delete));

module.exports = router;
