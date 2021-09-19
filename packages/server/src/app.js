const puppeteer = require('puppeteer-core');
const locateChrome = require('locate-chrome');
const initApi = require('./api')

const { createTrackingPage } = require('./tracker')

module.exports = async function app() {
  // Finding where the chrome is
  const chromePath = await locateChrome();

  // Launching Chromium
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: chromePath,
    args: [
      // '--auto-open-devtools-for-tabs',
      '--window-size=1366,768',
    ],
    defaultViewport: null
  });

  // Initializing the api
  initApi({ browser })

  // opening the webapp in first tab
  const openingPage = (await browser.pages())[0];
  openingPage.goto('http://localhost:8000/');

  // TODO: delete this
  createTrackingPage(browser, {
    url: 'https://divar.ir/',
    title: 'دیوار',
  });
}