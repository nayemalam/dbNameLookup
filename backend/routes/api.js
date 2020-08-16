const express = require('express');
const router = express.Router();
const Name = require('../models/names');

router.get('/', (req, res) => {
  Name.find({})
    .then((data) => {
      console.log('Data: ', data);
      res.json(data);
    })
    .catch((error) => {
      console.log('Error: ', error);
    });
});

router.get('/name', (req, res) => {
  const data = {
    username: 'nayem',
    age: 5
  };
  res.json(data);
});

module.exports = router;
