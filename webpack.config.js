const path = require('path')

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      layouts: path.resolve(__dirname, './app/layouts'),
      modules: path.resolve(__dirname, './app/modules')
    }
  }
}
