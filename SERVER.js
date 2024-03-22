const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const mysql = require('mysql');
const app = express();
const port = 5011;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'your-secret-key',
  resave: true,
  saveUninitialized: true
}));

// MySQL database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'taskify'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');
});

global.db = db;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'client.html'));
});



// code to retrieve user details from the posts table
app.get('/posts', (req, res) => {
  db.query('SELECT * FROM posts', (err, results) => {
    if (err) {
      res.status(500).send('Error retrieving data from the database');
      throw err;
    }
    res.json(results);
  });
});



// code to retrieve user details from the details table
app.get('/details', (req, res) => {
  db.query('SELECT * FROM details', (err, results) => {
    if (err) {
      res.status(500).send('Error retrieving data from the database');
      throw err;
    }
    res.json(results);
  });
});




// Route to handle form  from posts page
app.post('/submit', (req, res) => {
  const { name, title, description, amount } = req.body;
  const data = { name, title, description, amount };

  db.query('INSERT INTO posts SET ?', data, (err, result) => {
    if (err) {
      res.status(500).send('Error submitting data to the database');
      throw err;
    }
    console.log('Data submitted to the database');
    res.redirect('/freelancer.html'); // Redirect to a success page
  });
});


// Route to handle form submissions for the details table
app.post('/submit-details', (req, res) => {
  const { fullname, email, telephone, years, country, interest, details } = req.body;
  const data = { fullname, email, telephone, years, country, interest, details };

  db.query('INSERT INTO details SET ?', data, (err, result) => {
    if (err) {
      res.status(500).send('Error submitting data to the database');
      throw err;
    }
    console.log('Data submitted to the database');
    res.redirect('/client.html'); // Redirect to a success page
  });
});


// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});