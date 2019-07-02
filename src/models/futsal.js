const mongoose = require('mongoose');
const validator = require('validator');

const Futsal = mongoose.model('Futsal', {
  name: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  }
});

module.exports = Futsal;
