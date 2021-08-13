// This is the next built in module
// path module

const path = require('path')

//separator property -- platfrom specific separator
console.log(path.sep)

// join method --- joins a sequence of path segments using that platform specific separator as the limiter and second thing it does is that it returns a normalized resulting path
const filePath = path.join('./content', 'subfolder', 'text.txt')
console.log(filePath)

// baseName --- like the last portion of the filePath

const base = path.basename(filePath)
console.log(base);

// path.resolve() --- this returns an absolute path!

const absolutePath = path.resolve(__dirname, './content', 'subfolder', 'text.txt');
console.log(absolutePath)