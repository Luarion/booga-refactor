module.exports = {
	'*.{js,ts,jsx,tsx,json,jsonc,css,scss,html,md}': [
		'biome check --write --no-errors-on-unmatched',
	],
	'{.devcontainer/devcontainer.json}': [() => 'devcontainer build'],
};
