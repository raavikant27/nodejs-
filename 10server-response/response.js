const http = require('http');

const server = http.createServer((req, resp) => {
  const age = 22; // Declare your variable first

  resp.setHeader("Content-Type", "text/html");

  resp.write(`
    <html>
      <head>
        <title>Radhey Radhey</title>
      </head>
      <body>
        <h1>Hello my Laxmi</h1>
        <h2>Age: ${age}</h2>
        <h2>Date: ${new Date()}</h2>
      </body>
    </html>
  `);

  resp.end(); // Properly ends the response
});

server.listen(4800, () => {
  console.log("Server running at http://localhost:4800/");
});
