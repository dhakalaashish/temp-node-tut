const express = require('express')
const app = express()
const people = require('./routes/people.js')
const authorization = require('./routes/auth.js')


//static asset
app.use(express.static('./methods-public'))
//parse from data
app.use(express.urlencoded({ extended: false }))
//parse json
app.use(express.json())
app.use('/api/people', people)

app.use('/login', authorization)


app.listen(5000, () => {
    console.log('Server is listening at port 5000')
})
