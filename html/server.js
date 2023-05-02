const express = require('express');
const mysql = require('mysql');
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test',
});

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database: ' + err.stack);
        return;
    }
    console.log('Connected to database as id ' + connection.threadId);
});

// Define a route to get users from the database
app.get('/users', (req, res) => {
    connection.query(`SELECT * FROM regisration where id='1'`, (error, results) => {
        if (error) {
            console.error('Error executing query: ' + error.stack);
            return;
        }
        res.render('index', { users: results });
    });
});

// Start the server
app.listen(3001, () => {
    console.log('Server is listening on port 3001');
});
