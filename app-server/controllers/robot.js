const { version } = require('../../package.json');
const Robots = require('../services/robots');
const logger = require('../services/logger');


/**
 * Application related endpoints
 */
class RobotController {

	constructor() {
    this.robots = new Robots();
  }

  async getTruth(req, res) {
    try {
      for( let slam in req.headers ) {
        logger.info(`request heaeder: ${slam}: ${req.headers[slam]}`);
      }
      const robots = await this.robots.getRobots();
      res.status(200).json(robots);
    } catch (err) {
      logger.error({ err }, 'Error getting robots... eek!');
      res.status(400).json({"error" : err.message});
    }
  };


}

module.exports = RobotController;
