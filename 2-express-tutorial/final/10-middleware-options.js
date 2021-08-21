

const express = require('express')
const app = express()

const morgan = require('morgan')

//in Express we have a built-in middleware named static.

// app.use(express.static('./public'))

//third party middleware ---we have to install them!
//one of them is morgan npm, we need to install morgan by doing "npm i morgan"

app.use(morgan('tiny'))

app.get('/', (req, res) => {
  res.send('Home')
})
app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/api/products', (req, res) => {
  res.send('Products')
})
app.get('/api/items', (req, res) => {
  console.log(req.user)
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
