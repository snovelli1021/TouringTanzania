//Setting up server to run on PORT 8080.
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "./index.html")));

app.use(express.static(path.join(__dirname, "public")));

app.listen(process.env.PORT || 8080, "0.0.0.0", () => {
  console.log(`Touring Tanzania listening at http://localhost:${PORT}`);
});
