const { createBrowser, automate } = require('./core')

module.exports = async function app() {
  const browser = await createBrowser()
  automate({ id: 'test', browser })
}