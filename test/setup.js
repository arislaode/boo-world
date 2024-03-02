const mongoose = require('mongoose');
const db = require('../src/config/db');
let mongoServer;

global.beforeAll(async () => {
  await db.connectDB();
});

global.afterAll(async () => {
  await db.disconnectDB();
});
