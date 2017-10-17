var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var src = path.join(__dirname, 'src')
var dist = path.join(__dirname, 'dist')


module.exports = {
    context: src,
    entry: path.join(src, 'app.js'),
    watch: true,
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(src, 'index.html'),
        hash: true
      }),
      new ExtractTextPlugin('bundle.css')
    ],
    module: {
      loaders: [
        {
          test: /\.html$/,
          include: /src/,
          loader: 'html-loader'
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader!sass-loader'
          })
        },
        {
          test : /\.(ttf|eot|gif|png|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
          include: /src/,
          loader : 'file-loader'
        },
        {
          test : /\.(png|gif)?$/,
          include: /node_modules/,
          loader : 'file-loader'
        }
      ]
    },

    devServer: {
      port: 3000,
      contentBase: dist,
      inline: true,
      host: "0.0.0.0",
      //stats: 'error-only',
      //outputPath: dist
    }
};
