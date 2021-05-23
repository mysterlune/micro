const login = require('./utils').runService;
const logger = require('./app-server/services/logger');

// TODO Move username and password arguments to ENV variables
//   startup routine would then be:
// TRICKERY_USERNAME=foo TRICKERY_PASSWORD=bar && node .

const TRICKERY_USERNAME = process.env.TRICKERY_USERNAME;
const TRICKERY_PASSWORD = process.env.TRICKERY_PASSWORD;


(async () => {
	
	try {
		let page = await login(TRICKERY_USERNAME, TRICKERY_PASSWORD);
  } catch(err) {
    console.log(err);
  }

})();

