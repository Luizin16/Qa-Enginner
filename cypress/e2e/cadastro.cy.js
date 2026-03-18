describe('Fluxo de cadastro SHOPEE', () => {

  it('Deve clicar em cadastrar, e adicionar o email', () => {

    // Acessa página de login/cadastro
    cy.visit('https://shopee.com.br/buyer/login')

    // Clica em cadastrar
    cy.get ('.JOxeOr', { timeout: 20000})
      .should('be.visible')
      .click()

    // Preenche o campo de email
    cy.get('[name="phone"]',{ timeout: 20000})
      .should('be.visible')
      .type('(11) 99999-9999')

    // Clica em Proximo
    cy.get('form > .b5aVaf', { timeout: 20000})
      .should('be.visible')
      .click()

    // Valida novo número de telefone
    // Deve informar um erro de número de telefone inválido, pois o número é fictício e não possui cadastro na plataforma, o que é esperado para o teste de cadastro.
    cy.get('.nGSd4k', { timeout: 20000})
       
   
  })

})