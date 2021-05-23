// const puppeteer = require('puppeteer-extra');
// const StealthPlugin = require('puppeteer-extra-plugin-stealth');
// const path = require('path');

// puppeteer.use(StealthPlugin());
const logger = require(`${process.cwd()}/app-server/services/logger`);
const {
  runBrowser,
  closeBrowser,
  doLoginAction,
  doGotoAccountAction,
  doGatherAccountsAction
} = require('./tasks');

const runService = async (username, password) => {

  const options = {
    //test: true,
    logger: logger,
    username: username,
    password: password
  };

  options.browser = await runBrowser(options);

  const loggedInBrowser = await doLoginAction(options);
  options.loggedInBrowser = loggedInBrowser;
  
  const gatheringActionsThings = await doGatherAccountsAction(options);
  options.gatheringActionsThings = gatheringActionsThings;

  const goingToAccountActionThings = await doGotoAccountAction(options);
  options.goingToAccountActionThings = goingToAccountActionThings;

  const closingBitch = await closeBrowser(options);

};

  // // TODO move to config
  // const options = {
  //     executablePath: `/Users/rlune/gitproj/chromium/src/out/Default/Chromium.app/Contents/MacOS/Chromium`,
  //     headless: false
  // };

  // const {
  //   runBrowser,
  //   doLoginAction,
  //   doGoToAccountAction,
  //   doGatherAccountsAction
  // } = require(path.resolve(__dirname, 'tasks'));

  // TASK STEPS
  // DO LOGIN doLoginAction
  // GATHER ACCOUNTS doGatherAccountsAction
  // GO TO ACCOUNT doGoToAccountAction
  // DO HARVEST doHarvestAction

  // puppeteer usage as normal
//   await runBrowser(options).then(async browser => {
//      console.log(`Running tests...`);

//   //   const loginTestDir = `login-test`;
//   //   mkdirp.sync(loginTestDir);

//   //   // TASK 1
//   //   // STEP 1

//   //   const page = await browser.newPage();

//   //   // STEP 2

//   //   const url = 'https://www.usecu.org';
//   //   //const url = 'https://www.chase.com';
//   //   //const url = 'https://www.wellsfargo.com';
//   //   //const url = 'https://arh.antoinevastel.com/bots/areyouheadless';
//   //   //const url = `https://bot.sannysoft.com`;

//   //   await page.goto(url, { waitUntil: 'networkidle0' });

//   //   await page.screenshot({ path: `${loginTestDir}/logged-in-no.png`, fullPage: true });

//   //   // const bodyHandle = await page.$('body');
//   //   // const html = await page.evaluate(body => body.innerHTML, bodyHandle);
//   //   // console.log(html);
//   //   // await bodyHandle.dispose();

//   //   await page.click('button#loginToggle');

//   //   await page.click(`input#ibUsername`);
//   //   await page.type(`input#ibUsername`, username, {delay: 100});

//   //   await page.click(`input#password`);
//   //   await page.type(`input#password`, password, {delay: 100});

//   //   await Promise.all([
//   //     page.waitForNavigation({ waitUntil: 'networkidle0' }),
//   //     page.click(`form#Login button[type=submit]`)
//   //   ]);

//   //   // STEP 3

//   //   await page.waitFor(10000);

// //button[name='sendOTP']
// //input#mfaCodeInputField

//     // maybe here we need to break out 

//     // await page.screenshot({ path: `${loginTestDir}/logged-in-yes.png`, fullPage: true });

//     await browser.close();

//     /*
//       is a sufficient api to pass the browser object into subordinate tasks?
//     */
//     console.log(`All done, check the screenshot.`);
//   })
//   .then(doGatherAccountsAction)
//   .then(doGoToAccountAction);

// };

// const runService = async (username, password) => {

//   const args = [
//     '--no-sandbox',
//     '--disable-setuid-sandbox',
//     '--disable-infobars',
//     '--window-position=0,0',
//     '--ignore-certifcate-errors',
//     '--ignore-certifcate-errors-spki-list',
//     '--user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4008.0 Safari/537.36"'
//   ];

