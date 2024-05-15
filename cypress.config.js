const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://saucedemo.com/',
    defaultCommandTimeout: 30000,
    viewportHeight: 900,
    viewportWidth: 1400,
    waitForAnimations: true,
    watchForFileChanges: false,
    chromeWebSecurity: false,
    specPattern: 'cypress/e2e/runner.spec.cy.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});