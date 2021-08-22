//get - read data
//post - insert data
//put - update data
//delete - delete data

const express = require('express')
const app = express()
let { people } = require('./data')

//static asset
app.use(express.static('./methods-public'))

//parse from data
app.use(express.urlencoded({ extended: false }))

//parse json
app.use(express.json())

//when you set up a request with your browser, you automatically use the http verb "get", and that's why you can read 
//the data
app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people })
})

//we can add/insert data on the server b using post request! 
app.post('/login', (req, res) => {
  // console.log(req.body)
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`)
  } else {
    res.status(401).send('Please provide credentials')
  }
})

app.post('/api/people', (req, res) => {
  const { name } = req.body
  if (!name) {
    return res.status(400).json({ success: false, msg: 'Please provide name value' })
  }
  res.status(201).json({ success: true, person: name })
})

app.post('/api/postman/people', (req, res) => {
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' })
  }
  res.status(201).send({ success: true, data: [...people, name] })
})

//put method -- for editing/updating the data, the convention is following, if we have a list that we want to edit or
//delete we go with route parameter, but there is also multiple other ways of doing it, but this is the convention.
app.put('/api/people/:id', (req, res) => {
  const { id } = req.params
  const { name } = req.body

  const person = people.find((person) => person.id === Number(id))
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: 'please provide name value' })
  }

  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name
    }
    return person
  })
  res.status(200).json({ success: true, data: newPeople })
})

app.delete('/api/people/:id', (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id))
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${req.params.id}` })
  }
  const newPeople = people.filter((person) => person.id !== Number(req.params.id))
  return res.status(200).json({ success: true, data: newPeople })
})

app.listen(5000, () => {
  console.log('Server is listening at port 5000')
})
