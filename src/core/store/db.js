const Datastore = require('nedb')

function connectToStore(name) {
  return new Datastore({
    filename: `./data/${name}.db`,
    autoload: true,
  });
}

module.exports = {
  connectToStore
}