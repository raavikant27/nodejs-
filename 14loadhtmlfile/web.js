const http = require('http');
const fs = require('fs');

http.createServer((req, resp) => {
  fs.readFile('html/web.html', 'utf-8', (err, data) => {
    if (err) {
      resp.writeHead(500, { "Content-Type": "text/plain" });
      resp.write('Internal Server Error'); // ✅ correct method
      resp.end();
      return;
    } else {
      resp.writeHead(200, { "Content-Type": "text/html" });
      resp.write(data);
      resp.end();
    }
  });
}).listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
