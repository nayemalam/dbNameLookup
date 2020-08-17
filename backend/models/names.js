const mongoose = require('mongoose');
// Scheme
const Schema = mongoose.Schema;
const NameSchema = new Schema({
  firstName: String,
  lastName: String,
  date: {
    type: String,
    default: Date.now()
  }
});

// Model
// registering basic schema
const Name = mongoose.model('Name', NameSchema);

module.exports = Name;
