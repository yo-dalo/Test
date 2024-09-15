const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000 || 18012 || 19099;




mysql.createConnection({
 
  host: "sql304.infinityfree.com",
      user: 'if0_37315330',
    password: '0sLPpVrkpv',

    database: "if0_37315330_fast_food",
  
  
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});







app.get('/', (req, res) => {
  res.send('Hello, Express.js is running on Termux!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
