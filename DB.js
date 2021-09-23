const mongoose = require("mongoose");

//

mongoose
  .connect(
    "mongodb+srv://i7usen:i7ussein@cluster0.9o7vy.mongodb.net/GamingCenter?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("CONNECTED");
  })
  .catch((err) => console.log(err));
