const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const User = require("../models/user");
const passport = require("passport");

router.get("/signup", (request, response) => {
  response.render("users/signup.ejs");
});

router.post(
  "/signup",
  wrapAsync(async (request, response) => {
    try {
      const { username, email, password } = request.body;
      const newUser = new User({ email, username });
      const registeredUser = await User.register(newUser, password);
      console.log(registeredUser);
      request.flash("success", "Signup Successfully");
      response.redirect("/login");
    } catch (error) {
      request.flash("error", error.message);
      response.redirect("/signup");
    }
  })
);

router.get("/login", (request, response) => {
  response.render("users/login.ejs");
});

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  async (request, response) => {
    request.flash("success", "Welcome to ProPops!!");
    response.redirect("/props");
  }
);

module.exports = router;
