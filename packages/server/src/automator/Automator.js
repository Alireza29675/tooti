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
          await this.simulateNavigation(payload.url)
        }
      }

      // simulating click
      if (type === 'click') {
        await this.simulateClick(payload.path)
      }

      // simulating input change
      if (type === 'change') {
        await this.simulateInputChange(payload)
      }

      // simulating focus
      if (type === 'focus') {
        await this.simulateFocus(payload.path)
      }
    }

    console.log(`[DONE playing ${this.id}.db]`)
  }

  async openPage(url) {
    await this.page.goto(url)
  }

  async simulateNavigation(url) {
    if (this.page.url() === url) {
      await wait(1000)
      return Promise.resolve();
    }

    this.page.goto(url, { waitUntil: 'domcontentloaded', timeout: 0 })
    await this.page.waitForNavigation({
      waitUntil: 'domcontentloaded',
      timeout: 0 
    })
  }

  async simulateClick(selector) {
    await wait(1000)
    await this.page.waitForSelector(selector)
    await this.page.click(selector)
    await wait(1000)
  }

  async simulateInputChange({ path, value }) {
    await wait(200)
    await this.page.waitForSelector(path)
    await this.page.$eval(path, (el, value) => el.value = value, value);
  }

  async simulateFocus(selector) {
    await this.page.waitForSelector(selector)
    await this.page.focus(selector)
    await wait(500)
  }
}

module.exports = Automator