const express = require('express');
const path = require('path');
const app = express();

const port = 4040;

app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'index.html'))
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
