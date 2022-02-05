const express = require('express');
const path = require('path');
const routes = require('./routes');
const PORT = process.env.port || 3001;
const app = express();
const fs = require('fs');


var savedNotes = require('./db/db.json')


app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for feedback page
app.get('/noted', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/notes.html'))
);

// Wildcard route to direct users to a 404 page
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/pages/404.html'))
);

// Listen from port 3001
app.listen(PORT, () =>
  console.log(`Example App listening at http://localhost:${PORT} 🚀`)
);
