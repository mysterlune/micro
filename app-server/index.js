const express = require('express');
const commonMiddlewares = require('./middlewares/common');
const registerRoutes = require('./routes');
const applyMiddleware = require('./utils/apply-middleware');
const {name} = require('../package.json');
const logger = require('./services/logger');
const processListener = require('./utils/process-listener');

const app = express();

(async () => {
  applyMiddleware(commonMiddlewares, app);
  await registerRoutes(app);
  const PORT = +process.env.PORT || 3000;
  const server = app.listen(PORT, () => {
    logger.info(`${name} server has started on port ${PORT}`);
  });
  processListener(server);
})().catch(err => {
    console.log(err)
})