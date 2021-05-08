const puppeteer = require('puppeteer');

const { createTrackingPage } = require('./tracker')
const { automate } = require('./automator')

module.exports = {
  async createBrowser() {
    return await puppeteer.launch({
      headless: false,
      args: [
        '--auto-open-devtools-for-tabs',
        '--window-size=1920,1080',
      ],
      defaultViewport: null
    });
  },
  createTrackingPage,
  automate
}