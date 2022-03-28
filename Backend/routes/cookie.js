var express = require('express');
var router = express.Router();
router.get('/setcookie/:name/:value', (req, res) => {
    res.cookie(req.params.name, req.params.value);
    res.send(
        `Cookie created. Name : ${req.params.name} and value : ${req.params.value}`
    );
});
router.get('/seecookies', function (req, res) {
    res.send(req.cookies);
});
router.get('/setcookie/:name/:value/:time', (req, res) => {
    res.cookie(req.params.name, req.params.value, {
    //making time to be measured as min. 1 sec = 1000ms,1min = 60*1000ms
        maxAge: req.params.time * 60 * 1000,
    });
    res.send(
        `Cookie with name ${req.params.name} and value ${req.params.value} set and will expire in ${req.params.time} mins`
    );
});
router.get('/viewcookies', function (req, res) {
    res.send(req.cookies);
});
router.get('/delete/:name', function (req, res) {
    res.clearCookie(req.params.name);
    res.send(`cookie with name ${req.params.name} is deleted`);
});
module.exports = router;
