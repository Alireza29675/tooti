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

module.exports = {
  createNewSession,
  getAllSessions
}