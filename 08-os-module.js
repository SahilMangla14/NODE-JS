// It is a built-in module
// since os is a built-in module so, we don't need to download it
// Helps in interacting with operating system
const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

// Getting information about os
const currentOS = {
    name: os.type,
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS.name())
console.log(currentOS)
console.log(currentOS.release)