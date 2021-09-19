const { connectToStore } = require('./db')

const db = connectToStore('sessions')

function createNewSession(session) {
  return new Promise((resolve, reject) => {
    db.insert(session, (err, newSession) => {
      if (err) {
        return reject(err)
      }
      resolve(newSession)
    })
  })
}

function getAllSessions() {
  return new Promise((resolve, reject) => {
    db.find({}, (err, sessions) => {
      if (err) {
        reject(err)
      } else {
        resolve(sessions)
      }
    })
  })
}

function deleteSession(id) {
  return new Promise((resolve, reject) => {
    db.remove({ id }, { multi: true }, (err, numRemoved) => {
      if (err) {
        reject(err)
      } else {
        resolve(numRemoved)
      }
    })
  })
}

module.exports = {
  createNewSession,
  getAllSessions,
  deleteSession
}