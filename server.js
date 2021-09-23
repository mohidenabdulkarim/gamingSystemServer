const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./DB");
const app = express();
const PORT = process.env.PORT || 5000;
const deviceRouter = require("./routes/deviceRouter");
const userRouter = require("./routes/userRouter");
const billRouter = require("./routes/billRouter");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ msg: "hello server" });
});

app.use("/api/device", deviceRouter);
app.use("/api/user", userRouter);
app.use("/api/bill", billRouter);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
