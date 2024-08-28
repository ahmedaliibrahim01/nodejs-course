const express = require("express");
const path = require("path");
const app = express();

app.use("/static", express.static(path.join(__dirname, "public")));


app.use("/blogs/:blogid/users/:username", function (req, res) {
  console.log(req.params.blogid);
  console.log(req.params.username);
  res.send("blog detay sayfası");
});

app.use("/blogs", function (req, res) {
  res.send("blog listesi");
});

app.use("/", function (req, res) {
  res.sendFile(path.join(__dirname, "views/users","index.html"));
});

app.listen(3000, function () {
  console.log("listening on port 3000");
});