//   const options = {
//       //executablePath: `/Users/rlune/gitproj/chromium/src/out/Default/Chromium.app/Contents/MacOS/Chromium`,
//       args,
//       headless: true,
//       ignoreHTTPSErrors: true,
//       userDataDir: './tmp'
//   };

//   const browser = await puppeteer.launch(options);
//   const page = await browser.newPage();

//   //const url = 'https://www.chase.com';
//   const url = 'https://www.wellsfargo.com';
//   //const url = 'https://arh.antoinevastel.com/bots/areyouheadless';

//   // Let's poise for change to the default...
//   await page.setRequestInterception(true);
//   page.on('request', r => {
//     if ( ['image', 'stylesheet', 'font', 'script'].indexOf(r.resourceType()) !== -1 ) {
//       r.abort();
//     } else {
//       r.continue();
//     }
//   });

//   // // Let's change the request for each Navigation request (doesn't apply to styles and other assets)
//   // page.on('request', (request) => {
//   //   const headers = request.headers();
//   //   if(request.isNavigationRequest()) {
//   //     headers['User-Agent'] = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4008.0 Safari/537.36';
//   //   }
//   //   request.continue({ headers });
//   // });

//   // var waitWait = new Promise((resolve, reject) => {
//   //   var intervalId = setInterval(async () => {
//   //     await page.frames().find(
//   //       (fr) => { 
//   //         console.log('hallo');
//   //         if(fr.name() === 'logonbox') {
//   //           var frame = fr;
//   //           // DO SOMETHING TO THE FRAME? IS THIS WHERE WE LOG IN?
//   //           resolve(frame);
//   //         }
//   //       }
//   //     );
//   //   }, 1000);
//   //   setTimeout(() => {
//   //     console.log('goodbye');
//   //     clearInterval(intervalId);
//   //     reject(intervalId);
//   //   }, 5000);
//   // });

//   // // Get the frame with the @logonbox
//   // var frame;
//   // await page.frames().find(
//   //   (fr) => { 
//   //     if(fr.name() === 'logonbox') {
//   //       frame = fr;
//   //       // DO SOMETHING TO THE FRAME? IS THIS WHERE WE LOG IN?
//   //     }
//   //   }
//   // );

//   //await page.waitFor(10000);

//   await page.evaluateOnNewDocument(`delete window.navigator.headless;`);


//   await page.goto(url, { waitUntil: 'networkidle0', timeout: 0 }).then(() => {

//     debugger;

//     console.log('mokie...');
//   }).catch((e) => {
//     console.log('wtf izz going on, mang...?', e);
//   });


// //  await page.waitForSelector('iframe#login-form');
//   //await waitWait;

//   await page.screenshot({ path: 'example.png' });
//   await browser.close();
//   return page;
// };

// const runService = async (username, password) => {

//   //const url = 'http://localhost:3000/api/v1/imarobot';
//   const url = 'https://www.usecu.org';
//   //const url = 'https://www.chase.com/';
//   //const url = 'https://www.wellsfargo.com/';
  
//   const browser = await puppeteer.launch({
//     devtools: true,
//     executablePath: `/Users/rlune/gitproj/chromium/src/out/Default/Chromium.app/Contents/MacOS/Chromium`
//   });

//   // Create a new page in a pristine context.
//   const page = await browser.newPage();

//   const navigationPromiseLogin = page.waitForNavigation();

//   //await page.waitFor(10000);

//   // Let's poise for change to the default...
//   await page.setRequestInterception(true);

//   // Let's change the request for each Navigation request (doesn't apply to styles and other assets)
//   page.on('request', (request) => {
//     const headers = request.headers();
//     if(request.isNavigationRequest()) {
//       headers['User-Agent'] = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4008.0 Safari/537.36 YourMama/69.125';
//     }
//     request.continue({ headers });
//   });

//   // Go!
//   await page.goto(url);

//   // // ALERT comment...
//   // await Promise.all([
//   //   navigationPromiseLogin
//   // ]);

//   //page.$eval('form', form => form.submit())

//   // // Get the frame with the @logonbox
//   // var frame;
//   // await page.frames().find(
//   //   (fr) => { 
//   //     if(fr.name() === 'logonbox') {
//   //       frame = fr;
//   //       // DO SOMETHING TO THE FRAME? IS THIS WHERE WE LOG IN?
//   //     }
//   //   }
//   // );

