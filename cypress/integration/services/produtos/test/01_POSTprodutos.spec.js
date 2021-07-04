import * as POlogin from '../request/POSTlogin.request';
import * as POprodutos from '../request/POSTprodutos.request';


context('Testes de contrato para o verbo POST', () => {
  it('Cadastro realizado com sucesso 201', () => {
    POlogin.login().then((reslogin) => {
      POprodutos.CadastroComSucesso(reslogin.body.authorization).should((resCadastroComSucesso) => {
        expect(resCadastroComSucesso.status).to.eq(201);
        expect(resCadastroComSucesso.body.message).to.eq("Cadastro realizado com sucesso");
      });
    });
  });
it('Já existe produto com esse nome 400', () => {
  POlogin.login().then((reslogin) => {
    POprodutos.CadastroComSucesso(reslogin.body.authorization).should((resCadastroComSucesso) => {
      expect(resCadastroComSucesso.status).to.eq(400);
      expect(resCadastroComSucesso.body.message).to.eq("Já existe produto com esse nome");
      });
    });
  });
    it('Token ausente, inválido ou expirado 401', () => {
        POprodutos.CadastroComSucesso().should((resCadastroComSucesso) => {
          expect(resCadastroComSucesso.status).to.eq(401);
          expect(resCadastroComSucesso.body.message).to.eq("Token de acesso ausente, inválido, expirado ou usuário do token não existe mais");
        });
      });
      it('Rota exclusiva para administradores 403', () => {
        POlogin.loginADMFalse().then((resloginADMFalse) => {
          POprodutos.CadastroComSucesso(resloginADMFalse.body.authorization).should((resCadastroComSucesso) => {
            expect(resCadastroComSucesso.status).to.eq(403);
            expect(resCadastroComSucesso.body.message).to.eq("Rota exclusiva para administradores");
          });
        });
      });
    });
  


