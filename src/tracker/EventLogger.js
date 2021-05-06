class EventLogger {
  log({ type, payload }) {
    console.log(type, payload)
  }
}

module.exports = EventLogger