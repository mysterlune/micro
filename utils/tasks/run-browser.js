const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

puppeteer.use(StealthPlugin());

const runBrowser = async (options) => {

  options.logger.info(`Running runService`);
  return await puppeteer.launch(options);

};

module.exports = runBrowser;


