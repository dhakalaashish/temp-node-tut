// how the web works, more specifically how we exchange data on the web

//when we type a url, we are performing a request to server, which is responsible to serve those resources, so the server sends
//you back the response. It is done by using http protocal, so the request and responses are called http messages.
//servers are basically computers to always make those resources available!
//cloud is bascially buch of these servers and computers connected together

//the general structure for both request and response messages are similar, they both have a startline, have optional headers,
//a blank line that indicates that all the meta info has been sent and headers are that meta-info as well as optional body

//request message has a method and a url as well as the http version, we are interested in the url and the method
// methods --- 
//GET - Read Data
//POST - Insert Data
//PUT - Update Data
//DELETE - Delete Data
//GET is the default request that the browser performs, headers are just meta-information about our request, header is a 
//key-value pair, and there is also optional body, when you want to add a resource to the server, when you are requesting from
//the server, this is called payload

//response message is what we are creating, most of is going to be done for us, but we will have to do some of it
//1st line will be HTTP version which will most likely be 1.1, then we have a status code, and status text, status code shows
//what is the result of the request! We also have header that provides info about our response, it is a set up of key value pairs
//The ultimately we send the body!