const logger = require('./logger');

function successResponse(req, res, next) {
  res.sendSuccess = (data, statusCode, message) => {
    const logMessage = `${req.method} ${req.originalUrl} - ${message}`;
    logger.info(logMessage);
    res.status(statusCode).json({
      success: true,
      message,
      data,
    });
  };
  next();
}

module.exports = successResponse;
