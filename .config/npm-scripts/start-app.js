let webpack = require('webpack')
let WebpackDevServer = require('webpack-dev-server')
let { config } = require('dotenv')
let webpackConfig = require('../webpack/webpack.config')

config()

async function bootstrap() {
  let app = new WebpackDevServer(webpack(webpackConfig), webpackConfig.devServer)

  app.listen(process.env.PORT)
}

void bootstrap()
