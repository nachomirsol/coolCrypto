const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
	return {
		entry: './src/index.tsx',
		resolve: {
			extensions: ['.ts', '.tsx', '.js'],
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: './src/index.html',
			}),
		],
		module: {
			rules: [
				{
					test: /\.(js|ts)x?$/,
					loader: 'babel-loader',
					options: {
						presets: [['@babel/preset-react', { runtime: 'automatic' }]],
					},
				},
			],
		},
	};
};
