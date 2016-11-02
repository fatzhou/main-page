var path = require('path');
var ROOT_PATH = path.resolve(__dirname);
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

var debug = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: [
    	  'webpack-dev-server/client?http://127.0.0.1:3000', // WebpackDevServer host and port
  		  'webpack/hot/only-dev-server',
  		  APP_PATH + '/js'
    ],
    output: {
        path: BUILD_PATH,
        filename: '[hash:8].[name].min.js'
    },
    plugins: [
      new HtmlwebpackPlugin({
        title: 'Hello World app',
        minify:{ //压缩HTML文件
          removeComments:true,    //移除HTML中的注释
          collapseWhitespace:true    //删除空白符与换行符
        },
        inject: true,
      	hash: true
      }),
      new webpack.optimize.UglifyJsPlugin({    //压缩代码
         compress: {
             warnings: false
         },
         except: ['$super', '$', 'exports', 'require']    //排除关键字
      })
    ],
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    "scripts": {
	     "build": "webpack",
	     "start": "webpack-dev-server --hot --inline --progress"
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
                test: /.less$/,
                loaders: ['style', 'css', 'less'],
                include: APP_PATH
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