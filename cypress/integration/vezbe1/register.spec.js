import { EMAIL } from '../../fixtures/constants'
import { authPage } from '../../page_object/login.page'
import { regPage } from '../../page_object/register.page'

describe('My First Test', function() {
    
    beforeEach(() => {
        cy.visit("/")
        cy.contains('Register').click()
    })

it('Checking register on gallery.app', function() {
    
    cy.url().should('include', '/register' )
})
it('enter a valid information skr', function() {
    
    authPage.register(EMAIL.IME, EMAIL.PREZIME)
    authPage.email.type(EMAIL.EXISTING) //napraviti novu mejl adresu
    authPage.password.type(EMAIL.PASSWORD)
    authPage.passConfirm.type(EMAIL.PASSWORD)
    authPage.checkbox.click()
    authPage.submit.click()
    authPage.alert.should('have.text', 'The email has already been taken.')
})
it('enter a valid information', function() {
    
    authPage.register(EMAIL.IME, EMAIL.PREZIME)
    authPage.email.type(EMAIL.EXISTING) //napraviti novu mejl adresu
    authPage.password.type(EMAIL.PASSWORD)
    authPage.passConfirm.type(EMAIL.PASSWORD)
    authPage.checkbox.click()
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
    
    authPage.register(EMAIL.IME, EMAIL.PREZIME)
    authPage.email.type(EMAIL.EXISTING) //napraviti novu mejl adresu
    authPage.password.type(EMAIL.PASSWORD)
    authPage.passConfirm.type(EMAIL.PASSWORD)
    authPage.checkbox.click()
    authPage.submit.click()
    authPage.alert.should('have.text', 'The email has already been taken.')
    
})

it('enter a valid information without checkbox', function() {
    
    authPage.register(EMAIL.IME, EMAIL.PREZIME)
    authPage.email.type(EMAIL.EXISTING) //napraviti novu mejl adresu
    authPage.password.type(EMAIL.PASSWORD)
    authPage.passConfirm.type(EMAIL.PASSWORD)
    
    authPage.submit.click()
    authPage.alert.should('have.text', 'The email has already been taken.The terms and conditions must be accepted.')
    
})


it('enter a valid information with wrong confirmed password', function() {
    
    authPage.register(EMAIL.IME, EMAIL.PREZIME)
    authPage.email.type(EMAIL.EXISTING) //napraviti novu mejl adresu
    authPage.password.type(EMAIL.PASSWORD)
    authPage.passConfirm.type('mohandas')
    authPage.checkbox.click()
    authPage.submit.click()
    authPage.alert.should('have.text', 'The email has already been taken.The password confirmation does not match.')
    
})
it('enter a valid information with wrong password', function() {
    
    authPage.register(EMAIL.IME, EMAIL.PREZIME)
    authPage.email.type(EMAIL.EXISTING) //napraviti novu mejl adresu
    authPage.password.type('mohandas11')
    authPage.passConfirm.type(EMAIL.PASSWORD)
    authPage.checkbox.click()
    authPage.submit.click()
    authPage.alert.should('have.text', 'The email has already been taken.The password confirmation does not match.')
    //dodati test case sa pogresnim mejlom
})

it('enter a valid information without email', function() {
    
    authPage.register(EMAIL.IME, EMAIL.PREZIME)
    authPage.email.type(' ') //napraviti novu mejl adresu
    authPage.password.type(EMAIL.PASSWORD)
    authPage.passConfirm.type(EMAIL.PASSWORD)
    authPage.checkbox.click()
    authPage.submit.click()
    authPage.email.then(($input) => {
        expect($input[0].validationMessage).to.eq('Please fill out this field.')
    })
})
})