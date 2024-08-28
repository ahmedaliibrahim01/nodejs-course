const http = require('http');

http.createServer((request,respone) => {
    respone.write('Server is working')
    respone.end()
}).listen(3000)