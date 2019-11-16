import { EMAIL } from '../../fixtures/constants'
import AuthPage, { authPage } from '../../page_object/login.page'

describe('My First Test', function() {
    //it('Does not do much!', function() {
       // expect(true).to.equal(true)
    //})
    //it('Visits the Kitchen Sink', function() {
        //cy.visit('https://example.cypress.io')
       // cy.contains('type').click()
        //cy.url().should('include', '/commands/actions')
    //})
    beforeEach(() => {
        cy.visit("/")
        cy.contains('Login').click()
    })

    it('Checking register on gallery.app', function() {
        cy.visit("/")
        cy.contains('Register').click()
        cy.url().should('include', '/register' )
    })
    it('Checking Login on gallery.app', function() {
        
        cy.url().should('include', '/login' )
    })
    it('visit login', function() {
        
        authPage.email.type(EMAIL.EXISTING)
        authPage.password.type(EMAIL.PASSWORD)
        authPage.submit.click()
      /* export default class AuthPage {
           get email() {
                return cy.get('input[id="email"]')
            }
            get password() {
                return cy.get('input[id="password"]')
            }
            get submit() { 
                return cy.get('button[type=submit]')
            }
        
        }
        
        export const authPage = new AuthPage() */
    })
    it('wrong password', function() {
        
        authPage.email.type(EMAIL.EXISTING)
        authPage.password.type('mohandas')
        authPage.submit.click()
        cy.get('.alert-danger').should('have.text', 'Bad Credentials')
    })
    it('wrong email', function() {
        
        authPage.email.type('zokapacker@gmail.co')
        authPage.password.type('mohandas')
        authPage.submit.click()
        cy.get('.alert-danger').should('have.text', 'Bad Credentials')
    })
    it('wrong email and password', function() {
        
        authPage.email.type('zeee@gmail.com')
        authPage.password.type('m')
        authPage.submit.click()
        cy.get('.alert-danger').should('have.text', 'Bad Credentials')
    })

    
})

