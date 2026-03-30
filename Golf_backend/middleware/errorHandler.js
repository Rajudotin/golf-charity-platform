const errorHandler = (err, req, res, next) => {
  // Log to service like Winston later
  console.error(err.stack);
  res.status(err.status || 500).json({
    msg: err.message || "Something went wrong!",
  });
};

module.exports = errorHandler;
