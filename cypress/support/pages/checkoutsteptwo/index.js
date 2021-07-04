const el = require ('./elements').Elements;
class Checkoutsteptwo {
    Validarvalortotal(){
        cy.location('pathname').should('eq', '/checkout-step-two.html');
        cy.contains('114.44')
        .should('have.text', 'Total: $114.44');
    }

    ValidarvalortotalTodosItens(){
        cy.location('pathname').should('eq', '/checkout-step-two.html');
        cy.contains('140.34')
        .should('have.text', 'Total: $140.34');
    }

    finalizarcompra(){
        cy.get(el.finalizarcompra).click();
    }
}

export default new Checkoutsteptwo();