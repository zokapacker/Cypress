import { EMAIL } from '../../fixtures/constants'
import { logPage } from '../../page_object/gradebookLogin.page'
describe('LOGIN', function() {
    
    beforeEach(() => {
        cy.visit("/")
        cy.contains('Sign in').click()
    })

    
    it('TC 01 Checking Login URL on gradebook', function() {
        
        cy.url().should('include', '/login' )
    })
    it('TC 02 Login', function() {
        
        logPage.login(EMAIL.EXISTING, EMAIL.PASSWORD)
        // PRE OVOGA BILO 
        // logPage.email.type(EMAIL.EXISTING)
        // logPage.password.type(EMAIL.PASSWORD)
        // logPage.submit.click()
      
    })
})