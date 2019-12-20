const base = require('./webpack.base')
const merge = require('webpack-merge')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = merge(base, {
  mode: 'production',
  plugins: [new CompressionPlugin({ test: /\.js(\?.*)?$/i })]
})
