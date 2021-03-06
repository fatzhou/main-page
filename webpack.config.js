var path = require('path');
var ROOT_PATH = path.resolve(__dirname);
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

var debug = process.env.NODE_ENV !== 'production';

module.exports = {
	devtool: 'eval-source-map',
    entry: [
    	  'webpack-dev-server/client?http://127.0.0.1:8080', // WebpackDevServer host and port
  		  'webpack/hot/only-dev-server',
  		  APP_PATH + '/js/',
    ],
    output: {
        path: BUILD_PATH,
        // publicPath: "/dist/",
        filename: '[name].js'
    },
    plugins: [
      new HtmlwebpackPlugin({
        title: 'Main page',
        template: APP_PATH + "/index.html",
        inject: true,
      	hash: true
      })
    ],
    devServer: {
        // historyApiFallback: true,
        hot: true,
        // contentBase: './dist',
        colors: true,
        inline: true,
        progress: true
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },

    module: {
        loaders: [{
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'image?{bypassOnDebug: true, progressive:true, \
				optimizationLevel: 3, pngquant:{quality: "65-80"}}',
                    'url?limit=10000&name=img/[hash:8].[name].[ext]',
                ]
            }, {
                test: /\.(woff|eot|ttf)$/i,
                loader: 'url?limit=10000&name=fonts/[hash:8].[name].[ext]'
            },
            { 
            	test: /\.css$/, 
            	loader: 'style!css' 
            },
            {
                test: /\.less$/,
                loader: 'style!css!less',
                include: APP_PATH + '/less'
            }, 
            {
                test: /\.jsx?/,
                loader: 'babel',
                include: APP_PATH,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};