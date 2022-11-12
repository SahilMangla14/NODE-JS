// STREAMS
// FOUR DIFFERENT TYPES OF STREAMS
// 1) Writeable -  used to write data sequentially
// 2) Readable - used to read data sequentially
// 3) Duplex - used to both read and write data sequentially
// 4) Transform - used to transform data where data can be modified when writing or reading
// Streams extend events emitter class which simply means we can use on and emit with streams

// Earlier when we are reading a file using readFileSync or readFile, we are storing it in a variable
// If the file size is too big, then it is not possible to store it in a variable, it will throw an error showing file size too big!!
// To solve this problem we have read strea

const { createReadStream } = require('fs')

const stream = createReadStream('./content/big.txt')

stream.on('data',(result)=>{
    console.log(result)
})

stream.on('error',(err)=>{
    console.log(err)
})
// Here event is 'data' -> remember it
// stream.emit('data')
// Here, writing emit won't affect. May be, it is called here automatically
// Now what is happening is, it is reading file in chunks of 64kb

// Additional info
// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })
// const stream = createReadStream('../content/big.txt', { highWaterMark:90000 ,encoding: 'utf8' })