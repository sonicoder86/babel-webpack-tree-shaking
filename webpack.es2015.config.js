'use strict';
let webpack = require('webpack');
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
    loaders: []
  },

  plugins: [],

  resolve: {
    root: [ path.join(__dirname, 'app') ],
    extensions: ['', '.js']
  },

  devtool: false
};
