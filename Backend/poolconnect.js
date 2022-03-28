const mysql = require('mysql2');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'user',
    password: 'karthik',
    database: 'westsidenode',
    waitForConnection: true,
    connectionLimit: 10,
    queueLimit: 0,
});
module.exports = pool;
