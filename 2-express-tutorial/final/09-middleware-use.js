//if we have 50 or more routes, it would be insane to even add the middleware function name to all of the app.get s
//there is a function that let's us add the middleware to all of our routes
//for that we can create the app.js file with the name of "logger.js", and module.exports in it, then we can do
//const logger = require('./logger'), then we can do, "app.use(pass in the middleware here - in this case-logger)"

const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')

// app.use(logger)
app.use([logger, authorize])
//The ORDER of app.use MATTERS, and it should be before all app.get s.
//we can also apply logger to specific routes by adding in a path parameter before the middleware name!
// app.use('/api', logger)
//so in this case, both the /api/products and /api/items, will have the middleware applied to it.

app.get('/', (req, res) => {
  res.send('Home')
})

app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/api/products', (req, res) => {
  res.send('About')
})
app.get('/api/items', [logger, authorize], (req, res) => {
  res.send('About')
})


app.listen(5000, () => {
  console.log('Server listening at port 5000')
})

//we can also use more middleware functions at the same time by making more files and modules.export and doing require
//then we do "app.use([logger, authorize])"

//in the middleware function or file, we can include an if, else conditional where, if this req.query is present,
//do this, if not send a 404, that means res.get on our main file, will not run, as the middlware stops at that and that 
//is only if we dont add at next() at the end of the else conditional in the middleware!