const applyMiddleware = ( middlewares, app ) => {
  if (Array.isArray(middlewares)) {
    for (const middleware of middlewares) {
      middleware(app);
    }
    return;
  }
  middlewares(app);
};

module.exports = applyMiddleware;