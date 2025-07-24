# 🌐 Node.js Server Response Notes

## 📌 What is Server Response?

- `Response` (`resp`) is what the server sends back to the client/browser.
- It can include HTML, JSON, plain text, files, etc.
- Think of it as: "**You asked, here is your result!**"

---

## 📌 What is `req` (Request)?

- Carries data from browser to server.
- Example: form inputs, URL path, query params, etc.

## 📌 What is `resp` (Response)?

- Sends data from server to browser.
- Must end with `resp.end()`.

---

## 📌 Why `resp.setHeader()`?

- To tell the browser what content you're sending (HTML, JSON, etc.).
- Example:
  ```js
  resp.setHeader("Content-Type", "text/html");
## Ending a response
 Use resp.end() after all resp.write().

Without it, the browser keeps loading forever.

## 📌 Stopping Node.js Process
Use process.exit() to end the Node.js app (used rarely).

js
Copy code
process.exit();
## 📌 Example: Server Response with Variables & Functions
js
Copy code
const http = require('http');

function getGreeting(name) {
  return `Hello, ${name}! Radhey Radhey 👣`;
}

const server = http.createServer((req, resp) => {
  const age = 22;
  const name = "Laxmi";

  resp.setHeader("Content-Type", "text/html");

  resp.write(`
    <html>
      <head>
        <title>Server Response Example</title>
      </head>
      <body>
        <h1>${getGreeting(name)}</h1>
        <h2>Age: ${age}</h2>
        <h2>Date: ${new Date()}</h2>
      </body>
    </html>
  `);

  resp.end();
});

server.listen(4800, () => {
  console.log("Server running at http://localhost:4800/");
});
## 📝 Summary
Concept	Use
req	Incoming data from client
resp	Outgoing data to client
resp.write()	Write HTML/data
resp.end()	End the response
setHeader()	Tell browser content type
process.exit()	Stop Node.js app

 