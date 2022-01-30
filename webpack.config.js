const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
	return {
		entry: './src/index.js',
		plugins: [new HtmlWebpackPlugin({
			template:'public/index.html'
		})],
	};
};
