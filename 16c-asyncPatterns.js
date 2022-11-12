// Now we also don't want to make gettext function as it is nested
// So, we will use a library called util

const {readFile, writeFile} = requrire('fs')
const util = require('util')
const readFilePromise = util.promisify(readFile)   // it will convert readFile into a function which will return a promise which is resolved if the path is correct else wrong
const writeFilePromise = util.promisify(writeFile)

const start = async()=>{
    try {
        const first = await readFilePromise('./content/first.txt','utf8')
        const second = await readFilePromise('./content/second.txt','utf8')
        await writeFilePromise('./content/result-mine-grenade.txt',`This is awesome : ${first} ${second}`)
        console.log(first,second)
    }
    catch(error){
        console.log(error)
    }
}

start()


// const {readFile, writeFile} = requrire('fs')
// const util = require('util')
// const readFilePromise = util.promisify(readFile)   // it will convert readFile into a function which will return a promise which is resolved if the path is correct else wrong
// const writeFilePromise = util.promisify(writeFile)

// The above part can also be written like
// const {readFile, writeFile} = require('fs').promises
// Now, readFile and writeFile themselves get converted to functions returning promises
// const start = async()=>{
//     try {
//         const first = await readFile('./content/first.txt','utf8')
//         const second = await readFile('./content/second.txt','utf8')
//         await writeFile('./content/result-mine-grenade.txt',`This is awesome : ${first} ${second}`)
//         console.log(first,second)
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// start()