const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

const routes = require('./routes/api');

// connect to mongodb
const MONGODB_URI =
  'mongodb+srv://nayem:mechasys123@mechasysdb.s0faz.mongodb.net/<dbname>?retryWrites=true&w=majority';

// connect mongoose or db
mongoose.connect('mongodb://localhost/names-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// verify connection (on listener listens to connected evt)
mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected.');
});

// saving dummy data to db
// const data = {
//   firstName: 'test-db-nayem',
//   lastName: 'test-db-alam'
// };

// creating an instance for me to save data to db
// const newName = new Name(data);
// newName.save((error) => {
//   if (error) {
//     console.log('error saving on db');
//   } else {
//     console.log('data saved to db');
//   }
// });

// HTTP req logger
app.use(morgan('tiny'));
app.use('/api', routes);
// listen on set port
app.listen(PORT, console.log(`Server is staring at ${PORT}`));
