const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resove: {
      extensions: [],
      alias: {
        '@': '/src',
        assets: '@/assets',
        components: '@/components',
        network: '@/network',
        views: '@/views',
        common: '@/common',
      }
    }
  }
})
