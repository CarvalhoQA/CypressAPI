import * as POlogin from '../request/POSTlogin.request';
import * as POcarrinhos from '../request/POSTcarrinhos.request';
import * as GEcarrinhos from '../request/GETcarrinhos.request';
import * as DEcarrinhos from '../request/DELETEcarrinhos.request';


context('Testes de contrato para o verbo POST', () => {
  it('Cadastro realizado com sucesso 201', () => {
    POlogin.loginusu1().then((resloginusu1) => {
    POcarrinhos.CadastroComSucesso(resloginusu1.body.authorization).should((resCadastroComSucesso) => {
    expect(resCadastroComSucesso.status).to.eq(201);
    expect(resCadastroComSucesso.body.message).to.eq("Cadastro realizado com sucesso");

    POlogin.loginusu2().then((resloginusu2) => {
    POcarrinhos.CadastroComSucesso(resloginusu2.body.authorization).should((resCadastroComSucesso) => {
    expect(resCadastroComSucesso.status).to.eq(201);
    expect(resCadastroComSucesso.body.message).to.eq("Cadastro realizado com sucesso");

    POlogin.loginusu3().then((resloginusu3) => {
    POcarrinhos.CadastroComSucesso(resloginusu3.body.authorization).should((resCadastroComSucesso) => {
    expect(resCadastroComSucesso.status).to.eq(201);
    expect(resCadastroComSucesso.body.message).to.eq("Cadastro realizado com sucesso");

    POlogin.loginusu4().then((resloginusu4) => {
    POcarrinhos.CadastroComSucesso(resloginusu4.body.authorization).should((resCadastroComSucesso) => {
    expect(resCadastroComSucesso.status).to.eq(201);
    expect(resCadastroComSucesso.body.message).to.eq("Cadastro realizado com sucesso");/** */
                   
    GEcarrinhos.ListarCarrinhos().should((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.quantidade).to.eq(4);

    POlogin.loginusu1().then((resloginusu1) => {
    DEcarrinhos.ApagarCarrinhos(resloginusu1.body.authorization).should((resCadastroComSucesso) => {
    expect(resCadastroComSucesso.status).to.eq(200);
    expect(resCadastroComSucesso.body.message).to.eq("Registro excluído com sucesso. Estoque dos produtos reabastecido");
  
    POlogin.loginusu2().then((resloginusu2) => {
    DEcarrinhos.ApagarCarrinhos(resloginusu2.body.authorization).should((resCadastroComSucesso) => {
    expect(resCadastroComSucesso.status).to.eq(200);
    expect(resCadastroComSucesso.body.message).to.eq("Registro excluído com sucesso. Estoque dos produtos reabastecido");
  
    POlogin.loginusu3().then((resloginusu3) => {
    DEcarrinhos.ApagarCarrinhos(resloginusu3.body.authorization).should((resCadastroComSucesso) => {
    expect(resCadastroComSucesso.status).to.eq(200);
    expect(resCadastroComSucesso.body.message).to.eq("Registro excluído com sucesso. Estoque dos produtos reabastecido");
  
    POlogin.loginusu4().then((resloginusu4) => {
    DEcarrinhos.ApagarCarrinhos(resloginusu4.body.authorization).should((resCadastroComSucesso) => {
    expect(resCadastroComSucesso.status).to.eq(200);
    expect(resCadastroComSucesso.body.message).to.eq("Registro excluído com sucesso. Estoque dos produtos reabastecido");
});
});
});
});
});
});
});
});
});
});
});
});
});
});
});
});
});
});
});





