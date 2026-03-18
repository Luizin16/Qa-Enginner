class ShopeePage {
  acessarLogin() {
    cy.visit('https://shopee.com.br/buyer/login')
  }

  preencherEmailInicial(email) {
    cy.get('#continue-alias-input', { timeout: 10000 })
      .should('be.visible')
      .type(email)
  }

  clicarContinuar() {
    cy.contains('CONTINUAR', { timeout: 20000 })
      .should('be.visible')
      .click()
  }

  validarCampoSenhaVisivel() {
    cy.get('#email-pannel-password-input', { timeout: 20000 })
      .should('be.visible')
      .and('be.enabled')
  }

  preencherSenha(senha) {
    cy.get('#email-pannel-password-input', { timeout: 20000 })
      .should('be.visible')
      .and('be.enabled')
      .type(senha)
  }

  clicarRegistrar() {
    cy.get('[aria-label="Registrar"] > .sui-button-common > span')
      .should('be.visible')
      .click()
  }

  validarTelaCadastro() {
    cy.contains('Crie sua SHEIN conta.', { timeout: 20000 })
      .should('be.visible')
  }

  validarEmailTravadoNaSegundaEtapa() {
    cy.get('#email-pannel-email-input', { timeout: 10000 })
      .should('be.visible')
      .and('have.attr', 'disabled')
  }

  validarCampoSenhaObrigatorio() {
    cy.get('#email-pannel-password-input')
      .should('be.visible')
  }

  clicarReturn() {
    cy.contains('RETURN', { timeout: 10000 })
      .should('be.visible')
      .click()
  }
}

export default new ShopeePage()