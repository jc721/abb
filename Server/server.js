const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
const port = 1234;

app.use(cors());

const parts = JSON.parse(fs.readFileSync("data/parts.json", "utf8"));

app.get("/parts", (req, res) => {
  res.send(JSON.stringify(parts));
});

app.listen(port, () => {
  console.info(`Listening on Port: ${port}`);
});
