const os = require('os')




//method returns system uptime

console.log(`The sysytem uptime is ${os.uptime()} seconds`)


const currentOS = {
    name: os.type(),
    release:os.release(),
    totalMen:os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)