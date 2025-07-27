// root.js
const http = require('http');
const userForm = require('./userForm');
const userDataSubmit=require('./userDataSubmit');

const server = http.createServer((req, resp) => {

  //for the data of form we implement for proper html code we use 
  resp.writeHead(200,{"content-type":'text/html'})


  if(req.url=="/"){
   userForm(req, resp)

  }
  else if(req.url=="/submit")
 userDataSubmit(req,resp)
});

server.listen(3800, () => {
  console.log("Server running at http://localhost:3800");
});
