const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'demo', 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'demo'),
    publicPath: '/demo',
    filename: 'bundle.js',
  },
  watchOptions: {
    poll: true,
  }, 
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
          },
        },
      },
    ],
  },
};
