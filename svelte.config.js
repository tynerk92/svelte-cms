import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess({
    scss: {
      includePaths: ['src/styles'],
      prependData: "@import 'src/styles/style.scss';",
    },
  }),
  kit: {
    adapter: adapter({
      pages: 'public',
      assets: 'public',
      fallback: null,
    }),
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    vite: {
      resolve: {
        alias: {
          $state: path.resolve('./src/state'),
        },
      },
    },
  },
}

export default config
