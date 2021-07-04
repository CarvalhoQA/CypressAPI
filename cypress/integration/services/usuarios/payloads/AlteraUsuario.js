const faker = require('faker')

export const payloadalterarusuario ={

    "nome": faker.name.findName(),
    "email": faker.internet.email(),
    "password": "teste",
    "administrador": "true",
}