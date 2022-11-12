const http = require('http')

// It won't work until the request comes in but before that rest of code get excecuted
const server = http.createServer((req,res)=>{
    console.log('Request event')
    res.end('Hello World')
})

server.listen(5000,()=>{
    console.log('Server listening on port : 5000....')
})