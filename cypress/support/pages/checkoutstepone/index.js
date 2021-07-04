const el = require ('./elements').Elements;
class Checkoutstepone {
    Informardadoscheckout(){
        cy.location('pathname').should('eq', '/checkout-step-one.html');
        cy.get(el.firstName).type('UsuarioUm');
        cy.get(el.lastName).type('De Teste');
        cy.get(el.postalcode).type('6546556');  
    }

    Acessarproximopasso(){
        cy.get(el.Confinfocheckout).click();
    }
}

export default new Checkoutstepone();