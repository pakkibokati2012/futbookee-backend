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
  },
  phone: {
    type: Number,
    required: true,
    validate(value) {
      if (!validator.isMobilePhone(value.toString())) {
        throw new Error('Phone number is not valid');
      }
    }
  },
  businessHours: [
    {
      day: String,
      opens: Number,
      closes: Number
    }
  ],
  owners: [
    {
      name: {
        type: String,
        required: true
      },
      phone: {
        type: Number
      }
    }
  ],
  website: String
});

const Futsal = mongoose.model('Futsal', futsalSchema);

module.exports = Futsal;
