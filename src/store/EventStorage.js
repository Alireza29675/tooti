const { createStore } = require('./db')

const EVENT_TIME_THRESHOLD = 20;

class EventStorage {
  constructor({ id, silent = false }) {
    // configurations
    this.silent = silent
    this.lastTimestamp = Date.now()

    // creating the database
    this.db = createStore(id)
  }

  // Main store function
  store(emittedEvent) {
    const timestamp = Date.now();

    if (!this.checkIfEventTimestampIsValid(timestamp)) {
      return
    }

    const event = {
      type: emittedEvent.type,
      payload: emittedEvent.payload,
      timestamp
    }

    this.db.insert(event, (err, event) => {
      if (err) {
        console.log(err)
      }

      if (!this.silent) this.log(event)
    })
  }

  // Prevent double storing the events
  checkIfEventTimestampIsValid(eventTimestamp) {
    if (eventTimestamp - this.lastTimestamp < EVENT_TIME_THRESHOLD) {
      return false
    }
    this.lastTimestamp = eventTimestamp
    return true
  }

  // Event logger
  log(event) {
    console.log(event)
  }
}

module.exports = EventStorage