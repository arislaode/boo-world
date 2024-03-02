const mongoose = require('mongoose');

const zodiacSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Zodiac', zodiacSchema);
