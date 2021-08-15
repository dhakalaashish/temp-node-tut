// this is another built-in module

//fs -- file system module
// there are 2 flavors in fs module:
// first one is asynchronously - nonblocking
// second one is synchronoulsy -blocking!

//In this case we are destructuring the method of fs that we are looking for
const { readFileSync, writeFileSync } = require('fs')
console.log('start')
//the above code is equivalent to:  fs.readFileSync  and fs.writeFileSync, if we had used const fs = require('fs')

//readFileSync method needs two parameters:
// a) path to the specific file 
// b)the encoding

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second)

//output will console.log what is inside the two files mentioned!

//writeFileSync helps us create a new file-- we need to pass two arguments:
// a)file name -----also need to mention the path to the file -- if the file is not there, node will create the file
// b)value that we would want to pass!
// c) the third argument is optional, using it will not delete the previous value in the file, but will add to it!

writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second} `, { flag: 'a' });
console.log('done with this task')
console.log('starting the next one')

//a new file names result-sync.txt will be created and the above value will be written inside the file!
// but let's say there there is already a file named result-sync.txt, then when we run "node app.js" the file will be overwritten and the value will change to what we set it up in the writeFileSync method!