const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;
const Name = require('./models/names');

const routes = require('./routes/api');

// connect to mongodb
// const MONGODB_URI =
//   'mongodb+srv://nayem:mechasys123@mechasysdb.s0faz.mongodb.net/<dbname>?retryWrites=true&w=majority';

// connect mongoose or db
mongoose.connect('mongodb://localhost/names-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// verify connection (on listener listens to connected evt)
mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected.');
});

// to get the body in api.js
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// HTTP req logger
app.use(morgan('tiny'));
app.use('/api', routes);
// listen on set port
app.listen(PORT, console.log(`Server is staring at ${PORT}`));
