/// <reference types="cypress" />

import {login1, login2, login3, login4 } from '../payloads/Login';

function loginusu1() {
  return cy.request({
    method: 'POST',
    url: 'login',
    failOnStatusCode: false,
    body: login1
  })
}
export { loginusu1 };

function loginusu2() {
  return cy.request({
    method: 'POST',
    url: 'login',
    failOnStatusCode: false,
    body: login2
  })
}
export { loginusu2 };

function loginusu3() {
  return cy.request({
    method: 'POST',
    url: 'login',
    failOnStatusCode: false,
    body: login3
  })
}
export { loginusu3 };

function loginusu4() {
  return cy.request({
    method: 'POST',
    url: 'login',
    failOnStatusCode: false,
    body: login4
  })
}
export { loginusu4 };