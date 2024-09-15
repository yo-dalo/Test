const express = require('express');
const app = express();
const port = 3000 || 18012 || 19099;

app.get('/', (req, res) => {
  res.send('Hello, Express.js is running on Termux!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
