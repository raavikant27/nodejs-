const querystring = require('querystring'); // ✅ Correct module name (all lowercase)

function userDataSubmit(req, resp) {
  let dataBody = [];

  req.on('data', (chunk) => {
    dataBody.push(chunk);
  });

  req.on('end', () => {
    let rawData = Buffer.concat(dataBody).toString();
    let readableData = querystring.parse(rawData);

    let dataString = "My name is " + readableData.name + " and my name is mansi-ravikant singh";
    console.log(dataString);

    resp.write(`
      <h1>You have submitted the form successfully!</h1>
      <p>${dataString}</p>
    `);
    resp.end(); // Always end the response
  });
}

module.exports = userDataSubmit;
