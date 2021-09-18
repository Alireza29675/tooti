const puppeteer = require('puppeteer-core');
const locateChrome = require('locate-chrome');

const { createTrackingPage } = require('./tracker')
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
      '--window-size=1920,1080',
    ],
    defaultViewport: null
  });

  const openingPage = (await browser.pages())[0];

  openingPage.goto('http://localhost:8000/');
}