//npm
//node package manager

// npm calls the resuable code a package, a package essentially is a folder that contains JavaScript code
// modules, dependencies and npm are used interchangeably!
// there is no quality control in npm, so there can be very bad packages

// npm -global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// nmp i <packageName>

//global dependency - use it in any project
//npm install -g <packageName>
// sudo npm install -g <packageName> (macOS)

//package.json - manifest file (stores important information about our package/project)
//manual approach - create package.json in the root, create properties etc
// npm init (step by step, press enter to skip)
// npm init -y (using y flag everything is set up by default)

//with external packages we need to install them first before we require them unlike the built-in modules


const _ = require('lodash')

const items = [1, [2, [3, [4]]]]

const newItems = _.flattenDeep(items);
console.log(newItems);
// [1,2,3,4] -so, basically the flattenDeep method flattens the items array and removes the nested arrays, resulting into a flattened array!
