const EVENT_TIME_THRESHOLD = 20;

class EventStorage {
  constructor() {
    this.lastTimestamp = Date.now()
    this.events = [];
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

    this.events.push(event)
    this.log(event)
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