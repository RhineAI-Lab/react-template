const {
  override,
  addWebpackAlias,
  addWebpackModuleRule
} = require('customize-cra')
const path = require('path')
const paths = require("./paths")
const fs = require("fs")

const NODE_ENV = process.env.NODE_ENV;
const dotenvFiles = [
  `${paths.dotenv}.${NODE_ENV}.local`,
  // Don't include `.env` for `test` environment
  // since normally you expect tests to produce the same
  // results for everyone
  NODE_ENV !== 'test' && `${paths.dotenv}.local`,
  `${paths.dotenv}.${NODE_ENV}`,
  paths.dotenv,
].filter(Boolean);
// console.log(dotenvFiles)

dotenvFiles.forEach(dotenvFile => {
  if (fs.existsSync(dotenvFile)) {
    require('dotenv-expand').expand(
      require('dotenv').config({
        path: dotenvFile,
      })
    );
  }
});

module.exports = override(
  (config) => {
    config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false
    return config
  },
  // @别名
  addWebpackAlias({
    '@': path.resolve('./src')
  }),
  // scss全局变量
  addWebpackModuleRule({
    test: /\.scss$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: "[name]_[local]_[hash:base64:8]",
          },
        }
      },
      {
        loader: 'sass-loader',
        options: {
        }
      },
      {
        loader: 'sass-resources-loader',
        options: {
          resources: ['./src/assets/scss/variable.scss']
        }
      }
    ]
  }),
  // scss全局变量
  adjustStyleLoaders(rule => {
    if (rule.test.toString().includes('scss')) {
      rule.use.push({
        loader: require.resolve('sass-resources-loader'),
        options: {
          resources: ['./src/assets/scss/variable.scss']
        }
      })
    }
  })
)
