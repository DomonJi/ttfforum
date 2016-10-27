var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer')

module.exports = {
  entry: path.join(__dirname, 'src/main.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'main.js'
  },
  resolve: {
    extensions: ['', '.js', '.styl']
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json'
      }, {
        test: /\.css?$/,
        loader: "style-loader!css-loader"
      }, {
        test: /\.(png|jpg|svg)?$/,
        loader: "url?name=[path]"
      }, {
        test: /\.js$/,
        loader: "babel",
        exclude: /node_modules/
      }, {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader'
      }
    ]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  plugins: [new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    })]
}
