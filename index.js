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
  await page.exposeFunction('reportEvent', info => console.log(info));
  await page.evaluate(() => {
    document.addEventListener('click', e => reportEvent({
      targetName: window.sess.cssPath(e.target),
      eventType: 'click'
    }), true);
  });
})();