const express = require('express')
const path = require('path')
const app = express()

//setup static and middleware
app.use(express.static('./public'))


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})
app.get('*', (req, res) => {
    res.status(404).send('Page not found')
})

app.listen(5000, () => {
    console.log('server is listening on port 5000...')
})

//static asset (css,js,picture files) means that it is a file that the server doesnt have to change
//for backend js is static as it is still in the same page in the browser, dynamic for backend would have to do with
//logging in and receiving dynamic responses unique for each user logging in

