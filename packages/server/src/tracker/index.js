const { createNewSession } = require('../store/sessions')
const TrackingPage = require('./TrackingPage')

async function createTrackingPage(browser, sessionData) {
  // TODO: delete this after debugging
  // await createNewSession(sessionData)
  return new TrackingPage(browser, sessionData)
}

module.exports = {
  createTrackingPage
}