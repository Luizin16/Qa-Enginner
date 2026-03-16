const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return config
    },
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 30000,
    viewportWidth: 1366,
    viewportHeight: 768,
    video: true,
    screenshotOnRunFailure: true,
    chromeWebSecurity: false
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'mochawesome-report',
    overwrite: true,
    html: true,
    json: true,
    timestamp: 'mmddyyyy_HHMMss'
  }
})