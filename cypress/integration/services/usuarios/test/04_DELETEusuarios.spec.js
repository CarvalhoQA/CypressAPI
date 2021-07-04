import * as DEusuarios from '../request/DELETEusuarios.request';
import * as POusuarios from '../request/POSTusuarios.request';

describe('DELETE Usuarios', () => {
  it('Apagar Usuários', () => {
    POusuarios.CadastrarUsuario().then((resCadastrarUsuario) => {
      DEusuarios.ApagarUsuarios(resCadastrarUsuario.body._id).should((resApagarUsuarios) => {
      expect(resApagarUsuarios.body.message).to.eq("Registro excluído com sucesso")
      })
    })
  });
});
