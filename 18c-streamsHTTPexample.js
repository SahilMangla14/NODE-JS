// var http = require('http')
// var fs = require('fs')

// http.createServer(function (req,res){
//     const text = fs.readFileSync('./content/big.txt','utf8')
//     res.end(text)
// })
// .listen(5000)


// In the above method, we are providing a huge file.
// And this possibly is not the best way of sending huge files


var http = require('http')
var fs = require('fs')

http.createServer(function (req,res){
    const fileStream = fs.createReadStream('./content/big.txt','utf8')
    fileStream.on('open',()=>{
        fileStream.pipe(res)   // pipe method is used to push data from read stream to write stream in chunks
    })
    fileStream.on('error',()=>{
        res.end(err)
    })
})
.listen(5000)

// Now, by this method size of the file is not decreased
// but we pass the whole big file in chunks/parts
