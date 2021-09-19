const express = require('express')
const uuid = require('uuid')
const cors = require('cors')

const { createTrackingPage } = require('../tracker')
const { automate } = require('../automator')
const { getAllSessions, deleteSession } = require('../store/sessions')

module.exports = ({ browser }) => {
  const app = express()

  app.use(cors({
    origin: '*',
  }))
  app.use(express.json())

  const port = 8001

  app.get('/status', (req, res) => {
    res.json({
      status: 200,
      data: {
        status: 'recording'
      }
    })
  })

  app.get('/sessions', (req, res) => {
    getAllSessions().then((sessions) => {
      res.json({
        status: 200,
        data: {
          sessions
        }
      }) 
    })
  })

  app.post('/sessions', (req, res) => {
    const id = uuid.v4()
    const { title, url } = req.body
    const data = {
      id,
      title,
      url
    }
    createTrackingPage(browser, data);
    res.status(200).json({ status: 200, data })
  })

  app.post('/sessions/:id', (req, res) => {
    automate({
      id: req.params.id,
      browser
    });
    res.status(200).json({
      status: 200,
      data: {
        id: req.params.id,
      }
    })
  })

  app.delete('/sessions/:id', (req, res) => {
    deleteSession(req.params.id)
    res.status(200).json({
      status: 200,
      data: {
        id: req.params.id,
      }
    })
  })


  app.listen(port, () => {
    console.log(`API is listening at http://localhost:${port}`)
  })
}