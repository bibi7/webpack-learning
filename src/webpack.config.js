const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const history = require('connect-history-api-fallback')
const convert = require('koa-convert')

const dev = Boolean(process.env.WEBPACK_SERVE)

module.exports = {
  mode: dev ? 'development' : 'production',

  devtool: dev ? 'cheap-module-eval-source-map' : 'hidden-source-map',

  entry: './src/index.js',

  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: '/assets/'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve(__dirname, 'src')],
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
      // {
      //   test: /\.css/,
      //   loader: /css-loader/
      // }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunksSortMode: 'none'
    })
  ]
}

if (dev) {
  module.exports.serve = {
    port: 8080,
    host: '0.0.0.0',
    dev: {
      publicPath: '/assets/'
    }
    // add: app => {
    //   app.use(convert(history({
    //     index: '/assets/'
    //   })))
    // }
  }
}