///<reference types="cypress" />
describe('Testing The Register Page',() => {
    it('should visit the register page', () => {
        cy.visit('/register/register.html')
        cy.get('#fname').type('test')
        cy.get('#lname').type('test')
        cy.get('#email').type('test')
        cy.get('#cohortTitle').type('test')
        cy.get('#cohortNumber').type('test')
        cy.get('#register')
    })
  });
