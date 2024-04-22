const { defineConfig } = require("cypress");
const path = require('path')

module.exports = defineConfig({
  projectId: 'gardwe',
  e2e: {
    baseUrl: 'http://localhost:3000',
    env: {
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
