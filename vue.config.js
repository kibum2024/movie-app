const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    cache: false,
  },
  publicPath: process.env.NODE_ENV === 'production'
  ? '/movie-app/'
  : '/'
  // devServer: {
  //   watchOptions: {
  //     poll: true,
  //     ignored: /node_modules/,
  //   },
  // },
})

