
const el = require ('./elements').Elements;
class Login {
    AcessarLogin(){
        cy.visit('https://www.saucedemo.com')
    }

    PreencherLoginUsuValido(){
        cy.get(el.username).type('standard_user');
        cy.get(el.password).type('secret_sauce');
        cy.get(el.loginbutton).click();

    }

    PreencherLoginUsuBlock(){
        cy.get(el.username).type('locked_out_user');
        cy.get(el.password).type('secret_sauce');
        cy.get(el.loginbutton).click();

    }

    ValidarLoginUsuBlock(){
        cy.get(el.msgusublock)
        .should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
    }

}

export default new Login();