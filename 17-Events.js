// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// console.log(EventEmitter)
console.log(customEmitter)

// .on -> It will listen to the event
customEmitter.on('response',(name,id)=>{
    console.log(`data recieved ${name} with id:${id}`)
})

customEmitter.on('response',()=>{
    console.log(`some other logic here`)
})
// .emit -> It will emit that event
// The name is emit should match with the name in on
customEmitter.emit('response','john',34)
console.log(customEmitter)

//*********************************************************
// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it
// ********************************************************