/// <reference types="cypress" />

function ApagarCarrinhos(token) {
    return cy.request({
      method: 'DELETE',
      url: `carrinhos/cancelar-compra`,
      headers: {
        'accept':'application/json',
        'Authorization':`${token}`,
        'administrador': 'true',
        'Content-Type': 'application/json', 
      },
      failOnStatusCode: false
    })
  }
  
  export { ApagarCarrinhos };