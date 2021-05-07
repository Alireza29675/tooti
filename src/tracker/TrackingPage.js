const EventStorage = require('../store/EventStorage')
const { injectScripts, injectStyles } = require('./injector')

class TrackingPage {
  constructor({ id, browser }) {
    this.uniqueId = id
    this.browser = browser;
    this.storage = new EventStorage(id);
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
    try {
      await this.page.waitForNavigation({
        timeout: 0,
        waitUntil: 'domcontentloaded'
      })
      // Inject all client-side script tags
      await injectScripts({
        page: this.page,
        modules: ['css-path', 'tracker']
      })
      // Inject all client-side style tags
      await injectStyles({
        page: this.page,
        modules: ['tracker']
      })
      // Storing navigations
      this.storage.store({
        type: 'navigation',
        payload: {
          url: this.page.url()
        }
      })
      // Going for tracking again
      this.watchNavigation()
    } catch (e) {
      this.onClose(e)
    }
  }

  onClose() {
    console.log('Session closed!')
  }

  goto(url) {
    this.page.goto(url)
  }
}

module.exports = TrackingPage