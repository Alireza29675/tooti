const { connectToStore } = require('../store')

class Automator {
  constructor({ id, browser }) {
    this.id = id
    this.browser = browser;
    this.storage = connectToStore(id);
    this.events = [];
    this.init();
  }

  async init() {
    // Initializing the page
    this.page = await this.browser.newPage();
    // fetch data from database
    this.events = await this.storage.getEvents()

    this.automate()
  }

  async automate() {
    for (const event of this.events) {
      const { type, payload } = event

      // check if event is click
      if (type === 'click') {
        await this.simulateClick(payload.path)
      }

      // check if event is keyboard press
      if (type === 'keyboard') {
        await this.simulateKeypress(payload.key)
      }
    }
  }

  async simulateClick(selector) {
    await this.page.waitForSelector(selector)
    await this.page.click(selector)
  }

  async simulateKeypress(key) {
    await page.keyboard.press(key);
  }
}

module.exports = Automator