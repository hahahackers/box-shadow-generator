const path = require('path')

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      modules: path.resolve(__dirname, './src/modules')
    }
  }
}
