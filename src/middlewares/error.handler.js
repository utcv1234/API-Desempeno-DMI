export function errorHandler(err, req, res, next) {
  console.error('[Error]', err);
  const status = err.status || 500;
  res.status(status).json({
    message: err.message || 'Error interno',
    ...(process.env.NODE_ENV !== 'production' && { stack: err.stack })
  });
}
