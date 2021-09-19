const { createNewSession } = require('../store/sessions')
const TrackingPage = require('./TrackingPage')

async function createTrackingPage(browser, sessionData) {
  await createNewSession(sessionData)
  return new TrackingPage(browser, sessionData)
}

module.exports = {
  createTrackingPage
}