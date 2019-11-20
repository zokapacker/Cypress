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
        
        authPage.email.type('zokapacker@gmail.co')
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
    it('Checking register on gallery.app', function() {
        cy.visit("/")
        cy.contains('Register').click()
        cy.url().should('include', '/register' )
    })
    it('enter a valid information skr', function() {
        cy.visit("/")
        cy.contains('Register').click()
        regPage.register(EMAIL.IME, EMAIL.PREZIME)
        authPage.email.type(EMAIL.EXISTING) //napraviti novu mejl adresu
        authPage.password.type(EMAIL.PASSWORD)
        regPage.passConfirm.type(EMAIL.PASSWORD)
        regPage.checkbox.click()
        authPage.submit.click()
        authPage.alert.should('have.text', 'The email has already been taken.')
    })
    it('enter a valid information', function() {
        cy.visit("/")
        cy.contains('Register').click()
        regPage.register(EMAIL.IME, EMAIL.PREZIME)
        authPage.email.type(EMAIL.EXISTING) //napraviti novu mejl adresu
        authPage.password.type(EMAIL.PASSWORD)
        regPage.passConfirm.type(EMAIL.PASSWORD)
        regPage.checkbox.click()
        authPage.submit.click()
        authPage.alert.should('have.text', 'The email has already been taken.')//bez ovog ako je napravljen novi mejl
    /*cy.get('input[id="first-name"]').type('Pera')
        cy.get('input[id="last-name"]').type('Lenger')
        cy.get('input[id="email"]').type('zokapacker@gmail.com') //napraviti novu mejl adresu
        
        cy.get('input[id="password"]').type('mohandas1')
        cy.get('input[id="password-confirmation"]').type('mohandas1')
        cy.get('input[type=checkbox]').click()
        cy.get('button[type=submit]').click()
        cy.get('.alert-danger').should('have.text', 'The email has already been taken.')*/
    })

    it('enter already existing email', function() {
        cy.visit("/")
        cy.contains('Register').click()
        regPage.register(EMAIL.IME, EMAIL.PREZIME)
        authPage.email.type(EMAIL.EXISTING) //napraviti novu mejl adresu
        authPage.password.type(EMAIL.PASSWORD)
        regPage.passConfirm.type(EMAIL.PASSWORD)
        regPage.checkbox.click()
        authPage.submit.click()
        authPage.alert.should('have.text', 'The email has already been taken.')
        
    })

    it('enter a valid information without checkbox', function() {
        cy.visit("/")
        cy.contains('Register').click()
        regPage.register(EMAIL.IME, EMAIL.PREZIME)
        authPage.email.type(EMAIL.EXISTING) //napraviti novu mejl adresu
        authPage.password.type(EMAIL.PASSWORD)
        regPage.passConfirm.type(EMAIL.PASSWORD)
        
        authPage.submit.click()
        authPage.alert.should('have.text', 'The email has already been taken.The terms and conditions must be accepted.')
        
    })
    it('enter a valid information without checkbox', function() {
        cy.visit("/")
        cy.contains('Register').click()
        cy.get('input[id="first-name"]').type('Pera')
        cy.get('input[id="last-name"]').type('Lenger')
        cy.get('input[id="email"]').type('zokapacker@gmail.com')// napraviti novu mejl adresu
        cy.get('input[id="password"]').type('mohandas1')
        cy.get('input[id="password-confirmation"]').type('mohandas1')
        
        cy.get('button[type=submit]').click()
        cy.get('.alert-danger').should('have.text', 'The email has already been taken.The terms and conditions must be accepted.')

    it('enter a valid information with wrong confirmed password', function() {
        cy.visit("/")
        cy.contains('Register').click()
        regPage.register(EMAIL.IME, EMAIL.PREZIME)
        authPage.email.type(EMAIL.EXISTING) //napraviti novu mejl adresu
        authPage.password.type(EMAIL.PASSWORD)
        regPage.passConfirm.type('mohandas')
        regPage.checkbox.click()
        authPage.submit.click()
        authPage.alert.should('have.text', 'The email has already been taken.The password confirmation does not match.')
        
    })
    it('enter a valid information with wrong password', function() {
        cy.visit("/")
        cy.contains('Register').click()
        regPage.register(EMAIL.IME, EMAIL.PREZIME)
        authPage.email.type(EMAIL.EXISTING) //napraviti novu mejl adresu
        authPage.password.type('mohandas11')
        regPage.passConfirm.type(EMAIL.PASSWORD)
        regPage.checkbox.click()
        authPage.submit.click()
        authPage.alert.should('have.text', 'The email has already been taken.The password confirmation does not match.')
        //dodati test case sa pogresnim mejlom
    


    })
})})
