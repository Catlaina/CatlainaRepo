var express = require('express')

var router = express.Router()
var workshops = require('./api/workshops.route')


router.use('/workshops', workshops);


module.exports = router;