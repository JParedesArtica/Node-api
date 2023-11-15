const express = require('express');
const app = express();

app.use(express.json());

console.log("Server running on port", port)
const server = app.listen(8080, function () {
  let port = server.address().port
})