const config = { captureHTML: false };
const logger = require(`${process.cwd()}/app-server/services/logger`);
const loginTestDir = `login-test`;

class USECUProvider {

  constructor(options) {
    this.options = options;
    logger.info(`hello, i'm chase checking...`);
  }

  async execute(options) {

    options.logger.info(`Running providerChaseChecing`);

    // const page = await options.browser.newPage();

    // const url = 'https://www.usecu.org';
    // //const url = 'https://www.chase.com';
    // //const url = 'https://www.wellsfargo.com';
    // //const url = 'https://arh.antoinevastel.com/bots/areyouheadless';
    // //const url = `https://bot.sannysoft.com`;

    // await page.goto(url, { waitUntil: 'networkidle0' });

    // await page.screenshot({ path: `${loginTestDir}/logged-in-no.png`, fullPage: true });

    // if(config.captureHTML) { 
    //   const bodyHandle = await page.$('body');
    //   const html = await page.evaluate(body => body.innerHTML, bodyHandle);
    //   logger.info(`Capture of HTML: ${html}`);
    //   await bodyHandle.dispose();
    // }

    // await page.click('button#loginToggle');
    // await page.click(`input#ibUsername`);
    // await page.type(`input#ibUsername`, options.username, {delay: 100});
    // await page.click(`input#password`);

    // await page.type(`input#password`, options.password, {delay: 100});

    // await Promise.all([
    //   page.waitForNavigation({ waitUntil: 'networkidle0' }),
    //   page.click(`form#Login button[type=submit]`)
    // ]);

    // // STEP 3
    // await page.waitFor(10000);

    // await page.screenshot({ path: `${loginTestDir}/logged-in-yes.png`, fullPage: true });
    // // Authenticate... for now as of 02/06/2020 simply returningt the browser handle.
    return options.browser;
  }

}

module.exports = USECUProvider;


