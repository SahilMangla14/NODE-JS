// It is a built-in module
// We can interact with file path
const path = require('path')

// Path module
console.log(path)
console.log("********************")

// Path.sep
console.log(path.sep); // separator property that returns a platform specific separator
console.log("********************")

// Path.join
const filePath = path.join('/content','subfolder','test.txt') // Joins all of these 
// const filePath = path.join('/content/,'subfolder','test.txt') // slashes will be omitted
console.log(filePath)
console.log("********************")


// Path.basename
const base = path.basename(filePath) // gives the base name of the file path
console.log(base)
console.log("********************")

// Path.resolve
const absolute = path.resolve(__dirname,'content','subfolder','test.txt') // returns an abosolute path
// const absolute = path.resolve(__dirname,'content','subfolder','test.txt') // Even if i don't write __dirname, still it will append the following strings after the current directory
console.log(absolute)
console.log("********************")


