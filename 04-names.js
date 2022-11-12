// Local to this file only
const secret = 'SUPER SECRET'
// Share with other files
const john = 'john'
const peter = 'peter'

console.log(module);   // This will also work in 03b-FirstModule.js file // Here it is empty
module.exports = {john,peter};  // To sell/export this to other files
console.log(module); // now exports have values
// Module is an object which contains one property called exports
// Exports is also an object which initially is empty
