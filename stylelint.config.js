module.exports = {
	plugins: ['stylelint-browser-compat'],
	rules: {
		'plugin/browser-compat': [
			true,
			{
				browserslist: ['extends browserslist-config-baseline'],
			},
		],
	},
};
