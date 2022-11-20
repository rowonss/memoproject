var mysql = require('mysql');
const db = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : 'rlak1k2k3',
    database : 'memo',
    port : '3306'
});
module.exports = db;