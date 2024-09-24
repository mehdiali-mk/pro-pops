const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DEFAULT_IMAGE_URL =
  "https://images.unsplash.com/photo-1571168538867-ad36fe110cc4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const propSchema = new Schema({
  title: {
    type: "String",
    required: true,
  },
  description: {
    type: "String",
  },
  image: {
    type: "String",
    default: DEFAULT_IMAGE_URL,
    set: (userValue) => (userValue === "" ? DEFAULT_IMAGE_URL : userValue),
  },
  price: "Number",
  location: "String",
  country: "String",
});

const Prop = mongoose.model("Prop", propSchema);
module.exports = Prop;
