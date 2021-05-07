const { connectToStore } = require('../store')

class Automator {
  constructor({ id, browser }) {
    this.id = id
    this.browser = browser;
    this.storage = connectToStore(id);
    this.init();
  }

  async init() {
    // Initializing the page
    this.page = await this.browser.newPage();
    // fetch data from database
    console.log(await this.storage.getEvents())
  }
}

module.exports = Automator