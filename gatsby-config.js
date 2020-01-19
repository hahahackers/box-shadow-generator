let config = require('./webpack.config.js')

module.exports = {
  pathPrefix: '/box-shadow-generator',
  siteMetadata: {
    title: 'Box Shadow Generator',
    description: 'Box Shadow Generator',
    author: '@catsonis'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: config.resolve.alias,
        extensions: config.resolve.extensions
      }
    }
  ]
}
