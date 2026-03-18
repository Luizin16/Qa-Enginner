describe('Fluxo de cadastro SHOPEE', () => {

  it('Deve clicar em cadastrar, e adicionar o email', () => {

    // Acessa página de login/cadastro
    cy.visit('https://shopee.com.br/buyer/login')

    // Preenche o campo de email
    cy.get('[name="loginKey"]',{ timeout: 10000})
      .should('be.visible')
      .type('exemplo@email.com')

     // Preenche o campo de senha
     // Sua conta e/ou senha estão incorretas, tente novamente
     cy.get('[name="password"]',{ timeout: 10000})
      .should('be.visible')
      .type('Senha123@')
      
     // Clicar em Entrar
     cy.get('form > .b5aVaf', { timeout: 10000})
      .should('be.visible')
      .click()
      
     // Valida clicar em Continuar
     cy.get('.dn8aVs > .Q4KP5g', { timeout: 10000})
      .click()


  })
})