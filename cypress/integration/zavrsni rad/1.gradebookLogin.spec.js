import { EMAIL } from '../../fixtures/constants'
import { logPage } from '../../page_object/loginGradebook.page'
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
        cy.get('.nav-link').should('contain', 'Sign out')
    })
    it('TC 03 Negative case with wrong email', function() {
        logPage.login('gg', EMAIL.PASSWORD)
        cy.get('.nav-link').contains('Sign out').should('not.exist')
        //ne pojavljuje se validaciona poruka, ali ne moze se ulogovati sa pogresnim mejlom
    })
    it('TC 04 Negative case with wrong password', function() {
        logPage.login(EMAIL.EXISTING, 'gg')
        cy.get('.nav-link').contains('Sign out').should('not.exist')
        //ne pojavljuje se validaciona poruka, ali ne moze se ulogovati sa pogresnom sifrom
    })
})