//   // Record!

//   await page.waitFor(10000);
//   await page.screenshot({path: 'example.png'});

//   // Bye...
//   await browser.close();
//   return page;
// };

// const runService = async (username, password) => {

//   // // Puppeteer launch configuration
//   const browser = await puppeteer.launch({
//     //devtools: true,
//     executablePath: `/Users/rlune/gitproj/chromium/src/out/Default/Chromium.app/Contents/MacOS/Chromium`//,
//     //args: [ '--incognito' ],
//     //ignoreDefaultArgs: true//['--enable-automation']
//   });

//   // const context = await browser.createIncognitoBrowserContext();
//   // const page = await context.newPage();
  
//   const page = await browser.newPage();

//   await page.waitFor(10000);


//   //const url = 'https://secure05c.chase.com/web/auth/#/logon/logon/chaseOnline';
//   //const url = 'https://panopticlick.eff.org/tracker?aat=1';
//   //const url = 'https://arh.antoinevastel.com/bots/areyouheadless';
  
//   const url = 'http://localhost:3000/api/v1/imarobot';
//   const navigationPromiseLogin = page.waitForNavigation()
  

//   // TODO Need to configure Puppeteer to send requests with specific headers
//   // Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36

//   const cookies = [{
//     'name': 'cookie1',
//     'value': 'val1'
//   },{
//     'name': 'cookie2',
//     'value': 'val2'
//   },{
//     'name': 'cookie3',
//     'value': 'val3'
//   }];
//   await page.setCookie(...cookies);

//   await page.goto(url);

//   // Selectors for credentials input
//   const usernameSelector = `#userId-input-field`;
//   const passwordSelector = `#password-input-field`;
//   const submitSelector = `#signin-button`;

//   // Steps to access bank dashboard
//   //  1. Login
//   //  2. Wait to see dashboard 

//   await page.waitFor(10000);

//   // FRAME implementation
//   // let logonFrame = page.frames().find(frame => frame.name() === 'logonbox');
//   // await logonFrame.click(`${usernameSelector}`);
//   // await logonFrame.type(`${usernameSelector}`, 'mysterlune404', {delay: 100});
//   // await logonFrame.click(`${passwordSelector}`);
//   // await logonFrame.type(`${passwordSelector}`, 'mysterlune404', {delay: 100}); 
//   // await logonFrame.click(`${submitSelector}`, element => element.click());

//   // PAGE implementation
//   // await page.click(`${usernameSelector}`);
//   // await page.type(`${usernameSelector}`, `${username}`, {delay: 100});
//   // await page.click(`${passwordSelector}`);
//   // await page.type(`${passwordSelector}`, `${password}`, {delay: 100}); 
//   // await page.click(`${submitSelector}`, element => element.click());

//   await navigationPromiseLogin;


//   //await page.waitFor(10*1000);

//   await page.screenshot({path: 'example.png'});
//   browser.close();
//   return page;
// };

  // const cookies = [{
  //   'url': 'http://localhost:3000',
  //   'name': 'cookie1',
  //   'value': 'val1'
  // },{
  //   'url': 'http://localhost:3000',
  //   'name': 'cookie2',
  //   'value': 'val2'
  // },{
  //   'url': 'http://localhost:3000',
  //   'name': 'cookie3',
  //   'value': 'val3'
  // }];

  // // const cookie1 = {
  // //   'url': 'http://localhost:3000',
  // //   'name': 'cookie1',
  // //   'value': 'val1'
  // // };

  // // const cookie2 = {
  // //   'url': 'http://localhost:3000',
  // //   'name': 'cookie2',
  // //   'value': 'val2'
  // // };

  // // Do stuff
  // await page.setCookie(...cookies);

// Run Locally
module.exports.runService = runService;



//plugins.value = ["Chromium PDF Plugin::Portable Document Format::internal-pdf-viewer::__application/x-google-chrome-pdf~pdf~Portable Document Format","Chromium PDF Viewer::::mhjfbmdgcfjbbpaeojofohoefgiehjai::__application/pdf~pdf~"]

