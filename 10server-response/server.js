const http=require("http");
http.createServer((req,resp)=>{
  resp.write("<h2> hi this is ravikant singh</h2>")

  resp.end("hello code step by step");

}).listen(4800);