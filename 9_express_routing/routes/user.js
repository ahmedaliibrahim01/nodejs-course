const express = require("express");
const path = require("path");
const router = express.Router();

function notFound(response) {
  response
    .status(404)
    .sendFile(path.join(__dirname, "../views", "404.html"), (err) => {
      if (err) {
        response.status(404).end("404 Not Found");
      }
    });
}

router.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "../views", "index.html"), (err) => {
    notFound(response);
  });
});

router.use((request, response) => {
  response
    .status(404)
    .sendFile(path.join(__dirname, "views", "404.html"), (err) => {
      notFound(response);
    });
});

module.exports = router;
