const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
require("./DB");
const app = express();

const deviceRouter = require("./routes/deviceRouter");
const userRouter = require("./routes/userRouter");
const billRouter = require("./routes/billRouter");
const deviceTypeRouter = require("./routes/deviceTypeRouter");

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 9000;
app.get("/", (req, res) => {
  return res.json({ msg: "hello server" });
});

app.use("/api/device", deviceRouter);
app.use("/api/user", userRouter);
app.use("/api/bill", billRouter);
app.use("/api/deviceType", deviceTypeRouter);
app.listen(9000, () => {
  console.log(`Server running on port: ${PORT}`);
});
