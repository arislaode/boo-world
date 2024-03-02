const mongoose = require('mongoose');

const mbtiSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('MBTI', mbtiSchema);
