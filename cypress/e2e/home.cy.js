import ShopeePage from '../pages/ShopeePage'

describe('Home Shopee', () => {
  beforeEach(() => {
    ShopeePage.acessarHome()
  })

  it('deve carregar a home com logo visível', () => {
    ShopeePage.validarHomeCarregada()
    ShopeePage.validarLogoVisivel()
  })

  it('deve exibir o campo de busca', () => {
    ShopeePage.validarCampoBuscaVisivel()
  })

  it('deve exibir acesso para login', () => {
    cy.contains('Entre', { timeout: 15000 }).should('be.visible')
  })
})