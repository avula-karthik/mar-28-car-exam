var express = require('express');
var router = express.Router();
const bookController = require('../controller/book');
router.get('/', bookController.getBooks);
router.post('/', bookController.createBook);
router.get('/bookandauthor', bookController.getBooksWithAuthor);
router.get("/bookwithcondition/:name", bookController.getBookWithCondition)
module.exports = router