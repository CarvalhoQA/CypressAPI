const faker = require('faker')

export const payloadcadastrarusuario ={

    "nome": faker.name.findName(),
    "email": faker.internet.email(),
    "password": "teste",
    "administrador": "true",
}

