const express = require('express');
const app = express();
const port = 5000;

const mysql = require('mysql2');

const pool = mysql.createPool({
host: 'localhost',
user: 'root',
database: 'second_brain',
waitForConnections: true,
connectionLimit: 10,
queueLimit: 0
});





app.listen(port, console.log(`Listening on port ${port}...`))