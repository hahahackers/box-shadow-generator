const path = require('path')

const { config } = require('dotenv')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CircularDependencyPlugin = require('circular-dependency-plugin')
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

config()

/* -- Setup ----------------------------------------------------------------- */

const rootDir = (dir) => path.resolve(__dirname, '../..', dir)

/* -- Configuration for both `development` and `mineralion` ----------------- */

module.exports = {
  devServer: {
    contentBase: './dist',
    hot: true,
    open: false,
    stats: 'minimal',
  },

  plugins: [
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      template: rootDir('src/index.ejs'),
    }),

    new webpack.EnvironmentPlugin({}),

    new ForkTsCheckerWebpackPlugin({
      eslint: {
        files: 'src/**/*.{ts,tsx}',
        options: {
          configFile: rootDir('.config/eslint/.eslintrc.js'),
          cache: true,
        },
      },
    }),
  ],

  entry: rootDir('src/main.tsx'),

  output: {
    path: rootDir('dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
  },

  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader',
      },
      {
        test: /\.graphql$/,
        include: /src/,
        exclude: /node_modules/,
        use: 'graphql-tag/loader',
      },

      {
        test: /\.tsx?$/,
        include: /src/,
        exclude: /mode_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              happyPackMode: true,
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        include: /src/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: true,
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
            },
          },
        ],
      },
    ],
  },

  resolve: {
    symlinks: false,
    extensions: ['.js', '.ts', '.tsx'],
    plugins: [new TsconfigPathsPlugin()],
  },
}

/* -- Configuration for `development` --------------------------------------- */

if (process.env.NODE_ENV === 'development') {
  module.exports.mode = 'development'
  module.exports.devtool = 'eval-cheap-module-source-map'
  module.exports.plugins.push(new CircularDependencyPlugin({ include: /src/ }))
}

/* -- Configuration for `mineralion` ---------------------------------------- */

if (process.env.NODE_ENV === 'production') {
  module.exports.mode = 'production'
  module.exports.plugins.push(new CircularDependencyPlugin({ include: /src/, failOnError: true }))
}
