module.exports = {
  mode: 'development',
  entry: {
    tracker: {
      import: './src/tracker/injector/src/index.js',
      filename: './src/tracker/injector/[name].js'
    },
  },
};

