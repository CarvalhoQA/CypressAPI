const el = require ('./elements').Elements;
class Inventory {
    AdicionarItensCarrinho(){
        cy.location('pathname').should('eq', '/inventory.html');
        cy.get(el.addtocart_iten1).click();
        cy.get(el.addtocart_iten2).click();
        cy.get(el.addtocart_iten3).click();
        cy.get(el.addtocart_iten4).click();
    }
    AdicionarTodosItensCarrinho(){
        cy.location('pathname').should('eq', '/inventory.html');
        cy.get(el.addtocart_iten1).click();
        cy.get(el.addtocart_iten2).click();
        cy.get(el.addtocart_iten3).click();
        cy.get(el.addtocart_iten4).click();
        cy.get(el.addtocart_iten5).click();
        cy.get(el.addtocart_iten6).click();
    }
    
    AcessarCarrinho(){
        cy.get(el.gotocart).click();
    }
}

export default new Inventory();