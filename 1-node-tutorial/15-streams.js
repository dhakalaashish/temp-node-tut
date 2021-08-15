//Streams

//At its simplest streams are used to read and write sequentially, basically when we have to handle and manipulate 
//streaming data for example continuous-source or big-file streams come in handy, in node there are 4 different kinds of streams
//a) writeable - used to write data sequentially
//b) readable - used to read data sequentially
//c) duplex - used to both read and write data sequentially
//d) transform - where data can be modified when reading or writing
//Just like with events, many built-in modules in node.js implement streaming interface, and streams extend EventEmitter class
// which means we can use events like 'data' and 'and' on streams

//when we use asyn or sync to read a file, we are reading a whole file! We normally assign the readFile method to a variable,
//but when the file to be read is too big then, the variable will not be able to contain the file, and that might create error
//as we will not be able to put everything in the string
//the solution ----- readStream Method!


const { createReadStream } = require('fs')

const stream = createReadStream('./content/big.txt', { highWaterMark: 9000, encoding: 'utf8' });

//then we will use events, and the event that we will want to listen on is data! 

stream.on('data', (result) => {
    console.log(result);
})
stream.on('error', (err) => {
    console.log(err)
})

//we will notice that we are reading data in chunks in this case! so, in this file, it will be 64kilobytes, and 64kilobytes
//until there is only remaining! basically 64kb times x + remainder
//createReadStream extends stream.Readable, which had the event of data -- The 'data' event is emitted whenever the stream is 
//relinquishing the ownership of a chunk of data to a consumer.

//by default the size of the buffer is 64kb, but we can control it by passing in the object when we are createReadStream,
//that property has the name of highWaterMark and we pass in a value,
//there is also an encoding property that can go in the object

//we can also use the event 'on' to pass in the error as the event, through which we can console.log the error if any!
