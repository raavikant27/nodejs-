const http=require('http');
http.createServer((req,resp)=>{
//    console.log(req.url);
   console.log(req.method);
//    console.log(req.headers.host);
//    console.log(req.headers);
if(req.url=="/"){
  resp.write("<h1>Home Pages</h1>")

}else if(req.url=="/login"){

   resp.write("<h1>Login Page</h1>")


} else {
    resp.write("other Page")
}

    resp.end();


}).listen(5600)