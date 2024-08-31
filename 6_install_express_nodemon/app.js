const express = require("express");

const app = express();

app
  .use((request, response) => {
    response.end("Hi World!");
  })
  .listen(3000);