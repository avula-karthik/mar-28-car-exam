var express = require('express');
var router = express.Router();
let hobbyController = require('../controller/hobbies');

router.get('/', hobbyController.getHobbies);
router.post('/', hobbyController.addHobby);
router.delete('/:_id', hobbyController.deleteHobby);

module.exports = router;
