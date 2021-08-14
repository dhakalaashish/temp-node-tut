// notice that async method does not have Sync after the method name!


//in the async readFile method in fs module, we pass in the following arguments:
// a) the file path with file name
// b) the encoding
// c) a callback function - this needs to have to arguments --- err and result

const { readFile, writeFile } = require('fs');
console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result
    console.log(first)
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result;
        console.log(second)
        // we also have three parameters for writeFile - filepath -value to be written -callback function   
        writeFile('./content/result-async.txt',
            `Here is the result: ${first},${second}`,
            (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log('done with this task')
            }
        )
    })
})
console.log('starting next task')

