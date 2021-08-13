//npm
//node package manager

// npm calls the resuable code a package, a package essentially is a folder that contains JavaScript code
// modules, dependencies and npm are used interchangeably!
// there is no quality control in npm, so there can be very bad packages, so we should check for weekly downloads to see its authenticity

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
console.log('hello world changes');

// [1,2,3,4] -so, basically the flattenDeep method flattens the items array and removes the nested arrays, resulting into a flattened array!

// we make a .gitignore file in the root folder and in it we write "/node_modules" to have the git ignore it as we "git add ."" it or "git commit -m "message"" it.
//"git init" in the terminal creates a git of this 
// then we do "git add ." 
// then we do "git commit -m "message" "
// then we copy and paste from github what needs to be copied and pasted as we make a new repositiory there!
//then we refresh the github page


// to clone, we use "git clone url"
// when cloned, the dependencies modules are not installed so we have to write "npm install" which will automatically find the dependencies to be installed from the package.json and will install it
//this creates the node_module folder with all dependencies in it, ready to be used!

//some modules have to be installed as a devDependency as "npm i nodemon -D"

// The difference between these two, is that devDependencies are modules which are only required during development, while dependencies are modules which are also required at runtime. 
// To save a dependency as a devDependency on installation we need to do an npm install --save-dev or "npm i nodemon -D" instead of just an npm install --save.





//we can set up a command in package.json inside script -- 
// "start":"node app.js"
// then instead of running "node app.js" in the terminal, we can run "node start", which is the short form of "npm run start";
//"dev":"nodemom app.js"
// here we cannot just run "node dev" but we have to run "npm run dev"
//nodemom is then set up
// when I change any code in app.js, nodemon restarts automatically and shows the output in the terminal


//to uninstall a package -- "npm uninstall packageName"
// we can also delete a package by deleting node_modules folder, and removing the package-lock.json
//then we can also reinstall it by typing "npm install", that will install every dependencies that is in the package.json

//nodemon has not been installed globally yet! and the way to show that is to type "nodemon app.js", the terminal will show command not found!
// to install nodemon globally run, "npm install -g nodemon"
// then we can execute "nodemon app.js", and it does the same thing as running "npm run dev", when "dev":"nodemon app.js" in script in package.json

//npx 

//npx stands for execute and the official name is package runner!
// it is a feature introduced in npm 5.2
// with npx we can run the cli tool without installing it globally!
//syntax is: npx tool-name folder-name

//package-lock.json
//our dependencies have version, and some dependencies have dependencies of their own and those dependencies have versions too
//and your user needs to have same versions of all the dependencies and stuff
// so project might get bugs so the dependencies and their versions have to be the same!
//^4.17.20, 4 is major change, 17 is small change, and 20 is bug fixes!
// for more info about package.json, refer to -- the basics of Package.json in Node.js and npm by NodeSource --- its a blog 





