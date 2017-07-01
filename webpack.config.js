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
    rules: [
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
      {
        test: /\.sass$/,
        use: [
          {
            loader: 'style-loader',
          }, {
            loader: 'css-loader',
          }, {
            loader: 'sass-loader',
          },
        ],
      },
    ],
    // rules: [{
    //   test: /\.scss$/,
    //   use: [
    //     {
    //       loader: 'style-loader', // creates style nodes from JS strings
    //     }, {
    //       loader: 'css-loader', // translates CSS into CommonJS
    //     }, {
    //       loader: 'sass-loader', // compiles Sass to CSS
    //     },
    //   ],
    // }],
  },
};
