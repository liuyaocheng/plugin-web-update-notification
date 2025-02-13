const { WebUpdateNotificationPlugin } = require('@rsddwqy/plugin-web-update-notification-webpack')
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new WebUpdateNotificationPlugin({
        logVersion: true,
        locale: 'en_US',
      }),
    ],
  },
})
