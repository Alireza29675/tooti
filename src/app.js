const puppeteer = require('puppeteer');

const { createTrackingPage } = require('./tracker')
const { automate } = require('./automator')

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

  automate({
    id: 'test',
    browser
  })
}