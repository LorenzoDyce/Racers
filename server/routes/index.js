var models  = require('../models');
var express = require('express');
var router  = express.Router();







// Get all drivers and their car
router.get('/', (req, res) => {
    models.Driver.findAll({include: [ models.Car ]}).then(driver => {
    res.json(driver);
    })
 })



 module.exports = router;