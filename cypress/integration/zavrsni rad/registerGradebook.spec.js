import { EMAIL } from '../../fixtures/constants'
import { regPage } from '../../page_object/registerGradebook.page'
describe('REGISTER', function() {
    
    beforeEach(() => {
        cy.visit("/")
        regPage.register.click()
    })

    
    it('TC 01 Checking REGISTER URL', function() {
        
        cy.url().should('include', '/register' )
    })
    it('TC 02 REGISTER', function() {
        regPage.ime.type(EMAIL.IME)
        regPage.prezime.type(EMAIL.PREZIME)
        regPage.password.type(EMAIL.PASSWORD)
        regPage.passConfirm.type(EMAIL.PASSWORD)
        regPage.email.type(EMAIL.EXISTING)
        //regPage.checkbox.click()   VEC OZNACENO
        regPage.submit.click()
        cy.get('.nav-link').should('contain', 'Sign out')
    })

})