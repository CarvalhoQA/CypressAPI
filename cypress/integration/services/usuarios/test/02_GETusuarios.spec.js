import * as GEusuarios from '../request/GETusuarios.request';

describe('GET Usuários', () => {
  it('Listar Usuários', () => {
    GEusuarios.ListarUsuarios().should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.usuarios[0].nome).is.not.null;
      expect(response.body.usuarios[0].email).is.not.null;
      expect(response.body.usuarios[0].password).is.not.null;
      expect(response.body.usuarios[0].administrador).is.not.null;
      expect(response.body.usuarios[0]._id).is.not.null;
    })
  });
});