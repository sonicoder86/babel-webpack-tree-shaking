'use strict';
let path = require('path');

module.exports = {
  entry: {
    'car': './app/car.js'
  },

  output: {
    path: './dist',
    filename: '[name].bundle.js'
  },

  module: {
    rules: [
      { test: /\.js$/, loader: 'babel' }
    ]
  },

  resolve: {
    modules: [
      path.join(process.cwd(), 'app'),
      'node_modules'
    ],
    extensions: ['.js', '.json']
  },

  devtool: false
};
