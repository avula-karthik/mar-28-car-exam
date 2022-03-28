var express = require('express');
var router = express.Router();
var connector = require('../poolconnect');
router.get('/createtable', (req, res) => {
    connector.query(
        'CREATE TABLE randomDemo (name varchar(50), description varchar(250), price int)',
        function (err, results, fields) {
            res.json({ err, results, fields });
        }
    );
});

router.post('/', function (req, res) {
    const { name, description, price } = req.body;
    const sql = `INSERT INTO products VALUES (?,?,?)`;
    connector.query(sql, [name, description, price], (err, results, fields) => {
        if (err) {
            res.json(err);
        } else {
            res.json(results);
        }
    });
});

router.get('/', function (req, res) {
    const sql = `select * from products`;
    connector.query(sql, function (err, results, fields) {
        if (err) {
            res.json(err);
        } else {
            res.json(results);
        }
    });
});

module.exports = router;
