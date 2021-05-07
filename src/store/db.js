const Datastore = require('nedb')

function createStore(name) {
  return new Datastore({
    filename: `./data/${name}.db`,
    autoload: true,
  });
}

module.exports = {
  createStore
}