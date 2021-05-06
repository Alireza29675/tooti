const EventStorage = require('./EventStorage')
const { injectScripts } = require('./injector')

class TrackingPage {
  constructor(browser) {
    this.browser = browser;
    this.storage = new EventStorage();
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
    await this.page.exposeFunction('reportEvent', event => {
      this.storage.store(event)
    });
  }

  async watchNavigation() {
    await this.page.waitForNavigation({
      timeout: 0,
      waitUntil: 'load'
    })
    // Inject all client-side script tags
    await injectScripts({
      page: this.page,
      modules: ['css-path', 'tracker']
    })
    // Going for tracking again
    this.watchNavigation()
  }

  goto(url) {
    this.page.goto(url)
  }
}

module.exports = TrackingPage