module.exports.isLoggedIn = (request, response, next) => {
  if (!request.isAuthenticated()) {
    request.session.redirectURL = request.originalUrl;
    request.flash("error", "You must be logged in!");
    return response.redirect("/login");
  }
  next();
};

module.exports.saveRedirectUrl = (request, response, next) => {
  if (request.session.redirectURL) {
    response.locals.redirectURL = request.session.redirectURL;
  } else {
    response.locals.redirectURL = "/props";
  }
  next();
};
