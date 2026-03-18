// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('esperar', (tempo = 2000) => {
  cy.wait(tempo)
})

Cypress.Commands.add('fecharPopupSeExistir', () => {
  cy.get('body').then(($body) => {
    const seletores = [
      '[aria-label="close"]',
      '.shopee-popup__close-btn',
      '.shopee-popup-close-btn',
      '.icon-shopee-modal__close',
      '.shopee-modal__close',
      '.shopee-toast__close'
    ]

    seletores.forEach((seletor) => {
      if ($body.find(seletor).length > 0) {
        cy.get(seletor).first().click({ force: true })
      }
    })
  })
})