const path = require('path')
console.log(path)

const filePath = path.join('/content/', 'subfolder', 'x.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)
const resolve = path.resolve(__dirname, 'content', 'subfolder', 'x.txt')
console.log(resolve)// shows the whole path
