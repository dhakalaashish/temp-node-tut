//Event-Driven Programming
//when working wit browser with javascript, a big part of our work is to handle events, foe example user pushes a button or
// hover over a ling, our program will handle it with code. 
//Event driven Programming is a style of programming in which the flow of the program is atleast in part determined by the 
//events that occur as the program executes! This is used heavily in Node.js too!


//global in-built module called events! awesome!

const EventEmitter = require('events')
//with this we are getting back a class, common practice is calling this variable(a class here) EventEmitter
//at this point, we have two options:
//a) if we want to create somthing custom, we have to extend the class!
//b) but if we simply want to emit an event or just listen for it, then we will create an instance. We will do this one here!
const customEmitter = new EventEmitter()
//essentially customEmitter is an object as it is an instance of the class EventEmitter, and this object has many methods,
//two of important ones are:
//on -- listens for an event
//emit -- emits that event

//on the on method, basic setup - we will pass in a string which it the name of the event , and the callback function, which
//will do something when the event occurs!

// customEmitter.on('response', () => {
//     console.log(`data received`)
// })
// customEmitter.on('response', () => {
//     console.log(`some other logic here`)
// })
// customEmitter.emit('response')

//now that we have subscribed to this event, we would want to emit it! 
//the string that denotes the name of the event needs to match!

//we can have as many methods as we want!
//the order of emit matters --> if we place the emit before the second customEmitter.on, then the 2nd one will not load!
//we can als pass other arguments when we are passing in the emit!, and in our callback function in the customEmitter.on, we
//can access those as parameters!
customEmitter.on('response', (name, age) => {
    console.log(`data received from ${name}, age ${age}`)
})
//we dont necessarily need to have parameters being used in the callback function
customEmitter.on('response', (name, age) => {
    console.log(`data received`)
})
customEmitter.emit('response', 'john', 34)

// a lot of built-in modules rely on events

//create server with on method!

const http = require('http')

// const server = http.createServer((req,res)=>{
//     res.end('Welcome')
// })

//Using Emvent Emitter API
const server = http.createServer()

//emits request event
//subcribe to it / listen for it / respond to it

server.on('request', (req, res) => {
    res.end('Welcome')
})
server.listen(5000)