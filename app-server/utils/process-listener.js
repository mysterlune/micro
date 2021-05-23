const { Server } = require('http');
const logger = require('../services/logger');

/**
 * Listens and handles various process events
 * @param {} server
 */
const processListener = (server) => {
  /**
   * Listens to any uncaughtException and terminates the process..
   * Uncaught exception makes the application unstable and hence the application
   * should be restarted
   * reference: https://nodejs.org/api/process.html#process_event_uncaughtexception
   */
  process.on('uncaughtException', (err) => {
    logger.fatal({ err }, 'Uncaught exception occurred');
    process.exit(1);
  });

  /**
   * Listens and handles any unhandledRejection
   */
  process.on('unhandledRejection', (reason, promise) => {
    logger.error(
      { err: reason, promise },
      'Unhandled promise rejection occurred',
    );
  });

  /**
   * Listens to SIGTERM signal and gracefully shuts down the server
   * reference: https://joseoncode.com/2014/07/21/graceful-shutdown-in-node-dot-js/
   */
  process.on('SIGTERM', () => {
    logger.fatal('SIGTERM signal received. Gracefully closing the http server');
    server.close(() => {
      logger.fatal('Server closed');
      process.exit(0);
    });
  });
};

module.exports = processListener;
