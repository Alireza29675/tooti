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
    for (let i = 0; i < this.events.length; i++) {
      const { type, payload } = this.events[i]

      // simulating navigation
      if (type === 'navigation' && i === 0) {
        await this.simulateNavigation(payload.url)
      }

      // simulating click
      if (type === 'click') {
        await this.simulateClick(payload.path)
      }

      // simulating keyboard press
      if (type === 'keyboard') {
        await this.simulateKeypress(payload.key)
      }

      // simulating input
      if (type === 'input') {
        await this.simulateInput(payload.key)
      }
    }
  }

  async simulateNavigation(url) {
    await this.page.goto(url)
  }

  async simulateClick(selector) {
    await this.page.waitForSelector(selector)
    await this.page.click(selector)
  }

  async simulateKeypress(key) {
    await this.page.keyboard.press(key);
  }

  async simulateInput(selector, text) {
    await this.page.evaluate(({ selector, text }) => {
      document.querySelector(selector).value = text;
    }, {
      selector,
      text
    })
  }
}

module.exports = Automator