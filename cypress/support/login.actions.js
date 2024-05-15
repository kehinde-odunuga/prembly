const password = Cypress.env('PASSWORD')

Cypress.Commands.add('Login', (username) => {
    cy.fixture('elements').then((el) => {
        cy.get(el.usernameField).should('be.visible').type(username)
        cy.get(el.passwordField).should('be.visible').type(password)
        cy.get(el.loginButton).should('be.visible').click();
    })
})