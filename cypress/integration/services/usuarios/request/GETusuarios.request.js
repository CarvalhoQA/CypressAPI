// verbo/metodo - endpoint . motivo (request) . extensao
/// <reference types="cypress" />

function ListarUsuarios() {
    // cy.request - client http
    return cy.request({
      method: 'GET',
      url: 'usuarios',
      failOnStatusCode: false,
    })
  }
  
  export { ListarUsuarios };