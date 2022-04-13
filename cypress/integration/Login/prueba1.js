/// <reference types="cypress" />

it ("pagina principal", () => {
    cy.visit("http://todomvc-app-for-testing.surge.sh/")
    cy.get('.new-todo').type("1").type("{enter}")
        cy.get(':nth-child(3) > a').click()
    
})


