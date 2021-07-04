// verbo/metodo - endpoint . motivo (request) . extensao
/// <reference types="cypress" />

function ListarProdutos() {
    // cy.request - client http
    return cy.request({
      method: 'GET',
      url: 'produtos',
      failOnStatusCode: false,
    })
  }
  
  export { ListarProdutos };