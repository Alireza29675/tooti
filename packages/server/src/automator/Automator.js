const { connectToStore } = require('../store')
const wait = require('./utils/wait')

class Automator {
  constructor(browser, { id }) {
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
      const isTheFirstEvent = i === 0

      // simulating navigation
      if (type === 'navigation') {
        if (isTheFirstEvent) {
          await this.openPage(payload.url)
        } else {
          await this.simulateNavigation()
        }
      }

      // simulating click
      if (type === 'click') {
        await this.simulateClick(payload.path)
      }

      // simulating keyboard press
      if (type === 'keyboard') {
        await this.simulateKeypress(payload.key)
      }

      // simulating focus
      if (type === 'focus') {
        await this.simulateFocus(payload.path)
      }
    }
  }

  async openPage(url) {
    await this.page.goto(url)
  }

  async simulateNavigation() {
    await this.page.waitForNavigation({
      waitUntil: 'networkidle0'
    })
  }

  async simulateClick(selector) {
    await this.page.waitForSelector(selector)
    await this.page.click(selector)
  }

  async simulateKeypress(key) {
    await wait(200)
    await this.page.keyboard.press(key);
  }

  async simulateFocus(selector) {
    await this.page.waitForSelector(selector)
    await this.page.focus(selector)
    await wait(500)
  }
}

module.exports = Automator