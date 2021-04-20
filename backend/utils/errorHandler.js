// Error Handler class
class ErrorHandler extends Error {
  constructor(message, statusCode) {
    // super inherits so the correct error will displayed from the place the call was made
    super(message);
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ErrorHandler;
