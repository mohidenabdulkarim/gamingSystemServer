const express = require("express");
const cors = require("cors");

require("./DB");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ msg: "hello server" });
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
