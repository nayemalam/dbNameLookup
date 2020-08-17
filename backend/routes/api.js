const express = require('express');
const router = express.Router();
const Name = require('../models/names');

router.post('/save', (req, res) => {
  console.log('Request Body: ', req.body);
  const data = req.body;

  const newName = new Name(data);

  // dynamically saving data to db
  newName.save((error) => {
    if (error) {
      res.status(500).json({ msg: 'Sending data errors.' });
    } else {
      res.json({
        msg: 'Recevied your data!'
      });
    }
  });
});

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
