export default {
	'*.{js,mjs,cjs,ts,jsx,tsx,json,jsonc,css,scss,html,md}': [
		'biome check --write --no-errors-on-unmatched',
	],
	'*.{yaml,yml}': ['yamllint'],
	'{.devcontainer/devcontainer.json}': [() => 'devcontainer build'],
};
