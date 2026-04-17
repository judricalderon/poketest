function errorMiddleware(err, req, res, next) {
  if (err.response?.status === 404) {
    return res.status(404).json({
      message: 'Pokemon not found'
    });
  }

  return res.status(500).json({
    message: 'Internal server error'
  });
}

module.exports = errorMiddleware;