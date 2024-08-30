const http = require("http");
const fs = require("fs");
const path = require("path");

http
  .createServer((request, response) => {
    if (request.url === "/") {
      fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
        response.end(data);
      });
    } else if (request.url === "/about") {
      fs.readFile(path.join(__dirname, "about.html"), (err, data) => {
        response.end(data);
      });
    } else if (request.url === "/contact") {
      fs.readFile(path.join(__dirname, "contact.html"), (err, data) => {
        response.end(data);
      });
    } else {
      fs.readFile(path.join(__dirname, "404.html"), (err, data) => {
        response.end(data);
      });
    }
  })
  .listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
  });
