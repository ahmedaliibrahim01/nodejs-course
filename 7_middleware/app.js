const express = require('express');

const app = express();

app.use((request, response, next) =>{
    console.log("Middleware 1")
    next()
})


app.use((request, response, next) =>{
    console.log("Middleware 2")
    next()
})


app.use((request, response) =>{
    console.log("Middleware 3")
    response.end("Midlleware 3")
})

app.listen(3000)