describe('Fluxo de cadastro SHOPEE', () => {

  it('Deve pesquisar por um produto válido', () => {
    cy.visit('https://shopee.com.br')

    // Acessa o campo de pesquisa
    cy.get('input[placeholder="Pesquisar produtos"]').type('roupa')

    // Clica no botão de pesquisa
    cy.get('button[type="submit"]').click()

    // Verifica se os resultados apareceram
    cy.get('.product-list').should('be.visible')
  })

  it('Deve retornar erro ao pesquisar um produto inválido', () => {
    cy.visit('https://shopee.com.br')

    // Acessa o campo de pesquisa
    cy.get('input[placeholder="Pesquisar produtos"]').type('roopa')

    // Clica no botão de pesquisa
    cy.get('button[type="submit"]').click()

    // Verifica se nenhum produto foi encontrado
    cy.get('.empty-search-result').should('be.visible')
  })
})