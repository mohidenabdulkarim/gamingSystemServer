var util = require("util");
var encoder = new util.TextEncoder("utf-8");
const mongoose = require("mongoose");

const DB = process.env.ONLINE_DB.replace("<password>", process.env.DB_PASSWORD);

mongoose
  .connect(
    "mongodb+srv://i7usen:i7ussein@cluster0.9o7vy.mongodb.net/GamingCenter?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("CONNECTED");
  })
  .catch((err) => console.log(err));
