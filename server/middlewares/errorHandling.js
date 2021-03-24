const errorHandlers = (err, req, res, next) => {
  let statusCode = 500;
  let errorObj = { message: "Internal Server Error"}
  switch (err.name) {
      case "SequelizeValidationError":
        let errors = err.errors.map(error => error.message);
        statusCode = 400
        errorObj.message = errors
        break;
      case "SequelizeUniqueConstraintError":
        statusCode = 400
        errorObj.message = err.errors[0].message
        break;
      case "resourceNotFound":
        statusCode = 404
        errorObj.message = 'error not found'
        break;
      case "Social Media not found":
        statusCode = 404
        errorObj.message = 'Social Media not found'
        break;
      case "TypeError":
        statusCode = 403
        errorObj.message = 'Please register first'
        break;
      default:
        console.log("name ->>", err.name);
        console.log("error ->>", err);
        break;
  }
  res.status(statusCode).json(errorObj);
}

module.exports = errorHandlers