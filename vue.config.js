const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    cache: false,
  },
  publicPath: process.env.NODE_ENV === 'production'
  ? '/REPOSITORY_NAME/'
  : '/'
  // devServer: {
  //   watchOptions: {
  //     poll: true,
  //     ignored: /node_modules/,
  //   },
  // },
})

