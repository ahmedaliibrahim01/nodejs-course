const http = require("http");
const fs = require("fs");
const path = require("path");

http
  .createServer((request, response) => {
    if (request.url === "/") {
      fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
        response.end(data);
      });
    } else if (request.url === "/create" && request.method == "POST") {
      fs.appendFile("blogs.txt", "test", (err) => {
        if (err) {
          console.log(err);
        } else {
          response.statusCode = 302;
          response.setHeader("Location", "/");
          response.end();
        }
      });
    } else if (request.url === "/create") {
      fs.readFile(path.join(__dirname, "create.html"), (err, data) => {
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
