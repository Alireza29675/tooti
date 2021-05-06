const TrackingPage = require('./TrackingPage')

module.exports = async function app(browser) {
  const page = new TrackingPage(browser)
}