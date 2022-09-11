const webpack = require('webpack')

require('dotenv').config()

const { Dirs } = require('../../.config/dirs')
const config = require('../webpack/webpack.config')

/** @type import('react-styleguidist').StyleguidistConfig */
module.exports = {
  webpackConfig: {
    ...config,
    plugins: [].concat(config.plugins, [
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
    ]),
  },
  serverPort: Number(process.env.STYLEGUIDIST_PORT),
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap',
        },
      ],
    },
  },

  require: [Dirs.src('main.css')],

  sections: [
    {
      name: 'UI',
      components: Dirs.modules('ui/components/**/*.tsx'), // ['Title'].map((_) => Dirs.modules(`ui/components/${_}/${_}.tsx`)),
    },
  ],
}
