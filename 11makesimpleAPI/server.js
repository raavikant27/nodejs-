const http=require('http');

//array of abject
const userData=[

{

 name:'ravikant singh',
 age:24,
 email:'sravkant302@gamil.com'


}
,
{

 name:'mansi',
 age:24,
 email:'mansi302@gamil.com'


},
{

 name:'radhey-radhey',
 age:24,
 email:'radhay302@gamil.com'


}

]
http.createServer((req,resp)=>{
    
  resp.setHeader("Content-type",'application/json')

  resp.write(JSON.stringify(userData));
  resp.end();


}).listen(3000)