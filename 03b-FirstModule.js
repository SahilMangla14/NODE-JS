// Modules
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum i.e. only what we want to share)

const names = require('./04-names')  // we require this module or this js file
const sayHi = require('./05-utils')
const data = require('./06-alternative-flavour')
console.log(data)
require('./7-mind-grenade') // This will run the function in mind grenade file
sayHi('susan');
// sayHi(john) This is wrong because john is not defined
sayHi(names.john)  // john is present in names object
sayHi(names.peter) // other method is destructing object like const {john,peter} = require('./04-names');


// Here we see that console.log and addValue also run.
// Actually whenever we import a file all its functions also get invoked and the data we exported comes into the file
// therefore require will invoke all the functions in the file which we imported
