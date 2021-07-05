# CypressAPI

**Instalação e uso da arquitetura**

Instale o Node.js;
Baixe este repositório ou faça um git clone;
Abra o diretório do projeto e execute o comando:
npm install
Para abrir a interface de execução do Cypress, execute no diretório do projeto:
npx cypress open
Próximo passo é configurar/instalar a API ServeRest na sua máquina;

**Instalação API ServeRest**
A nossa API alvo deste projeto é a ServeRest localmente, para utiliza-la execute a aplicação via npm ou via Docker.
Para mais detalhes visite o repositório oficial do ServeRest(https://github.com/serverest/serverest).

**Arquitetura**

Testes de API
1 - Realizar testes no endpoint usuários (/usuarios)
..//cypress/integration/services/usuarios
payloads -> Contém os Bodys da das Requisições
request -> Contém a contrução dos metodos GET,POST,PUT,DELETE
test -> Contém os aquivos executaveis dos testes .spec.js

2 - Realizar testes de contrato para o verbo POST do endpoint de Produtos (/produtos).
..//cypress/integration/services/produtos
payloads -> Contém os Bodys da das Requisições
request -> Contém a contrução dos metodos GET,POST,PUT,DELETE
test -> Contém os aquivos executaveis dos testes .spec.js

3 – Realizar a pesquisa de carrinhos que tenha produtos com quantidade total superior a 5 (resultado deve retornar no mínimo 3 carrinhos).
..//cypress/integration/services/carrinhos
payloads -> Contém os Bodys da das Requisições
request -> Contém a contrução dos metodos GET,POST,PUT,DELETE
test -> Contém os aquivos executaveis dos testes .spec.js

Testes Front End (Page Objects)
- Login com usuário bloqueado, e validar a mensagem de bloqueio exibida;
- Realizar uma compra completa com mais de um produto no carrinho;
- Adicionar todos os produtos ao carrinho e validar o valor total da compra a ser pago.

..//cypress/integration/frontend
swaglabs.spec.js -> Contém os aquivos executavel dos testes

..//cypress//support//pages -> Contém as páginas dos testes com seus index.js e Elements.js


