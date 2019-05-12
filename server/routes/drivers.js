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
    res.send(driver);
    })
 })


// Get all drivers and their car
router.get('/driverscars', (req, res) => {
    models.Driver.findAll({include: [ models.Car ]}).then(driver => {
    res.send(driver);
    })
 })
    
 router.post('/createdriver', (req, res)=> {

   models.Driver.create({
      name: req.body.name,
      nationality: req.body.nationality,
      bio: req.body.bio
    })
      .then((driver)=> res.status(201).send({
         name: driver.name,
         nationality: driver.nationality,
         bio: driver.bio
      }))
      .then(() => res.redirect('/'));
});
 


module.exports = router;