import {payloadalterarusuario } from '../payloads/AlteraUsuario';

function AlterarUsuario(id) {
  return cy.request({
    method: 'PUT',
    url: `usuarios/${id}`,
    headers: {
      'Content-Type': 'application/json',  
    },
    failOnStatusCode: false,
    body: payloadalterarusuario
  })
}

export { AlterarUsuario };