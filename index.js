const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

/// view engine setup
app.set('views', path.join(__dirname, 'pages'));
/// css setup
app.use(express.static(path.join(__dirname, 'public')));

/// load the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'about.html'));
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`App listening at http://localhost:${port}`);
});