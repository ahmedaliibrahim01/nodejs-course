const http = require("http");
const fs = require("fs");

http
  .createServer((request, response) => {
    fs.readFile("views/index.html", (err, data) => {
      if (err) {
        return fs.readFile("views/404.html", (err404, data404) => {
          if (err404) {
            response.writeHead(404, { "Content-Type": "text/html" });
            return response.end("404 Not Found");
          }
          response.writeHead(404, { "Content-Type": "text/html" });
          response.write(data404);
          return response.end();
        });
      }
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(data);
      return response.end();
    });
  })
  .listen(3000);

console.log("Server running at http://localhost:3000/");
