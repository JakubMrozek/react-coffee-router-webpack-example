module.exports = {
	entry: './main.cjsx',
	output: {
        filename: 'bundle.js',
        path: './public'
    },
	module: {
		loaders: [
			{ test: /\.cjsx$/, loaders: ['react-hot', 'coffee', 'cjsx'] }
		]
	}
}