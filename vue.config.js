const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    cache: false,
  },
  publicPath: '/movie-app/',
  outputDir: 'dist' 
})

