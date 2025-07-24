# 🌐 Client Request Handling using Node.js (Without Framework)

This project demonstrates how to handle and understand **client requests** using Node.js's built-in `http` module.

---

## 🙋‍♂️ Author

**Ravikant Singh**

---

## 📌 What is a Client Request?

A **client request** is an HTTP message sent from a client (browser, Postman, frontend app) to the server to:

- **Fetch data** (GET)
- **Send data** (POST)
- **Update data** (PUT)
- **Delete data** (DELETE)

Each request has:
- **Method** (GET, POST, etc.)
- **URL** (e.g., `/`, `/login`)
- **Headers** (e.g., Content-Type)
- **Optional Body** (for data in POST/PUT)

---

## 💻 Code to Access and Handle Client Requests

We use Node.js's `http` module to access and respond to requests.

### 📄 server.js

```js
const http = require('http');

http.createServer((req, resp) => {
  console.log("Request Method:", req.method);      // GET, POST, etc.
  console.log("Request URL:", req.url);            // "/", "/login", etc.
  console.log("Host Header:", req.headers.host);   // e.g., localhost:5600

  if (req.url === "/") {
    resp.write("<h1>🏠 Home Page</h1>");
  } else if (req.url === "/login") {
    resp.write("<h1>🔐 Login Page</h1>");
  } else {
    resp.write("<h1>⚠️ 404 - Page Not Found</h1>");
  }

  resp.end();

}).listen(5600, () => {
  console.log("✅ Server running at http://localhost:5600");
});
📁 Folder Structure
pgsql
Copy code
client-request/
├── server.js
└── README.md
🌐 Pages Created with Client Request
Request URL	Output
/	🏠 Home Page
/login	🔐 Login Page
Any other URL	⚠️ 404 Page

Test these by visiting URLs in your browser after running the server.

🚀 How to Run This Project
Save the above code in a file called server.js

Open terminal and run:

bash
Copy code
node server.js
Visit in browser:

arduino
Copy code
http://localhost:5600/
🧠 Interview Questions with Answers
1. What is a client request in backend development?
📌 A message sent by the frontend to the backend to access or manipulate data.

2. How do you handle GET and POST requests in Node.js?
📌 Use req.method to check the request type and respond accordingly.

3. What are the core components of an HTTP request?
📌 Method, URL, Headers, and Body (in POST/PUT requests).

4. How do you access the request URL and method in Node.js?
📌 Using:

js
Copy code
req.url      // e.g., "/login"
req.method   // e.g., "GET"
5. How would you create different pages using URL routing?
📌 Use if or switch statements to match req.url and send the desired HTML.

6. What is the use of req.headers in Node.js?
📌 It contains metadata from the client (like host, user-agent, etc.).

7. What does resp.end() do in Node.js?
📌 It ends the HTTP response. Without it, the request hangs.

8. What is the default port used in HTTP servers?
📌 Port 80 (but for development, commonly use 3000, 5000, 5600, etc.)

9. Difference between using http module and Express.js?
Feature	http Module	Express.js
In-built	✅ Yes	❌ Needs installation
Manual Routing	✅ Required	✅ Automatic
Easy to Start	✅ Very basic	✅ Beginner-friendly
Real-world use	❌ Not preferred	✅ Highly used

10. How can you build a simple web server without any external package?
📌 Using http.createServer() in Node.js. Example:

js
Copy code
const http = require('http');
http.createServer((req, res) => {
  res.write("Hello");
  res.end();
}).listen(3000);
📌 Summary
✅ You learned:

What is a client request

How to build pages based on URL

How to read request data using req.method, req.url, req.headers

Real interview questions with answers

📄 Created with 💻 by Ravikant Singh