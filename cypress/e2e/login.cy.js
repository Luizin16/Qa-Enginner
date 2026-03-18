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

import ShopeePage from '../pages/ShopeePage'

describe('Login Shopee', () => {
  beforeEach(() => {
    ShopeePage.acessarLogin()
  })

  it('deve carregar a tela de login', () => {
    ShopeePage.validarTelaLogin()
    ShopeePage.validarCampoEmailLogin()
    ShopeePage.validarCampoSenhaLogin()
  })

  it('deve exibir link de esqueci minha senha', () => {
    ShopeePage.validarLinkEsqueciSenha()
  })

  it('deve exibir opção de login com Google', () => {
    ShopeePage.validarOpcaoGoogle()
  })

  it('deve permitir preencher email e senha', () => {
    cy.fixture('user').then((user) => {
      ShopeePage.preencherEmailLogin(user.email)
      ShopeePage.preencherSenhaLogin(user.senha)
    })
  })

  it('deve tentar login com dados fictícios', () => {
    cy.fixture('user').then((user) => {
      ShopeePage.preencherEmailLogin(user.email)
      ShopeePage.preencherSenhaLogin(user.senha)
      cy.esperar(1500)
      ShopeePage.clicarBotaoEntrar()

      /*
        Resultado esperado:
        Como o teste utiliza credenciais fictícias,
        o sistema pode retornar mensagem de erro,
        impedir autenticação ou solicitar verificação adicional.
        O objetivo aqui é validar o comportamento da tela
        e a estabilidade do fluxo.
      */
    })
  })
})