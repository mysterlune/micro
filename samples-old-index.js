const puppeteer = require('puppeteer');

(async () => {

// const browser = await puppeteer.launch({
//   headless: false
// });
// const page = await browser.newPage();
// await page.goto('https://secure05c.chase.com/web/auth/dashboard#/dashboard/overviewAccounts/overview/index');

// await page.waitFor(10*1000);

// // Get a handle on the frames
// let logonFrame = page.frames().find(frame => frame.name() === 'logonbox');
// await logonFrame.type('#userId-input-field', 'mysterlune404', {delay: 100}); 
// await logonFrame.type('#password-input-field', 'mysterlune404', {delay: 100}); 
// await logonFrame.$eval('#signin-button', element => element.click());

/// NEWTON, the smart crawler

// After each request, bank up the cookies that are sent per request and only send with the "next" request
// the cookies that were sent with the "last" request...
	

  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  //await page.waitFor(10*1000);

  //debugger;


	const mainUrl = "https://secure05c.chase.com/web/auth/dashboard#/dashboard/overviewAccounts/overview/index"
	let mainUrlStatus;
  await page.setRequestInterception(true);
  page.on("request", request => {
    const url = request.url();
    console.log("request url:", url.slice(0,10));
    request.continue();
  });
  page.on("requestfailed", request => {
    const url = request.url();
    console.log("request failed url:", url.slice(0,10));
  });
  page.on("response", response => {
    const request = response.request();
    const url = request.url();
    const status = response.status();
    console.log("response url:", url.slice(0,10), "status:", status);
		if (url === mainUrl) {
			mainUrlStatus = status;
		}
  });
  await page.goto(mainUrl);
	//console.log("status for main url:", mainUrlStatus);
  const html = await page.content();

  await page.waitFor(10*1000);

  await page.screenshot({path: 'example.png'});

  console.log(await page.cookies())

  await browser.close();
})();