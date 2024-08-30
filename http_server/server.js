const http = require("http");

const reqRes = function (requesr, respose) {
  respose.end("Hello");
};

const server = http.createServer(reqRes);

server.listen(3000);
