 //os modules
const os = require('os')

 const user = os.userInfo()
 console.log(user)
 console.log(`here is the uptime ${os.version()}`)
 const currentInfo ={ 
     name : os.type(),
 release: os.release(),
  totaleMem: os.totalmem(),
    freeMem: os.freemem(),
 }

console.log(currentInfo)