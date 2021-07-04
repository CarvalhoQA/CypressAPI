/// <reference types="cypress" />

import {loginadmfalse, loginadmtrue } from '../payloads/Login';

function login() {
  return cy.request({
    method: 'POST',
    url: 'login',
    failOnStatusCode: false,
    body: loginadmtrue
  })
}

export { login };

function loginADMFalse() {
  return cy.request({
    method: 'POST',
    url: 'login',
    failOnStatusCode: false,
    body: loginadmfalse
  })
}

export { loginADMFalse };