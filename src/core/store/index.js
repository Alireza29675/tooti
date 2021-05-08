const EventStorageConnection = require('./EventStorageConnection')

function connectToStore(id) {
  return new EventStorageConnection({ id, silent: true })
}

module.exports = {
  connectToStore
}