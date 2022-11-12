const {readFileSync, writeFileSync} = require('fs'); // This is same just we extrated some properties from fs
                                                     // We cannot use different word while destructuring like we cannot write WriteFileSync otherwise it will give error

// Read file sync -> Read file synchronously
const first = readFileSync('./content/first.txt','utf8') // If we don't provide the utf8 encoding, then we will get buffer
const second = readFileSync('./content/second.txt','utf8')

console.log(first)
console.log(second)

// Write in a file synchronously
writeFileSync('./content/result-sync.txt',`Here is the result : ${first}, ${second}`,{flag:'a'})
// Two parameters necessary
// 1) filepath -> if file is there, contents are overwritten
                // -> if file is not there, new file is created
// 2) string we want to write in the file
// 3) if we also provide 3rd argument {flag:'a'}, it will append the string to the content already existing in file
