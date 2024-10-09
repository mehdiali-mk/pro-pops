const mongoose = require("mongoose");
const initData = require("../init/data.js");
const Props = require("../models/props.js");

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

const initDatabase = async () => {
  await Props.deleteMany({});
  await Props.insertMany(initData.data);
  console.log("Data has been initialized...");
};

initDatabase();
