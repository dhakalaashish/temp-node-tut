//middleware -- express middleware are functions that execute during the request to the server! Each middleware 
//has excess to request and response objects, and when it comes to functionality, literally, sky is the limit!
//middleware is at the heart and soul of express! We cannot omit or ignore it!



const express = require('express')
const app = express()

//req => middleware => res
//middleware sits between request and response, hence the name "middle"ware

const logger = (req, res, next) => {
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)
  next()
}

app.get('/', (req, res) => {
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)
  res.send('Home')
})
//If I want to have the same functionality as above, in About page, I can just copy and paste, but if I have 15
//routes or more, it would be too much to copy and paste, so we need to set up a function, that has all these logic
//and we can attach it willynilly to all these routes! He says willinilli becasue for some routes he may want to 
//attach the function while in some he may not want to! We can make a function named logger and attach it between url
//and callback function in app.get
//in logger function in app.get on About page, express will supply the req, res and then next too to logger
//when we work with a middleware, we must must must pass it on to the next middleware, if not the page will not stop
//loading, as we are not moving forward to the callback function. You should use next, unless we are terminating the
//request by sending the response in the middlware!
app.get('/about', logger, (req, res) => {
  res.send('About')
})
app.listen(5000, () => {
  console.log('server is listening at port 5000')
})