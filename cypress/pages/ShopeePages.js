class ShopeePage {
  acessarHome() {
    cy.visit('https://shopee.com.br/')
    cy.esperar(3000)
    cy.fecharPopupSeExistir()
  }

  acessarLogin() {
    cy.visit('https://shopee.com.br/buyer/login')
    cy.esperar(3000)
    cy.fecharPopupSeExistir()
  }

  validarLogoVisivel() {
    cy.contains('Shopee', { timeout: 15000 }).should('be.visible')
  }

  validarCampoBuscaVisivel() {
    cy.get('input[placeholder*="Buscar"]', { timeout: 15000 })
      .should('be.visible')
  }

  preencherBusca(produto) {
    cy.get('input[placeholder*="Buscar"]', { timeout: 15000 })
      .should('be.visible')
      .clear()
      .type(`${produto}{enter}`)
  }

  validarResultadoBusca() {
    cy.contains('Resultado da pesquisa para', { timeout: 15000 })
      .should('be.visible')
  }

  validarTextoBuscado(texto) {
    cy.contains(texto, { timeout: 15000 }).should('exist')
  }

  clicarEntrar() {
    cy.contains('Entre', { timeout: 15000 })
      .should('be.visible')
      .click({ force: true })
  }

  validarTelaLogin() {
    cy.url({ timeout: 15000 }).should('include', '/buyer/login')
  }

  validarCampoEmailLogin() {
    cy.get('input[type="text"], input[type="email"]', { timeout: 15000 })
      .should('be.visible')
  }

  validarCampoSenhaLogin() {
    cy.get('input[type="password"]', { timeout: 15000 })
      .should('be.visible')
  }

  preencherEmailLogin(email) {
    cy.get('input[type="text"], input[type="email"]', { timeout: 15000 })
      .first()
      .should('be.visible')
      .type(email)
  }

  preencherSenhaLogin(senha) {
    cy.get('input[type="password"]', { timeout: 15000 })
      .should('be.visible')
      .type(senha)
  }

  clicarBotaoEntrar() {
    cy.contains('button', 'Entre', { timeout: 15000 })
      .should('be.visible')
      .click({ force: true })
  }

  validarLinkEsqueciSenha() {
    cy.contains('Esqueceu a senha', { timeout: 15000 })
      .should('be.visible')
  }

  clicarEsqueciSenha() {
    cy.contains('Esqueceu a senha', { timeout: 15000 })
      .should('be.visible')
      .click({ force: true })
  }

  validarOpcaoGoogle() {
    cy.contains('Google', { timeout: 15000 }).should('be.visible')
  }

  validarCampoObrigatorio() {
    cy.get('body').should('be.visible')
  }

  validarHomeCarregada() {
    cy.url({ timeout: 15000 }).should('include', 'shopee.com.br')
    cy.validarTituloParcial('Shopee')
  }
}

export default new ShopeePage()