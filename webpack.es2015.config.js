'use strict';
let path = require('path');

module.exports = {
  entry: {
    'car.es2015': './app/car.js'
  },

  output: {
    path: './dist',
    filename: '[name].bundle.js'
  },

  module: {
    rules: []
  },

  plugins: [],

  resolve: {
    modules: [
      path.join(process.cwd(), 'app'),
      'node_modules'
    ],
    extensions: ['.js', '.json']
  },

  devtool: false
};
