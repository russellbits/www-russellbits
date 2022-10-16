/**
NOTE:
The dev server needs a restart when this file is changes
*/

/**
TODO:
Need to add a svelte preprocessor for Sass

Don't forget to run first:
npm i -D svelte-preprocess sass
*/

import adapter from '@sveltejs/adapter-auto';
// import sveltePreprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	//preprocess: [
    //sveltePreprocess(),
  //],
};

export default config;
