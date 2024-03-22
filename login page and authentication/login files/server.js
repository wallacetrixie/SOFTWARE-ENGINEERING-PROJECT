const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const port = 9090;
const mysql = require('mysql');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public', 'scripts')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'your-secret-key',
  resave: true,
  saveUninitialized: true
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/login_page.html'));
});

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'wallace',
  database: 'authentication'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err.stack);
    return;
  }
  console.log('Connected to database as id', connection.threadId);
});

// Registration route
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send('Invalid input. Both username and password are required.');
  }

  const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
  connection.query(query, [username, password], (err, results) => {
    if (err) {
      console.error('Error inserting user:', err.stack);
      return res.status(500).send('Error registering user.');
    }

    console.log('User registered successfully');
    return res.status(200).send('User registered successfully.');
  });
});

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send('Invalid input. Both username and password are required.');
  }

  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
  connection.query(query, [username, password], (err, results) => {
    if (err) {
      console.error('Error querying user:', err.stack);
      return res.status(500).send('Error querying user.');
    }

    if (results.length > 0) {
      req.session.user = {
        username: results[0].username,
      };

      return res.redirect('/index.html');
    } else {
      return res.status(401).send('Incorrect username or password. Please try again.');
    }
  });
});

// Homepage route
app.get('/homepage.html', (req, res) => {
  if (req.session.user) {
    res.sendFile(path.join(__dirname, '/homepage.html'));
  } else {
    res.redirect('/');
  }
});

app.listen(port, () => {
  console.log('Server running on port:' + port);
});
