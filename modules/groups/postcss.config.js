
const path = require('path');

const autoprefixer = require('autoprefixer');

const postcssUrl = require('postcss-url');
const postcssCopy = require('postcss-copy');
const postcssImport = require('postcss-import');


module.exports = (ctx) => ({
  from: path.resolve(__dirname, 'src'),
  to: path.resolve(__dirname, 'lib', 'index.css'),

  parser: false,
  syntax: 'postcss-scss',
  map: ctx['options']['map'],

  plugins: [
    postcssImport({
      root: ctx.file.dirname,
    }),
    postcssCopy({
      dest: path.resolve(__dirname, 'lib'),
      basePath: path.resolve(__dirname, 'src'),
    }),
    postcssUrl({
      url: 'copy',
      useHash: true,
    }),
    autoprefixer(['last 2 versions', 'iOS >= 8']),
  ],
});
