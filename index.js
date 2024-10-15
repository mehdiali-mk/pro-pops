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

//* Home Route
app.get(
  "/",
  wrapAsync((request, response) => {
    response.redirect("/props");
  })
);

//* Home Route
app.get(
  "/props",
  wrapAsync(async (request, response) => {
    const allProps = await Props.find({});

    response.render("./props/allProps.ejs", { allProps });
  })
);

//* New Route
app.get(
  "/props/new",
  wrapAsync(async (request, response) => {
    response.render("./props/newProp");
  })
);

//* Show Route
app.get(
  "/props/:id",
  wrapAsync(async (request, response) => {
    const { id } = request.params;
    const prop = await Props.findById(id);

    response.render("./props/showProp.ejs", { prop });
  })
);

//* Add Route
app.post(
  "/props",
  wrapAsync(async (request, response, next) => {
    const newProp = new Props(request.body.prop);
    await newProp.save();
    response.redirect("/props");
  })
);

//* Edit Route
app.get(
  "/props/:id/edit",
  wrapAsync(async (request, response) => {
    const { id } = request.params;
    const prop = await Props.findById(id);

    response.render("./props/edit.ejs", { prop });
  })
);

//* Update Route
app.put(
  "/props/:id",
  wrapAsync(async (request, response) => {
    const { id } = request.params;
    updatedProp = { ...request.body.prop };
    await Props.findByIdAndUpdate(id, updatedProp);

    response.redirect(`/props/${id}`);
  })
);

//* Delete Route
app.delete(
  "/props/:id",
  wrapAsync(async (request, response) => {
    const { id } = request.params;
    const deletedProp = await Props.findByIdAndDelete(id);
    console.log(deletedProp);

    response.redirect("/props");
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
  console.log(request.params);
});

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
