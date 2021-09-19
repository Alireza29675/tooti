const puppeteer = require('puppeteer-core');
const locateChrome = require('locate-chrome');
const initApi = require('./api')

const { automate } = require('./automator')

module.exports = async function app() {
  // Finding where the chrome is
  const chromePath = await locateChrome();

  // Launching Chromium
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: chromePath,
    args: [
      // '--auto-open-devtools-for-tabs',
      '--window-size=1440,900',
    ],
    defaultViewport: null
  });

  // Initializing the api
  initApi({ browser })

  // opening the webapp in first tab
  const openingPage = (await browser.pages())[0];
  openingPage.goto('http://localhost:8000/');

  // TODO: remove
  automate(browser, {
    id: '28e9bfcd-93d5-4ec7-8dd6-204af7ed82f8'
  })
}