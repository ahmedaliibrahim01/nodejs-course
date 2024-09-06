const express = require("express");
const app = express();
const path = require("path");

app.get("/", (request, response) => {
  response.send("Middleware 1");
});

app.get("/2", (request, response) => {
  console.log(__dirname);
  response.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/3", (request, response) => {
  response.send("Middleware 3");
});

app.listen(3000);
