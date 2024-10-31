const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const User = require("../models/user");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware");

router.get("/signup", (request, response) => {
  response.render("users/signup.ejs");
});

router.post(
  "/signup",
  wrapAsync(async (request, response, next) => {
    try {
      const { username, email, password } = request.body;
      const newUser = new User({ email, username });
      const registeredUser = await User.register(newUser, password);
      console.log(registeredUser);
      request.login(registeredUser, (error) => {
        if (error) {
          return next(error);
        }
        request.flash("success", "Signup and Login Successfully");
        response.redirect("/props");
      });
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
  saveRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  async (request, response) => {
    request.flash("success", "Welcome to ProPops!!");
    response.redirect(response.locals.redirectURL);
  }
);

router.get("/logout", (request, response, next) => {
  request.logout((error) => {
    if (error) {
      return next(error);
    }
    request.flash("success", "Logged Out Successfully!");
    response.redirect("/props");
  });
});

module.exports = router;
