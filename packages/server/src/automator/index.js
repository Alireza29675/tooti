const Automator = require('./Automator')

function automate(browser, { id }) {
  return new Automator(browser, { id })
}

module.exports = {
  automate
}