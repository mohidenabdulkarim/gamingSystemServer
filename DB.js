const mongoose = require("mongoose");
mongoose
  .connect(process.env.ONLINE_DB)
  .then(() => console.log("connected"))
  .catch((err) => {
    console.log(err);
  });
