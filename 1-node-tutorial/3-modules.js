//Node uses commonJS libary - and every file in Node is a module and we get them by default!
// modules - encapsualted code (only share minumum)

// requiring the modules -- basically connecting files --- syntax -- require('path to the module file')
const names = require('./4-names')
const sayHi = require('./5-say-hi-function')
const data = require('./6-alternative-flavour')


//this will be executed here! as we invoke the function in ./7-mind-grenade
require('./7-mind-grenade')

console.log(data)
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

