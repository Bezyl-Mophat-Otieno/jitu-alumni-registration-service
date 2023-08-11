///<reference types="cypress" />
describe('Testing The Register Page',() => {
    beforeEach(()=>{
        cy.visit('/register/register.html')
    })
    it('simulate the registration of the Member', () => {
        cy.get('#fname').type('bezyl')
        cy.get('#lname').type('otieno')
        cy.get('#email').type('bezyl.otieno@thejitu.com')
        cy.get('#cohortTitle').type('QA/QE')
        cy.get('#cohortNumber').type('17')
        cy.get('#register').click()
    })
    after(()=>{
        cy.get('.alerts').should('contain','Member Registered Successfully')
    }
  )})
