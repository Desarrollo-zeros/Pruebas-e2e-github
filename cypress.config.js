const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const cucumber = require('cypress-cucumber-preprocessor').default;



module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      on('file:preprocessor', cucumber());
      return config;
    },
    video: true,
    screenshotOnRunFailure: true
  },
  env: {
    allure: true
  }
});
