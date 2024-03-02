const mongoose = require('mongoose');
const { mongoServer } = require('./setup');

module.exports = async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
};
