const { GenerateCtrfReport } = require('cypress-ctrf-json-reporter')

/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on) => {
  new GenerateCtrfReport({
    on,
  })
}