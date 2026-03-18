import ShopeePage from '../pages/ShopeePage'

describe('Busca de produtos na Shopee', () => {
  beforeEach(() => {
    ShopeePage.acessarHome()
  })

  it('deve buscar por produto com sucesso', () => {
    cy.fixture('search').then((dados) => {
      ShopeePage.preencherBusca(dados.produtoValido)
      ShopeePage.validarResultadoBusca()
    })
  })

  it('deve validar que a busca foi executada para o termo informado', () => {
    cy.fixture('search').then((dados) => {
      ShopeePage.preencherBusca(dados.produtoValido)
      ShopeePage.validarResultadoBusca()
      ShopeePage.validarTextoBuscado('Óculos')
    })
  })

  it('deve realizar busca com termo inexistente sem quebrar a aplicação', () => {
    cy.fixture('search').then((dados) => {
      ShopeePage.preencherBusca(dados.produtoInvalido)
      cy.url({ timeout: 15000 }).should('include', '/search')
    })
  })
})