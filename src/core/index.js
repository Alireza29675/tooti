const Browser = require('./Browser')

module.exports = {
  async createBrowser() {
    const browser = new Browser({ headless: false })
    await browser.open()
    return browser
  }
}