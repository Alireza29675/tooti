const TrackingPage = require('./TrackingPage')

function createTrackingPage({ browser, id }) {
  return new TrackingPage({ browser, id })
}

module.exports = {
  createTrackingPage
}