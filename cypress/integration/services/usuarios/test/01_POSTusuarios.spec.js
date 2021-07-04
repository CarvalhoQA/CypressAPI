import * as POusuarios from '../request/POSTusuarios.request'

context('POST Usuários', () => {
  it('Adicionar Usuários', () => {
    POusuarios.CadastrarUsuario().should((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.message).to.eq("Cadastro realizado com sucesso");
    })
  });
});
