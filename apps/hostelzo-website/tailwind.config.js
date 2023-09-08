const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
          colors: {
      'gray-dim': '#222',
      'pink': '#feda75',
      'orange': '#ff7849',
      'green': '#13ce66',
      'gray-dark': '#273444',
      'gray': '#717171',
      'black' : '#222222',
      'gray-light': '#F7F7F7',
      'gray-lighs': '#ddd'
    },

    },
  },
  plugins: [],
};