const mongoose = require('mongoose');

const enneagramSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Enneagram', enneagramSchema);
