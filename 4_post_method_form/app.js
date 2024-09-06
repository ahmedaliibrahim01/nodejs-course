const http = require("http");
const fs = require("fs");

http
  .createServer((request, response) => {
    if (
      request.url === "/" ||
      (request.url === "/create" && request.method === "GET")
    ) {
      fs.readFile("form.html", (err, data) => {
        if (err) {
          response.end("404 Not Found");
        }
        response.write(data);
        response.end();
      });
    } else if (
      request.url === "/" ||
      (request.url === "/create" && request.method === "POST")
    ) {
      const data = [];

      request.on("data", (chunk) => {
        data.push(chunk);
      });

      request.on("end", () => {
        const result = Buffer.concat(data).toString();
        console.log(result);
      });
      fs.readFile("form.html", (err, data) => {
        if (err) {
          response.end("404 Not Found");
        }
        response.write(data);
        response.end();
      });
    } else {
      response.end("404 Not Found");
    }
  })
  .listen(3000);
