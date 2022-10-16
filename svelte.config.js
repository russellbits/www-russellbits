/**
NOTE:
The dev server needs a restart when this file is changes
*/

/**
TODO:
Need to add a svelte preprocessor for Sass

Don't forget to run this before uncommenting new imports:
npm i -D svelte-preprocess sass
npm i -D mdsvex
*/

import adapter from '@sveltejs/adapter-auto';
// import sveltePreprocess from 'svelte-preprocess'
// import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	//extensions: ['.svelte', '.md'],
	//preprocess: [
    //sveltePreprocess(),
		//mdsvex({
      //extensions: ['.md']
    //})
  //],
};

export default config;
