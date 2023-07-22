//Setting up server to run on PORT 3000.
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "./index.html")));

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`Touring Tanzania listening at http://localhost:${PORT}`);
});
