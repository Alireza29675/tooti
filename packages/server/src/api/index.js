const express = require('express')
const uuid = require('uuid')
const { createTrackingPage } = require('../tracker')
const { automate } = require('../automator')

module.exports = ({ browser }) => {
  const app = express()
  const port = 8001

  app.post('/session/create', (req, res) => {
    const id = uuid.v4()
    createTrackingPage({ id, browser });
    res.status(200).json({ status: 200, data: { id } })
  })

  app.post('/session/run/:id', (req, res) => {
    automate({
      id: req.params.id,
      browser
    });
    res.status(200).json({
      status: 200,
      data: {}
    })
  })

  app.listen(port, () => {
    console.log(`API is listening at http://localhost:${port}`)
  })
}