// const http = require('http')

// const server = http.createServer((req, res) => {
//     console.log('user hit the server')
//     res.end('Home Page')
// })
// server.listen(5000)

//response.end method signals the server that all of the response headers and body have been sent;
//that server should consider the message complete. The method, response.end(), MUST be called on each response
//5000 is a random port, which is a communication endpoint -- there are different kinds of port, 80 or 443
//search various kinds of port in the google, as there are specific ports for specific kinds of things


//http-headers --- providing headers (meta data about our response)
//we use the writeHead method, where we write the status code and then the headers, basically like what is our content-type, 
//res.write('--we can pass in the body here --')
//if we change the content type to "text/plain", the body will be changed to text, instead of html, but express will take care of that!
//if we do not type the status code in writeHead, then the browser will change the status code in the network to 404, so writing th status code is important
//MIME type -- is media type in our case, its this { 'content-type': 'text/html' } header
//we can get the method from the request object as "req.method"
//writeHead has following parameters --> status code, (optionally)status message and (opt)headers
// const http = require('http')
// const server = http.createServer((req, res) => {
//     const url = req.url;
//     if (url === '/') {
//         res.writeHead(200, { 'content-type': 'text/html' })
//         res.write('<h1>Home Page</h1>')
//         res.end()
//     } else if (url === '/about') {
//         res.writeHead(200, { 'content-type': 'text/html' })
//         res.write('<h1>About Page</h1>')
//         res.end()
//     } else {
//         res.writeHead(404, { 'content-type': 'text/html' })
//         res.write('<h1>Resource not found! </h1>')
//         res.end()
//     }
// })
// server.listen(5000)

//we can also pass in a file in the res.write, but we will need to use the file system and we will also need to specify the content type, so we will
//be passing the content of the html file and not the file itself!

// const http = require('http')
// const { readFileSync } = require('fs')

//get all files
const homePage = readFileSync('./index.html')
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(homePage)
    res.end()
  } else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>About Page</h1>')
    res.end()
  } else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>Resource not found! </h1>')
    res.end()
  }
})
server.listen(5000)


