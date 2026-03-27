describe('Teste de e-commerce - Automation Practice', () => {

  it('Deve acessar o login preenchendo os campos email e password', () => {
    cy.visit('https://secure1.inmotionhosting.com/index/login.php');

    // Clique em Login
    cy.get('[name="username"]')
    .click()
    .should('be.visible')
    .type('test@example.com');

    // Preenche o campo de password
    cy.get('[name="password"]')
    .click()
    .should('be.visible')
    .type('password123');

    // Clica no botão de login
    cy.get('#login-submit')
    .should('be.visible')
    .click();



  });

});