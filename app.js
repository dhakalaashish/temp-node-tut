//Event Loop
//The event loop is what allows Node.js to perform non-blocking I/O operations - despite the fact that JavaScript is
//single-threaded - by offloading operations to the system kernel whenever possible.
//Since most modern kernels are multi-threaded, they can handle multiple operations executing in the background. 
//When one of these operations completes, the kernel Node.js so that the appropriate callback may be added to the poll queue to
//eventually be executed.

//
