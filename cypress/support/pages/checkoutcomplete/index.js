const el = require ('./elements').Elements;
class Checkoutcomplete {
    finalizarprocesso(){
        cy.location('pathname').should('eq', '/checkout-complete.html');
        cy.get(el.finalizar).click();
   }
}
export default new Checkoutcomplete();