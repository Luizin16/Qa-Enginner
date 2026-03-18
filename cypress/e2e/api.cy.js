describe('Intercept e validação de busca na Shopee', () => {
  it('deve interceptar a navegação de busca', () => {
    cy.visit('https://shopee.com.br/')
    cy.esperar(3000)
    cy.fecharPopupSeExistir()

    cy.intercept('GET', '**/search*').as('buscaProduto')

    cy.get('input[placeholder*="Buscar"]', { timeout: 15000 })
      .should('be.visible')
      .type('óculos{enter}')

    cy.wait('@buscaProduto', { timeout: 20000 }).then((interception) => {
      expect(interception.request.url).to.include('search')
    })
  })

  it('deve validar carregamento da página após busca', () => {
    cy.visit('https://shopee.com.br/')
    cy.esperar(3000)
    cy.fecharPopupSeExistir()

    cy.get('input[placeholder*="Buscar"]', { timeout: 15000 })
      .should('be.visible')
      .type('óculos{enter}')

    cy.url({ timeout: 15000 }).should('include', '/search')
  })
})