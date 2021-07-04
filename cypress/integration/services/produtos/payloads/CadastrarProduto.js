const faker = require('faker')

export const cadastrarproduto ={

"nome": faker.name.findName(),
"preco": faker.commerce.price(),
"descricao": "Mouse bom",
"quantidade": "5",
}