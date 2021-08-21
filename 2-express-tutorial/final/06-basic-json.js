//When it comes to express, in most cases you will use one of the two following options: you will use it to
//a) setup API
//b) or, setup templates with server side rendering

//API -JSON
// In Express, by the term api we mean setting up an http interface to interact with our data
// data is sent using JSON
//which stands for JavaScript Object Notation, and inorder to send back our respose we are going to use "res.JSON()" 
// method, which will do all the heavy lifting, like, for example, setting up the proper content type and stringfy our data
//The main idea with APIs is that out server provides data and any front-end app that wants to access it and use it can
//simply perform a http request and using our data set up the api and functionality.


//SSR -Template 
//The other flavour we have is server-side rendering where we will set up templates and send back entire html/css/jss
//ourselves.We will do that using "res.render()" method.

//sending JSON data!!

// const express = require('express')
// const app = express()
// const { products } = require('./data.js')

// app.get('/', (req, res) => {
//   res.json(products);
// })

// app.listen(5000, () => {
//   console.log('server is listening on port 5000')
// })
//res.json([body]) ---> sends a JSPM response. This methods sends a response(with the correct content-type) that is the
//parameter converted to a JSON string using JSON.stringfy(). The parameter can be any JSON type, including object, array
//string, Boolean, number, or null, and you can also use it to convert other values to JSON.


const express = require('express')
const app = express()
const { products } = require('./data.js')

app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1><a href ="/api/products">products</a>');
})
// app.get('/api/products', (req, res) => {
//     res.json(products)
// })

//sending only minimal response.json!
app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image }
  })
  res.json(newProducts)
})
//above we only responded with the JSON of name,id and image and did not send the description,
//so if user wants to access any singular product, then he/she can view all name,id,image,desc
//here's how:
// app.get('/api/products/1', (req, res) => {
//     const singleProduct = products.find((product) => {
//         if (product.id === 1)
//             return product;
//     })
//     res.json(singleProduct)
// })

//this feels liks using a bazooka on a cockroach! lol! because, if we have hundred products, we cannot do 100
//different app.get for each product. In express, we have sth called route parameters which will be more effective.
//here's how:
//the :productID below is route parameter.

app.get('/api/products/:productID', (req, res) => {
  // console.log(req.params)
  //this would output {productID: '1'}
  //notice that productID is a string, so we need to change it to a number
  const { productID } = req.params;
  const singleProduct = products.find((product) => {
    if (product.id === Number(productID))
      return product;
  })
  if (!singleProduct) {
    return res.status(404).send('Product does not exist')
  }
  res.json(singleProduct)
})

//sometimes this way can get way complex, here's how:
// app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
//     console.log(req.params)
//     res.send('hello world')
// })

app.listen(5000, () => {
  console.log('server is listening on port 5000')
})