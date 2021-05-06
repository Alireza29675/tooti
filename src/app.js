const puppeteer = require('puppeteer');
const TrackingPage = require('./tracker/TrackingPage')

module.exports = async function app() {
  // Launching Chromium
  const browser = await puppeteer.launch({
    headless: false,
    args: [
      '--auto-open-devtools-for-tabs',
      '--window-size=1920,1080',
    ],
    defaultViewport: null
  });

  // Creating a new tracking page
  new TrackingPage(browser)
}