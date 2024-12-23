const Props = require("../models/props.js");

module.exports.home = async (request, response) => {
  const allProps = await Props.find({});

  response.render("props/allProps.ejs", { allProps });
};

module.exports.new = async (request, response) => {
  response.render("props/newProp");
};

module.exports.show = async (request, response) => {
  const { id } = request.params;
  const prop = await Props.findById(id).populate("reviews");

  if (!prop) {
    request.flash("error", "Property does not exist");
    response.redirect("/");
  }

  response.render("props/showProp.ejs", { prop });
};

module.exports.add = async (request, response, next) => {
  const url = request.file.path;
  const fileName = request.file.filename;

  const newProp = new Props(request.body.prop);
  newProp.image = { url, fileName };
  await newProp.save();

  request.flash("success", "New Property has Added!");
  response.redirect("props");
};

module.exports.edit = async (request, response) => {
  const { id } = request.params;
  const prop = await Props.findById(id);

  if (!prop) {
    request.flash("error", "Property does not exist");
    response.redirect("/");
  }

  let propImageUrl = prop.image.url;
  propImageUrl.replace("/upload", "/upload/w_150");

  response.render("props/edit.ejs", { prop, propImageUrl });
};

module.exports.update = async (request, response) => {
  const { id } = request.params;
  updatedProp = { ...request.body.prop };
  let newProp = await Props.findByIdAndUpdate(id, updatedProp);
  // newProp.image = { url: "google.com", fileName: "GOOGLE" };
  // console.log(newProp);
  // console.log(request.file.url);
  // console.log(request.file.filename);
  if (typeof request.file !== "undefined") {
    const url = request.file.path;
    const fileName = request.file.filename;

    newProp.image = { url, fileName };
    await newProp.save();
  }
  request.flash("success", "Property has Updated!");
  response.redirect(`/props/${id}`);
};

module.exports.delete = async (request, response) => {
  const { id } = request.params;
  const deletedProp = await Props.findByIdAndDelete(id);
  console.log(deletedProp);
  request.flash("success", "Property has Deleted!");
  response.redirect("/");
};
