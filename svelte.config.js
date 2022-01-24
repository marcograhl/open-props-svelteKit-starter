import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	},
	preprocess: [
		preprocess({
		  defaults: {
			style: 'postcss'
		  },
		  postcss: true
		})
	  ],
	
	vite: {
		server: {
			hmr: {
				clientPort: process.env.HMR_HOST ? 443: 3000,
				host: process.env.HMR_HOST ? process.env.HMR_HOST.substring("https://".length) : "localhost"
			}
		}
	}

};

export default config



