const path = require('path');

module.exports = {
	entry: {
		index: './public/src/index.js',
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './public/',
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, './public/dist'),
		clean: true,
	},
	mode: 'development',
};
