// verbo/metodo - endpoint . motivo (request) . extensao
/// <reference types="cypress" />


function ListarCarrinhos() {
    // cy.request - client http
    return cy.request({
      method: 'GET',
      url: 'carrinhos?quantidadeTotal=16',
      failOnStatusCode: false,
    })
  }
  
  export { ListarCarrinhos };