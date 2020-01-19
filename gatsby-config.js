let config = require('./webpack.config.js')

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: config.resolve.alias
      }
    }
  ]
}
