const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
	root: path.join(__dirname, '../'),
	src: path.join(__dirname, '../src'),
	views: path.join(__dirname, '../src/views'),
	dist: path.join(__dirname, '../dist'),
	assets: 'assets'
};

const PLAGINS = [
	new MiniCssExtractPlugin({
		filename: `${PATHS.assets}/css/[name].css`
	}),
	new CopyWebpackPlugin([
		{ from: `${PATHS.src}/assets`, to: PATHS.assets },
		{ from: `${PATHS.src}/static`, to: PATHS.dist },
	])
];

// List .html pages to be transferred to dist
const PAGES = [ 
	'index.html', 
	'standardNumber.html', 
	'familyNumber.html', 
	'economyNumber.html', 
	'doubleRoomLuxNumber.html', 
	'updateNumber.html', 
	'wedding.html',
	'companyInformation.html',
	'sauna.html',
	'shelterLakes.html',
	'conferences.html',
	'contact.html', 
	];


PAGES.forEach((page) => {
	PLAGINS.push(
		new HtmlWebpackPlugin({
			hash: false,
			template: `${PATHS.views}/${page}`,
			filename: `./${page}`
		})
	);
});

module.exports = {
	// BASE config
	externals: {
		paths: PATHS
	},
	entry: {
		bundle: `${PATHS.src}/index.js`,
	},
	output: {
		filename: `${PATHS.assets}/js/[name].js`,
		path: PATHS.dist,
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: '/node_modules/'
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]'
				}
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: { sourceMap: true }
					},
					{
						loader: 'postcss-loader',
						options: { sourceMap: true, config: { path: `${PATHS.root}/js/postcss.config.js` } }
					},
					{
						loader: 'sass-loader',
						options: { sourceMap: true }
					}
				]
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: { sourceMap: true }
					},
					{
						loader: 'postcss-loader',
						options: { sourceMap: true, config: { path: `${PATHS.root}/js/postcss.config.js` } }
					}
				]
			},
			{
				test: /\.(html)$/,
				include: path.join(__dirname, 'src/views'),
				use: {
					loader: 'html-loader',
					options: {
						interpolate: true
					}
				},
				exclude: path.resolve(__dirname, 'src/views/index.html')
			}
		]
	},
	plugins: PLAGINS
};
