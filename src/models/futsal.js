const mongoose = require('mongoose');
const validator = require('validator');

const futsalSchema = new mongoose.Schema({
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

const Futsal = mongoose.model('Futsal', futsalSchema);

module.exports = Futsal;
