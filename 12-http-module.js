//HTTP Module -- works with server

const http = require('http');

//createServer creates a server, and it takes a callback function as a parameter, the callback takes two arguments - request and result. 
const server = http.createServer((req, res) => {
    // if request.url is equal to our homepage then, do this --- we can also substitute it with res.end('Welcome to our home page')
    if (req.url === '/') {
        res.write('Welcome to our home page')
        res.end()
    }
    if (req.url === '/about') {
        res.end('Here is our short history')
    }
    res.end(`
    <h1>Oops!</h1>
    <p> We cant seem to find the page you are looking for </p>
    <a href ="/">Back Home</a>
    `)
})

server.listen(5000)
//if we go to the server and type localhost:5000, it will give us a page with 'Welcome to our home page'