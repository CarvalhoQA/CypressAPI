import * as PUusuarios from '../request/PUTusuarios.request';
import * as GEusuarios from '../request/GETusuarios.request';


describe('PUT Usuários', () => {
  it('Alterar Usuários', () => {
    GEusuarios.ListarUsuarios().then((resListarUsuarios) => {
      PUusuarios.AlterarUsuario(resListarUsuarios.body.usuarios[0]._id).should((resAlterarUsuario) => {
        expect(resAlterarUsuario.status).to.eq(200);
        expect(resAlterarUsuario.body.message).to.eq('Registro alterado com sucesso');
      })
    })
  });
});
