/// <reference types="cypress" />

import {payloadcadastrarusuario } from '../payloads/CadastraUsuario';

function CadastrarUsuario() {
  return cy.request({
    method: 'POST',
    url: 'usuarios',
    failOnStatusCode: false,
    body:payloadcadastrarusuario
  })
}

export { CadastrarUsuario };