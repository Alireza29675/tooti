const puppeteer = require('puppeteer');
const app = require('./src/app');

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  app(browser)
})();