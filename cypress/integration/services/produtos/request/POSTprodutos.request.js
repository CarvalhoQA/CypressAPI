/// <reference types="cypress" />

import {cadastrarproduto } from '../payloads/CadastrarProduto';

function CadastroComSucesso(token){
  return cy.request({
    method: 'POST',
    url: 'produtos',
    headers: {
      'accept':'application/json',
      'Authorization':`${token}`,
      'administrador': 'true',
      'Content-Type': 'application/json',  
    },
    failOnStatusCode: false,
    body: cadastrarproduto
  })
}

export {CadastroComSucesso };