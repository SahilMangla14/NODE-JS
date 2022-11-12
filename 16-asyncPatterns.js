const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Home Page')
    }
    else if(req.url === '/about'){
        // Blocking code
        for(let i=0;i<10000000000000;i++){
            for(let j=0;j<10000000000000000;j++){
                // console.log(`${i} ${j}`)
            }
        }
        res.end('About Page')
    }
    else{
        res.end('Error Page')
    }
})

server.listen(5000,()=>{
    console.log('Server Listening on port 5000...')
})

// One may think that those who will visit about face have to wait
// but things are not like this
// other users who are on other pages also have to wait
// that is we are blocking the other users
// above is synchronus approach
