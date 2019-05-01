const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();



// Routes
const routes = require('./routes/index');
const drivers  = require('./routes/drivers');

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/', routes);
app.use('/drivers', drivers);


const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));