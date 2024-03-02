const logger = require('./logger');

function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Server Error';
  const logMessage = `Error ${statusCode}: ${req.method} ${req.originalUrl} - ${message}`;
  logger.error(logMessage);

  res.status(statusCode).json({
    success: false,
    message,
  });
}

module.exports = errorHandler;
