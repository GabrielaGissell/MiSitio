module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{css,js,html,png,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};