// commonJS 스펙의 모듈 배포하기

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, 'build')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader','css-loader']
			},
			{
				test: /\.scss$/,
				use: ['style-loader','css-loader', 'sass-loader']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin()

	]
};

