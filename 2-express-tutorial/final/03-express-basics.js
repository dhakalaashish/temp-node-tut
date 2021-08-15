//express.js

//npm install express --save

//Express is a minimal and flexible Node.js web app framework designed to make developing
//web apps and apis much faster and easier. Express is not one of the built-in modules, but 
//Express is pretty much standard when building web apps using Node.js
//find the documentation in expressjs.com
// the --save flag used to be needed to save express in package.json, but these days you can skip it

// to install the same version
//npm install express@4.17.1 save

//express.js

//npm install express --save

//Express is a minimal and flexible Node.js web app framework designed to make developing
//web apps and apis much faster and easier. Express is not one of the built-in modules, but 
//Express is pretty much standard when building web apps using Node.js
//find the documentation in expressjs.com
// the --save flag used to be needed to save express in package.json, but these days you can skip it

// to install the same version
//npm install express@4.17.1 save

//making a server with express

const express = require('express')
//above we got a function back from express and below we are just invoking it
const app = express()
//sometimes people also invoke it right away and do:
// const app = require('express')();

//app is an object with a lot of useful methods
//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen
app.get('/', (req, res) => {
  console.log('User hit the resource')
  res.status(200).send('Home Page')
})
app.get('/about', (req, res) => {
  console.log('User hit the about page')
  res.status(200).send('About Page')
})
//for setting up the 404 we will do app.all, which will do all!!
//this will also take two parameters -- a path and a call back function '*' means all
app.all('*', (req, res) => {
  res.status(404)
  res.send('<h1>Resourse not found</h1>')
})
//for app.get, we pass in two parameters, one is the path(which is home above) and the callback function
//callback function will be called everytime the user performs a get request

app.listen(5000, () => {
  console.log('server is listening on port 5000')
})



