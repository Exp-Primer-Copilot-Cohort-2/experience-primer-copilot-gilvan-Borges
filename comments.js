// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Use static files
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});