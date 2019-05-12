const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();



// Routes
const routes = require('./routes/index');
const drivers  = require('./routes/drivers');

const app = express();
app.use(cors({origin: 'http://localhost:3000',
credentials: true}))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json())
app.use((req, res, next) => {
          res.header("Access-Control-Allow-Origin", "*");
          res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
          if(req.method === 'OPTIONS') {
              res.header('Access-Control-Allow-Methods', 'PUT', 'POST', 'PATCH', 'DELETE', 'GET')
              return res.status(200).json({});
          }
          next();
}); 


app.use('/', routes);
app.use('/drivers', drivers);


const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));