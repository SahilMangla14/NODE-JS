const http = require('http')

const server = http.createServer((req, res) => {  // To create server // get request from cliet // send back response
    // console.log(req)
    // url is the property of request object
    if (req.url === '/') { // means home page
        res.end('Welcome to our home page')
    }
    else if (req.url === '/about') {
        res.end('Here is our short history')
    }
    else {
        res.end(`
        <h1>Oops!</h1>
        <p> We can;t seem to find the page you are looking for</p>
        <a href="/">back home</a>
        `)
    }
})

server.listen(5000) // Create a server that listens on port 5000 of your computer.