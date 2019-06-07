const path = require('path');
const UglifyJsPlugin = require('uglifyes-webpack-plugin');

const commonJSConfig = {
  entry: ['./index.js'],
  module: {
    rules: [],
  },
  target: 'web',
};

const rawConfig = Object.assign({}, commonJSConfig, {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'orecore-message.js',
    library: 'orecore-message',
    libraryTarget: 'umd',
  },
});
const uglifiedConfig = Object.assign({}, commonJSConfig, {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'orecore-message.min.js',
    library: 'orecore-message',
    libraryTarget: 'umd',
  },
  plugins: [
    new UglifyJsPlugin(),
  ],
});

module.exports = [rawConfig, uglifiedConfig];
