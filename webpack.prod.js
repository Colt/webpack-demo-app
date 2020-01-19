const path = require('path')
const common = require('./webpack.common')
const merge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractorPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[contentHash].js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin(), new HtmlWebpackPlugin({
      template: './src/template.html',
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true
      }
    })]
  },
  plugins: [new MiniCssExtractorPlugin({ filename: '[name].[contentHash].css' }), new CleanWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractorPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  }
})
