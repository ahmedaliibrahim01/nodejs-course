const express = require("express");
const app = express();

app.use((request, response) => {
  response.end("Express");
});

app.listen(3000, () => {
  console.log("Express wornking");
});