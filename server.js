const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("Hi from nodejs");
});

app.listen(4000, () => {
  console.log("server listening on port 4000");
});
