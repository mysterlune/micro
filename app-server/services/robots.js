const logger = require('./logger');

class Robots {

  constructor() {}

  getRobots(deets) {
    let robots = JSON.stringify({robots:['me','you']});
    logger.info(robots);
    return robots;
  }

}

module.exports = Robots;