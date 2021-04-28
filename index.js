const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.addScriptTag({
    path: './src/client-scripts/css-path.js'
  })
  await page.addScriptTag({
    path: './src/client-scripts/tracker.js'
  })
  await page.exposeFunction('reportEvent', info => console.log(info));
})();