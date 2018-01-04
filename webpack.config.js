var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    'babel-polyfill',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
 
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.ProvidePlugin({
      jQuery:	'jquery'
      })
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot-loader','babel-loader'] },
 
       { test: /\.json$/, loader: 'json-loader' },
       { test: /\.html/, loader: 'html-loader' },
       { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },
       { test: /\.css$/, loader: 'style-loader!css-loader' },
       { test: /\.(gif|png|jpe?g)$/i, loader: 'file-loader?name=dist/images/[name].[ext]' },
       { test: /\.woff2?$/, loader: 'url-loader?name=dist/fonts/[name].[ext]&limit=10000&mimetype=application/font-woff' },
       { test: /\.(ttf|eot|svg)$/, loader: 'file-loader?name=dist/fonts/[name].[ext]' }
     ]
  }
}
