const express = require("express");
const app = express();

app.use((request, response, next) => {
  console.log("MiddleWare 1");
  next();
});

app.use((request, response, next) => {
  console.log("MiddleWare 2");
  next();
});

app.use((request, response) => {
  console.log("MiddleWare 3");
  response.end();
});

app.listen(3000);

