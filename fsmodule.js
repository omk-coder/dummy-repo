//sync method
const {readFileSync, writeFileSync} = require('fs')
const first = readFileSync('./content/first.txt','utf8' )
const second = readFileSync('./content/second.txt','utf8')
console.log(first, second)
writeFileSync('./content/result.txt', `here is the result : ${first}, ${second}`, {
    flag : 'a'
})

console.log('done with this task')
console.log('starting the next task')

