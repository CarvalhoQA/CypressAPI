//Importar as pages criadas para a execução dos testes; 
import Login from 'D:/Testes/cypress/support/pages/login';
import Inventory from 'D:/Testes/cypress/support/pages/inventory';
import Cart from 'D:/Testes/cypress/support/pages/cart';
import Checkoutstepone from '../../support/pages/checkoutstepone';
import Checkoutsteptwo from '../../support/pages/checkoutsteptwo';
import Checkoutcomplete from '../../support/pages/checkoutcomplete';

//Classe de teste onde ralizamos as chamadas dos metodos criados nas pages;
describe('Automação FrontEnd:', () => {
    it('Login com usuário bloqueado, e validar a mensagem de bloqueio exibida;', () => {
        Login.AcessarLogin();
        Login.PreencherLoginUsuBlock();
        Login.ValidarLoginUsuBlock();
    });


    it('Realizar uma compra completa com mais de um produto no carrinho;', () => {
        Login.AcessarLogin();
        Login.PreencherLoginUsuValido();

        Inventory.AdicionarItensCarrinho();
        Inventory.AcessarCarrinho();

        Cart.ConfirmarItensCarrinho();

        Checkoutstepone.Informardadoscheckout();
        Checkoutstepone.Acessarproximopasso();

        Checkoutsteptwo.Validarvalortotal();
        Checkoutsteptwo.finalizarcompra();
        
        Checkoutcomplete.finalizarprocesso();
    });

    it('Adicionar todos os produtos ao carrinho e validar o valor total da compra a ser pago.', () => {
        Login.AcessarLogin();
        Login.PreencherLoginUsuValido();

        Inventory.AdicionarTodosItensCarrinho();
        Inventory.AcessarCarrinho();

        Cart.ConfirmarItensCarrinho();

        Checkoutstepone.Informardadoscheckout();
        Checkoutstepone.Acessarproximopasso();

        Checkoutsteptwo.ValidarvalortotalTodosItens();
        Checkoutsteptwo.finalizarcompra();
        
        Checkoutcomplete.finalizarprocesso();
    });

});
    

