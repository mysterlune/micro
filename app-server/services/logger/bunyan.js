const bunyan = require('bunyan');
const { name } = require('../../../package.json');

var PrettyStream = require('bunyan-prettystream');
 
var prettyStdOut = new PrettyStream();
prettyStdOut.pipe(process.stdout);

/**
 * Uses bunyan library to log
 */
class BunyanLogger {

  constructor() {

    this.bunyan = bunyan.createLogger({
      name,
      streams: [{
        level: 'debug',
        type: 'raw',
        stream: prettyStdOut
      },
      {
        path: `debug.log`,
        level: 'info'
      }],
      serializers: bunyan.stdSerializers,
    });
  }

  debug(error, ...params) {
    this.bunyan.debug(error, ...params);
  }

  error(error, ...params) {
    this.bunyan.error(error, ...params);
  }

  fatal(error, ...params) {
    this.bunyan.fatal(error, ...params);
  }

  info(error, ...params) {
    this.bunyan.info(error, ...params);
  }

  trace(error, ...params) {
    this.bunyan.trace(error, ...params);
  }

  warn(error, ...params) {
    this.bunyan.warn(error, ...params);
  }
}

module.exports = new BunyanLogger();
