var http = require('http')
var fs = require('fs')

// http
//     .createServer(function (req, res) {
//         const text = fs.readFileSync('./content/big.txt', 'utf8')
//         res.end(text)
//     })
//     .listen(5000, () => {
//         console.log('Server has started at 5000')
//     })

//the above code will send our file to the server in one large instance, while the bottom one will send it in chunks

http
    .createServer(function (req, res) {
        // const text = fs.readFileSync('./content/big.txt', 'utf8')
        // res.end(text)
        const fileStream = fs.createReadStream('./content/big.txt', 'utf8');
        fileStream.on('open', () => {
            fileStream.pipe(res)
        })
        fileStream.on('error', (err) => {
            res.end(err)
        })
    })
    .listen(5000, () => {
        console.log('Server has started at 5000')
    })