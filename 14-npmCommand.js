// npm - global command, comes with node
// npm --version         gives the version of npm we are using

// We can download packages as local dependency or global dependency

// local dependency - use it only in this particular project
// npm i <packageName>                npm i stands for install and then packageName

// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

// package.json - manifest file (stores or contains important info about project/package)
// Three methods to create
// manual approach (create package.json in the root, create properties etc.)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// The package we install go in the dependencies of json file
// When we install one package, may be several other packages are also installed because the requrired package may depend on certain other packages

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)


// nodemon
// intalling nodemon simply -> npm i nodemon
// installing nodemon as dev dependency -> npm i nodemon -D or npm i nodemon --save-dev
// We can also install other packages as dev dependencies
// When we run our application in nodemon, it keeps watching it.
// Whenever there is a change it runs again

// scripts
// We set up commands or keywords
// for eg-> "start":"node app.js"
// Now we can run app.js by simply writing npm start
// For some commands npm keyword will work but 
// actual syntax is -> npm run keyword 
// here it is npm run start


// Uninstalling the packages
// Method 1 -> using command
// npm uninstall packageName

// Method 2 -> Nuclear Method
// step1 -> Delete node_modules folder
// step2 -> Delete package-lock.json file
// step3 -> remove the package we want to remove from the dependencies
// step4 -> use command npm install which will install all the packages that are there in dependencies of package.json file

// Global install -> installing the package globally on computer

// package-lock.json ->
// Whenever the version of some package changes, it is possible that the program develops some bugs
// That is why, we have package-lock.json file
// It contains the version of our dependencies and not only dependencies but also the version of sub dependencies on which our actual dependencies depends upon
// Then, we can install those version packages only and we don't face any problems

