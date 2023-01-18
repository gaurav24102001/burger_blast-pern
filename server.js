var express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
var PORT = process.env.PORT || 3000;
const {pool} =require("./db");

const burgerroutes = require('./router/burgers_routes');
const orderroutes = require('./router/orders_routes');
const restaurantroutes = require('./router/restaurant');
const usersroutes = require('./router/users_routes');
app.get('/', (req, res) => {
  res.send('hello world');
});
app.use('/api/v1/burgers', burgerroutes);
app.use('/api/v1/users', usersroutes);
app.use('/api/v1/restaurant', restaurantroutes);
app.use('/api/v1/orders', orderroutes);

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log('Server listening on PORT', PORT);
});
