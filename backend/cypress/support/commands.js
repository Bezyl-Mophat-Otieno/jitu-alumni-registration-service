// ***********************************************
import { Cypress } from '../../node_modules/cypress/types/cypress-npm-api.d';
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("register", (username, email, password) => {
    cy.get("#fname").type(username);
    cy.get("#lname").type(email);
    cy.get("#email").type(password);
    cy.get("#cohorTitle").type(password);
    cy.get("#cohortNumber").type(cohortNumber)
    cy.get("#register").click()
;
})
