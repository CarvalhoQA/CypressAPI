/// <reference types="cypress" />

function ApagarUsuarios(id_usuario) {
    return cy.request({
      method: 'DELETE',
      url: `usuarios/${id_usuario}`,
      failOnStatusCode: false
    })
  }
  
  export { ApagarUsuarios };