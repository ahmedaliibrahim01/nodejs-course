const http = require("http");
const fs = require("fs");

http.createServer((request, response) => {
  if (request.url === "/" && request.method === "GET") {
    fs.readFile("views/index.html", (err, data) => {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(data);
        response.end();
    });
  } else if (request.url === "/create" && request.method === "GET") {
    fs.readFile("views/create.html", (err, data) => {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(data);
        response.end();
    });
  } else if (request.url === "/create" && request.method === "POST") {
    fs.appendFile("create.txt", "Ahmed", (err)=> {
        response.statusCode = 302;
        response.setHeader("Location", "/")
        response.end();
    })
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.end("404 Not Found");
  }
}).listen(3000);

console.log("Server running at http://localhost:3000/");