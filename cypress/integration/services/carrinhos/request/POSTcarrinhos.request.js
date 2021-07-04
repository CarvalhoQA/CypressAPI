/// <reference types="cypress" />

import {cadastrarcarrinho } from '../payloads/CadastrarCarrinho';

function CadastroComSucesso(token){
  return cy.request({
    method: 'POST',
    url: 'carrinhos',
    headers: {
      'accept':'application/json',
      'Authorization':`${token}`,
      'administrador': 'true',
      'Content-Type': 'application/json',  
    },
    failOnStatusCode: false,
    body: cadastrarcarrinho
  })
}

export {CadastroComSucesso };