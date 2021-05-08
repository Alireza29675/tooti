const { createBrowser } = require('./core')

module.exports = async function app() {
  const browser = await createBrowser()
  browser.automate('test')
}