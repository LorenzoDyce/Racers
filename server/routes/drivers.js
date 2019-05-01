const path = require('path');
const express = require('express');
const router = express.Router()
const Sequelize = require('sequelize');
const dotenv = require('dotenv');
var models  = require('../models');
dotenv.config();

// Get all drivers
router.get('/', (req, res) => {
    models.Driver.findAll().then(driver => {
    res.json(driver);
    })
 })


// Get all drivers and their car
router.get('/driverscars', (req, res) => {
    models.Driver.findAll({include: [ models.Car ]}).then(driver => {
    res.json(driver);
    })
 })
    
 router.post('/createdriver', (req, res)=> {

models.Driver.create({
   name: 'Lucas Nao',
   nationality: 'Portugese',
   bio: 'Im from portugal'
}).then(drivers => {
   drivers.createCar({
      make: 'Toyota',
      model: 'camry',
      transmission: 'auto',
      year: 2019,
      color: 'light blue'
   });
});
 })
 


module.exports = router;