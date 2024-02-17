var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights')

/* GET flights listing. */
router.get('/', flightsCtrl.index)

module.exports = router;