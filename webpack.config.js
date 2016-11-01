var path = require('path');
var ROOT_PATH = path.resolve(__dirname);

var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
	entry: APP_PATH,
	output: {
		path: BUILD_PATH,
		filename: 'bundle.js'
	},
	plugins: [

	],
	devServer: {
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true
	},
	module: {
		loaders: [
			{
				test: /.scss$/,
				loaders: ['style', 'css'],
				include: APP_PATH
			},
			{
				test: /\.(png|jpg)$/,
				loader: "url?limit=40000"
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