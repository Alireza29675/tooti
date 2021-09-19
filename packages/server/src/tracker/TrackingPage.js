const { connectToStore } = require('../store')
const { inject } = require('./modules')

class TrackingPage {
  constructor(browser, { id, title, url }) {
    this.id = id
    this.title = title
    this.url = url
    this.browser = browser;
    this.storage = connectToStore(id);
    this.init();
  }

  async init() {
    // Initializing the page
    this.page = await this.browser.newPage();
    this.page.goto(this.url)
    // Async initializations
    await this.exposeFunctionsToClient();
    // Clear the store data
    await this.storage.clear();
    // Sync initializations
    this.watchNavigation();
    // post preparation
    this.onReady();
  }

  onReady() {
    // this.goto('https://google.com')
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
      // Inject all client-side modules
      await inject({
        page: this.page,
        modules: ['behavior']
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