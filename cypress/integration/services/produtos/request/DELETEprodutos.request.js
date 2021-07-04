/// <reference types="cypress" />

function ApagarProdutos(token,id_produto) {
    return cy.request({
      method: 'DELETE',
      url: `produtos/${id_produto}`,
      headers: {
        'accept':'application/json',
        'Authorization':`${token}`,
        'Content-Type': 'application/json',
      },
      failOnStatusCode: false
    })
  }
  
  export { ApagarProdutos };