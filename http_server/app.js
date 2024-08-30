const http = require("http");

http
  .createServer((request, respose) => {
    respose.end("Hello");
  })
  .listen(3000);
