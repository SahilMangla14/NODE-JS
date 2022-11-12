const http = require('http')

const server = http.createServer((req,res)=>{  // To create server // get request from cliet // send back response
    console.log(res)  // We will get response when we request from localhost:5000
    res.write('Welcome to our home page') // To write our response on web page
    res.end()
})

server.listen(5000) // Create a server that listens on port 5000 of your computer.

// jab tak hamaara terminal mein node run karta rahega tab tak localhost:5000 pe hame response milta rahega
// but jaise hi program close kiya, server down ho jayega and response web page per nahi milega

// What is happening
// When we load a webpage, a request or request object is sent to the server to which the server provides the response object
// which has certain properties, some of which are write and end
