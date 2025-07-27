function userForm(req, resp) {
  resp.write(`
    <form action="/submit" method="post">
      <input type="text" name="name" placeholder="Enter name" required /><br><br>
      <input type="email" name="email" placeholder="Enter email" required /><br><br>
      <button type="submit">Submit</button>
    </form>
  `);
}

module.exports = userForm;
