const el = require ('./elements').Elements;
class Cart {
        ConfirmarItensCarrinho(){
        cy.location('pathname').should('eq', '/cart.html');
        cy.get(el.checkout).click();
    }
}

export default new Cart();