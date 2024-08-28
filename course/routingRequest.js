const http = require('http');

http.createServer((request, response)=>{
    if(request.url === '/'){
        response.write("Home")
    }else if(request.url === '/about'){
        response.write("About")
    }else if(request.url === '/contact'){
        response.write("Contact")
    } else{
        response.write("Page not found!")
    }
    response.end();
}).listen(3000)