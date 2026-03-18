describe('Testes de API', () => {
  it('deve consultar a API pública de usuários com sucesso', () => {
    cy.request({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/users'
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.be.an('array')
      expect(response.body.length).to.be.greaterThan(0)
      expect(response.body[0]).to.have.property('name')
      expect(response.body[0]).to.have.property('email')
    })
  })

  it('deve consultar um usuário específico', () => {
    cy.request({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/users/1'
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('id', 1)
      expect(response.body).to.have.property('username')
    })
  })

  it('deve criar um post com sucesso', () => {
    cy.request({
      method: 'POST',
      url: 'https://jsonplaceholder.typicode.com/posts',
      body: {
        title: 'Projeto QA',
        body: 'Teste automatizado de API com Cypress',
        userId: 1
      }
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body).to.have.property('title', 'Projeto QA')
      expect(response.body).to.have.property('userId', 1)
    })
  })
})