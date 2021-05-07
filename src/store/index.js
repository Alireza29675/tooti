const EventStorageConnection = require('./EventStorageConnection')

function connectToStore(id) {
  return new EventStorageConnection({ id })
}

module.exports = {
  connectToStore
}