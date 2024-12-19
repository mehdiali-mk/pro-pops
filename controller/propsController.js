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
  const newProp = new Props(request.body.prop);
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
  response.render("props/edit.ejs", { prop });
};

module.exports.update = async (request, response) => {
  const { id } = request.params;
  updatedProp = { ...request.body.prop };
  await Props.findByIdAndUpdate(id, updatedProp);
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
