// console.log('first task')
// console.time()
// for (let i = 0; i < 100000; i++) {
//     const h3 = document.querySelector('h3')
//     h3.textContent = `Hey, everyone is waiting on me`
// }
// console.timeEnd()
// console.log('next task')

//output will be ---> first task, waitttttttt, then next task


//Event Loop
//The event loop is what allows Node.js to perform non-blocking I/O operations - despite the fact that JavaScript is
//single-threaded - by offloading operations to the system kernel whenever possible.
//Since most modern kernels are multi-threaded, they can handle multiple operations executing in the background. 
//When one of these operations completes, the kernel notifies Node.js so that the appropriate callback may be added to the poll 
//queue to eventually be executed. 



const { readFile } = require('fs')

console.log('started a first task')
//CHECK FILE PATH!!!
readFile('../content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(result);
    console.log('completed first task');
})
console.log('starting next task');
