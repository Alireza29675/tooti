const { connectToStore } = require('./db')

const EVENT_TIME_THRESHOLD = 20;

class EventStorageConnection {
  constructor({ id, silent = false }) {
    // configurations
    this.silent = silent
    this.lastTimestamp = Date.now()

    // creating the database
    this.db = connectToStore(`events/${id}`)
  }

  getEvents(conditions = {}) {
    return new Promise((resolve, reject) => {
      this.db.find(conditions).sort({ timestamp: 1 }).exec((err, events) => {
        if (err) {
          return reject(err)
        }

        resolve(events)
      })   
    })
  }

  // clears all the store data
  clear() {
    return new Promise((resolve, reject) => {
      this.db.remove({}, { multi: true }, function (err) {
        if (err) {
          return reject(err)
        }
        
        resolve()
      });
    })
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

module.exports = EventStorageConnection