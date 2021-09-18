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
      '--window-size=400,800',
    ],
    defaultViewport: null
  });

  const openingPage = (await browser.pages())[0];

  openingPage.goto('https://www.google.com/');

  // createTrackingPage({
  //   id: 'test',
  //   browser
  // })

  // automate({
  //   id: 'test',
  //   browser
  // })
}