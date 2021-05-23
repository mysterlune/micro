const { version } = require('../../package.json');

/**
 * Application related endpoints
 */
class AppController {

  health(_, res) {
    res.json({ status: 'UP' });
  };


  version(_, res) {
    res.json({ version });
  };
  
}

module.exports = AppController;