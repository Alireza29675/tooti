const puppeteer = require('puppeteer');
const { createTrackingPage } = require('./tracker')
const { automate } = require('./automator')

class Browser {
  constructor({ headless = false }) {
    this.headless = headless;
    this.init();
  }
  async init() {
    this.browser = await puppeteer.launch({
      headless: this.headless,
      args: [
        '--auto-open-devtools-for-tabs',
        '--window-size=1920,1080',
      ],
      defaultViewport: null
    });
  }
  async track(id) {
    createTrackingPage({
      browser: this.browser,
      id
    })
  }
  async automate(id) {
    automate({
      browser: this.browser,
      id
    })
  }
}

module.exports = Browser;