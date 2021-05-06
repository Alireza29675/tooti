class TrackingPage {
  constructor(browser) {
    this.browser = browser;
    this.init();
  }

  async init() {
    // Initializing the page
    this.page = await this.browser.newPage();
    // Async initializations
    await this.exposeFunctionsToClient();
    // Sync initializations
    this.watchNavigation();
    // post preparation
    this.onReady();
  }

  onReady() {
    this.page.goto('https://google.com')
  }

  async exposeFunctionsToClient() {
    await this.page.exposeFunction('reportEvent', info => console.log(info));
  }

  async watchNavigation() {
    await this.page.waitForNavigation({
      timeout: 0,
      waitUntil: 'load'
    })
    await this.addScriptTags()
    this.watchNavigation()
  }

  async addScriptTags() {
    await this.page.addScriptTag({
      path: './src/injections/js/css-path.js'
    })
    await this.page.addScriptTag({
      path: './src/injections/js/tracker.js'
    })
  }

  goto(url) {
    this.page.goto(url)
  }
}

module.exports = TrackingPage