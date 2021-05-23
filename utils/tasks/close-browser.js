const closeBrowser = async (options) => {

  options.logger.info(`Running closeBrowser`);
  const browser = options.browser;
  return await browser.close();

};

module.exports = closeBrowser;