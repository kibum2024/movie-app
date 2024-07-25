const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    cache: false,
  },
  // devServer: {
  //   watchOptions: {
  //     poll: true,
  //     ignored: /node_modules/,
  //   },
  // },
})

