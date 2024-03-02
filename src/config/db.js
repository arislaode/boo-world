const logger = require('../utils/logger');
const mongoose = require('mongoose');
const { MongoMemoryReplSet } = require('mongodb-memory-server');

let mongoMemoryReplSet;

const connectDB = async () => {
  let uri;

  if (process.env.NODE_ENV === 'development') {
    mongoMemoryReplSet = await MongoMemoryReplSet.create({ replSet: { count: 1 } });
    uri = mongoMemoryReplSet.getUri();
  } else {
    uri = process.env.DATABASE_URL;
  }

  try {
    await mongoose.connect(uri);
    logger.info(`Database connected: ${uri}`);
  } catch (error) {
    logger.error('Database connection failed:', error);
    process.exit(1);
  }
};

const disconnectDB = async () => {
  await mongoose.disconnect();
  if (mongoMemoryReplSet) {
    await mongoMemoryReplSet.stop();
  }
  logger.info('Database disconnected');
};

module.exports = { connectDB, disconnectDB };
