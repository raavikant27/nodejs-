const http = require('http');
const fs = require('fs');
const path = require('path');

// Create HTTP Server
http.createServer((req, res) => {
  // Show the form (GET request to '/')
  if (req.url === '/' && req.method === 'GET') {
    const filePath = path.join(__dirname, 'html', 'form.html');
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  }

  // Handle form submission (POST request to '/submit')
  else if (req.url === '/submit' && req.method === 'POST') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString(); // convert Buffer to string
    });

    req.on('end', () => {
      const params = new URLSearchParams(body);
      const name = params.get('name') || 'N/A';
      const email = params.get('email') || 'N/A';

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write('<h1>Form Submitted Successfully!</h1>');
      res.write(`<p><strong>Name:</strong> ${name}</p>`);
      res.write(`<p><strong>Email:</strong> ${email}</p>`);
      res.end();
    });
  }

  // Handle 404
  else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 - Page Not Found</h1>');
  }
}).listen(3200, () => {
  console.log('✅ Server is running at http://localhost:3200');
});
