var mysql = require('mysql');
const db = mysql.createPool({
    host : 'localhost:3306',
    user : 'root',
    password : 'rlak1k2k3',
    database : 'memo'
});
module.exports = db;