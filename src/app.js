require('dotenv').config();

const express = require('express');
const db = require('./config/db');
const logger = require('./utils/logger');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./openapi-spec.yaml');
const successResponse = require('./utils/successResponse');
const errorHandler = require('./utils/errorHandler');
const zodiacRoutes = require('./routes/zodiacRoutes');
const enneagramRoutes = require('./routes/enneagramRoutes');
const mbtiRoutes = require('./routes/mbtiRoutes');
const profileRoutes = require('./routes/profileRoutes');
const commentRoutes = require('./routes/commentRoutes');

const app = express();
app.use(express.json());

db.connectDB();

const apiVersion = process.env.VERSION_API;

app.use(successResponse);

app.use(`${apiVersion}/zodiac`, zodiacRoutes);
app.use(`${apiVersion}/enneagram`, enneagramRoutes);
app.use(`${apiVersion}/mbti`, mbtiRoutes);
app.use(`${apiVersion}/profiles`, profileRoutes);
app.use(`${apiVersion}/comments`, commentRoutes);

app.use(`${apiVersion}/api-docs`, swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(errorHandler);

const PORT = process.env.PORT || 4000;

if (!module.parent) {
    app.listen(PORT, () => logger.info(`Server running on port ${PORT}`));
  }
  

module.exports = app;
