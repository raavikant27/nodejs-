const http=require('http');
const arg=process.argv;


const port=arg[2];

http.createServer((req,resp)=>{

  resp.write('testin input from comd')
  resp.end()

}).listen(port)

// console.log("ravikant singh-------",arg[3])
// ;
