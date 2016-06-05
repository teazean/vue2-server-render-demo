'use strict';
let path = require('path');
let projectRoot = path.resolve(__dirname, '../');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, '/output'),
		publicPath: '/asserts/',
		filename: 'index.js'
	},
	resolve: {
		root: projectRoot + '/',
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
	            loader: 'babel',
	            include: projectRoot,
	            exclude: [/node_modules/, /dist/]
			}
		]
	}
}