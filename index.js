const express = require("express");
const app = express();
const PORT = "8088";
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const Props = require("./models/props.js");

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

app.get("/", (request, response) => {
  response.send("Welcome! To home");
});

app.get("/test", async (request, response) => {
  const dummyData = new Props({
    title: "First Title",
    description: "First Description",
    price: 450000,
    location: "First Location",
    country: "First Country",
  });
  await dummyData
    .save()
    .then((response) => {
      console.log("Data saved successfully: ", response);
    })
    .catch((error) => {
      console.log(error.message);
    });
  response.send("Succefully Send");
});

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
