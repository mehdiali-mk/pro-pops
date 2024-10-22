const express = require("express");
const router = express.Router();
const Props = require("../models/props.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { joiPropSchema, joiReviewSchema } = require("../joiSchema.js");

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
router.get(
  "/",
  wrapAsync(async (request, response) => {
    const allProps = await Props.find({});

    response.render("props/allProps.ejs", { allProps });
  })
);

//* New Route
router.get(
  "/new",
  wrapAsync(async (request, response) => {
    response.render("props/newProp");
  })
);

//* Show Route
router.get(
  "/:id",
  wrapAsync(async (request, response) => {
    const { id } = request.params;
    const prop = await Props.findById(id).populate("reviews");

    response.render("props/showProp.ejs", { prop });
  })
);

//* Add Route
router.post(
  "/",
  validatePropsSchema,
  wrapAsync(async (request, response, next) => {
    const newProp = new Props(request.body.prop);
    await newProp.save();
    response.redirect("props");
  })
);

//* Edit Route
router.get(
  "/:id/edit",
  wrapAsync(async (request, response) => {
    const { id } = request.params;
    const prop = await Props.findById(id);

    response.render("props/edit.ejs", { prop });
  })
);

//* Update Route
router.put(
  "/:id",
  validatePropsSchema,
  wrapAsync(async (request, response) => {
    const { id } = request.params;
    updatedProp = { ...request.body.prop };
    await Props.findByIdAndUpdate(id, updatedProp);

    response.redirect(`props/${id}`);
  })
);

//* Delete Route
router.delete(
  "/:id",
  wrapAsync(async (request, response) => {
    const { id } = request.params;
    const deletedProp = await Props.findByIdAndDelete(id);
    console.log(deletedProp);

    response.redirect("props");
  })
);

module.exports = router;
