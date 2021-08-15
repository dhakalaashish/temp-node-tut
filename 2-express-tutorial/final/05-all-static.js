const express = require('express')
const path = require('path')
const app = express()

//setup static and middleware
app.use(express.static('./public'))

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// })
// let's put even the index.html with other static assets, so in the public folder.
//that means we don't even have sendFile to the server, as index.html in public folder will by default be sent to the server.
app.all('*', (req, res) => {
  res.status(404).send('Page not found')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000...')
})

//We still have to do the 404, but as far as serving straight up sites with html,css and js, we can simply dump them
//in the public folder and simply setup the middleware and serve all the static assets!!