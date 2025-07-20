# Node.js Server Basics – Questions & Answers

## ✅ Q1: Why do we need a server?

A server is required to **listen to client requests**, **process them**, and **send appropriate responses** (like HTML, JSON, files, etc.).  
Servers are the backbone of all web applications. Without a server, clients (like browsers or mobile apps) cannot fetch data or perform actions.

---

## ✅ Q2: How do we create a server in Node.js?

We use the built-in **`http` module** to create a server in Node.js.

### 🔧 Example:
```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.write('Hello, World!');
  res.end(); // End the response
});

server.listen(5000, () => {
  console.log('Server is running at http://localhost:5000');
});

✅ Q3: Which core package is used to create a server?
We use the http module, which is a core module in Node.js — no need to install it separately.

Example:
js
Copy code
const http = require('http');
✅ Q4: What are request and response parameters?
In the http.createServer((req, res) => {}) callback:

req (request): Contains details about the incoming client request like URL, headers, HTTP method, etc.

res (response): Is used to send data back to the client, such as HTML, JSON, or files.

💡 Example of usage:
js
Copy code
const server = http.createServer((req, res) => {
  console.log(req.url); // Print the requested URL
  res.write('You requested: ' + req.url);
  res.end(); // Important to end the response
});
✅ Q5: How do we end a response?
Use res.end() to indicate that all response data has been sent.
Without it, the client will keep waiting for more data and the request may hang.

Example:
js
Copy code
res.write('This is the end of response');
res.end();
✅ Q6: Can we create two servers at the same time?
Yes, but each server must run on a different port.

Example:
js
Copy code
const http = require('http');

// First server on port 5000
http.createServer((req, res) => {
  res.end('Server 1: Port 5000');
}).listen(5000);

// Second server on port 5001
http.createServer((req, res) => {
  res.end('Server 2: Port 5001');
}).listen(5001);
🚀 Output
Start your server using:

bash
Copy code
node server.js
Then open in browser:

http://localhost:5000 → "Server 1: Port 5000"

http://localhost:5001 → "Server 2: Port 5001"

📌 Summary
Topic	Description
Module	http (Core Node.js module)
Request	Info about incoming HTTP request
Response	Used to send response to the client
res.end()	Ends the response; mandatory to avoid hanging
Multiple servers	Allowed on different ports only