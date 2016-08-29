const path                  = require('path')
const webpack               = require('webpack')
const ExtractTextPlugin     = require('extract-text-webpack-plugin')
const WebpackNotifierPlugin = require('webpack-notifier')

module.exports = {
  entry: {
    index  :  './src/js/Root',
    vendors: [
      "react",
      "react-dom",
      "react-redux",
      "react-router",
      "react-transform-hmr",
      "reselect",
      "redux",
			"material-ui"
    ]
  },
  devtool: 'source-map',
  output: {
    filename: './public/js/[name].js',
    devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: 'webpack:///[absolute-resource-path]'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: require.resolve('babel-loader'),
        query: {
          presets: [
            require.resolve('babel-preset-react'),
            require.resolve('babel-preset-es2015'),
            require.resolve('babel-preset-stage-1')
          ]
        }
      },
			{
				test: /\.less$/,
				loader: ExtractTextPlugin.extract( 'css?sourceMap!less?sourceMap' )
			},
      // {
      //   test: /\.css$/,
      //   loaders: ["style", "css"]
      // },
			// {
			// 	test: /\.less$/,
			// 	loader: ExtractTextPlugin.extract( 'css?sourceMap!less?sourceMap' )
			// },
      // {
      //   test: /\.scss$/,
      //   loader: ExtractTextPlugin.extract("style", "css!resolve-url!sass?sourceMap")
      // },
      {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
        loader: 'file'
      },
    ]
  },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]), // moment.js locale
    new webpack.optimize.CommonsChunkPlugin('vendors', './public/js/vendors.js'),
    new WebpackNotifierPlugin({alwaysNotify:true}),
    new ExtractTextPlugin('./public/css/[name].css', { allChunks: true }),

    new webpack.DefinePlugin({
      'process.env': {
        'DEV_MODE': process.env.DEV_MODE
      }
    })
  ]
}
