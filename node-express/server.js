const express = require('express');
const morgan = require('morgan')

const hostname = 'localhost';
const port = 3000;

const app = express(); //return express server application under a variable called app

/*const callback = () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}*/
//using morgan development
app.use(morgan('dev'))

app.use(express.static(__dirname + '/public')); //__dirname is a special variable in node and referes to the absolute path 

//middleware function call back
app.use((req, res) => {
 // console.log(req.headers) //now morgan will take care of it that is why it is commented out here in this commit 
  res.status = 200; //successful code
  res.setHeader('Content-Type', 'text/html'); //setting the header of the response 
  res.end('<html><body><h1>This is an Express Server</h1></body></html>'); //this will be displayed when we invoke the use
});

//create a seveer and start listening to it, passing 3 parameters as always, port, hostname and a call back function
//the call back function can also be written similar to the one in line 8 and invoked here by adding it as a parameter like the following
//      app.listen(port, hostname, callback())
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})