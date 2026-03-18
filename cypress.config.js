const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 30000,
    viewportWidth: 1366,
    viewportHeight: 768,
    chromeWebSecurity: false,
    screenshotOnRunFailure: true,
    video: true,
    setupNodeEvents(on, config) {
      return config
    }
  }
})