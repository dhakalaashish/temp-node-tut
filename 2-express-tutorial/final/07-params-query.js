const express = require('express')
const app = express()

const { products } = require('./data.js')



//query-sting parameters or URl parameters///
//essentially that is a way for us to send small amount of information to the server using the URl
//this information is usually used as parameters for example query database, or filter results 
//and people who are setting up the server decide what parameters are going to accepted and what functionality
//will depend on those values

//Colt Steele says, "Query strings are just information that we can provide to any URL or as a part of a URL that
//usually is going to impact what we get back, and we can put more than one parameter in the querystring- for that 
//we use "&", so an example on the frontebnd would be http://api.tvmaze.com/lookup/shows?imdb=tt4718304&color=purple"

app.get('/api/v1/query', (req, res) => {
  // console.log(req.query)
  //if I type "http://localhost:5000/api/v1/query?search=a&limit=2" in the browser, req.query when console.logged 
  //will show {search:'a', limit:'2'}
  //so req.query will let us access the parameters!
  const { search, limit } = req.query;
  let sortedProduct = [...products];
  console.log(products)
  console.log(sortedProduct)
  if (search) {
    sortedProduct = sortedProduct.filter((product) => {
      return product.name.startsWith(search)
    })
  } if (limit) {
    sortedProduct = sortedProduct.slice(0, Number(limit))
  }
  if (sortedProduct < 1) {
    // res.status(200).send('Cannot find data according to your search')
    return res.status(200).json({ success: true, data: 'not found' })
  }
  res.status(200).json(sortedProduct)
})


app.listen(5000, () => {
  console.log('server is listening at port 5000........')
})


//When we get error in the server when we send more than one response in the same request! We can set up a conditional
//but we cannot send two responses in the same request! So, when we are setting up a response in the if-conditional
//we should add a return in it! 