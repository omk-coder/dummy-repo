/// os modules
// const os = require('os')

// const user = os.userInfo()
// console.log(user)
// console.log(`here is the uptime ${os.version()}`)

// const currentInfo ={ 
//     name : os.type(),
//     release: os.release(),
//     totaleMem: os.totalmem(),
//     freeMem: os.freemem(),
// }

// console.log(currentInfo)


//dirname is global
// const {readFile, writeFile, readFileSync} = require('fs')
// //if we didnt provide an utf -8 encoding it will give us the error
// readFile('./content/first.txt', 'utf8', (err, result) => {
//     if(err){
//         console.log(err)
//         return;
//     }
//     console.log(result)
// })

// const first = readFileSync('./content/first.txt', 'utf8')

// const second  = readFileSync('./content/second.txt','utf8')

// writeFile('./content/result.txt', `here is the result: ${first},${second}`),
// (err, result) => {
//     if(err) {
//         console.log(err)
//         return 
//     }
//     console.log(result)
// }
// const {readFileSync, writeFileSync} = require('fs')
// const first = readFileSync('./content/first.txt','utf8' )
// const second = readFileSync('./content/second.txt','utf8')
// console.log(first, second)
// writeFileSync('./content/result.txt', `here is the result : ${first}, ${second}`, {
//     flag : 'a'
// })

// console.log('done with this task')
// console.log('starting the next task')

//Creating our wown server

const http = require('http')
const server = http.createServer((req, res) => {

 if(req.url === '/'){
    res.end("Wlecome to our home page")
 }else if(req.url === '/about'){
    res.end("This is our about us page")
 }else{
    res.end(`<h1>Oops!!!</h1>
 <p>You visited the wrong page</p>
 <a href="/">back to main page</a>`)
 }
 

})
server.listen(3000) //port number to send and get the request