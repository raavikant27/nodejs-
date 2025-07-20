const http = require('http');

const server = http.createServer((req, res) => {
  res.write('Hello, this is your server!');
  res.end("end the response");
});

server.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
