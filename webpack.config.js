const path = require('path');

const injectorPath = path.resolve(__dirname, 'src/tracker/modules/')

module.exports = {
  mode: 'development',
  entry: {
    behavior: path.resolve(injectorPath, 'behavior/index.js')
  },
  output: {
    path: path.resolve(injectorPath, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  }
};

