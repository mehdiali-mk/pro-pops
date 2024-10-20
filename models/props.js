const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Reviews = require("./review.js");

const DEFAULT_IMAGE_URL =
  "https://images.unsplash.com/photo-1571168538867-ad36fe110cc4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const propSchema = new Schema({
  title: {
    type: "String",
    required: true,
  },
  description: {
    type: "String",
    required: true,
  },
  image: {
    type: "String",
    default: DEFAULT_IMAGE_URL,
    set: (userValue) => (userValue === "" ? DEFAULT_IMAGE_URL : userValue),
  },
  price: {
    type: "Number",
    required: true,
    min: 0,
  },
  location: { type: "String", required: true },
  country: { type: "String", required: true },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

propSchema.post("findOneAndDelete", async (prop) => {
  if (prop) {
    await Reviews.deleteMany({ _id: { $in: prop.reviews } });
  }
});
const Prop = mongoose.model("Prop", propSchema);
module.exports = Prop;
