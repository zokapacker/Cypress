import { EMAIL } from '../../fixtures/constants'
import { authPage } from '../../page_object/login.page'
import { regPage } from '../../page_object/register.page'

describe('My First Test', function() {
    
    beforeEach(() => {
        cy.visit("/")
        cy.contains('Login').click()
    })

    
    it('Checking Login on gallery.app', function() {
        
        cy.url().should('include', '/login' )
    })
    it('visit login', function() {
        
        authPage.login(EMAIL.EXISTING, EMAIL.PASSWORD)
        // PRE OVOGA BILO 
        // authPage.email.type(EMAIL.EXISTING)
        // authPage.password.type(EMAIL.PASSWORD)
        // authPage.submit.click()
      
    })
    it('wrong password', function() {
        
        authPage.login(EMAIL.EXISTING, 'mohandas')
        authPage.alert.should('have.text', 'Bad Credentials')
        // alert ubacen u clasu na login.page.js
        // get alert() {
        // return cy.get('.alert-danger')
    })
    it('wrong email', function() {
        
        authPage.email.type('zokapacker@gmail.comm')
        authPage.password.type('mohandas1')
        authPage.submit.click()
        authPage.alert.should('have.text', 'Bad Credentials')
    })
    it('wrong email and password', function() {
        
        authPage.email.type('zeee@gmail.com')
        authPage.password.type('m')
        authPage.submit.click()
        authPage.alert.should('have.text', 'Bad Credentials')
    })
})
