import { EMAIL } from '../../fixtures/constants'
import { authPage } from '../../page_object/login.page'
import { regPage } from '../../page_object/register.page'
import { randomEmail } from '../../utils'
import { REGISTER } from '../../fixtures/constants'

describe('My First Test', function() {
    
    beforeEach(() => {
        cy.visit("/")
        cy.contains('Register').click()
    })

it('TC 01 Checking register on gallery.app', function() {
    
    cy.url().should('include', '/register' )
})
it('TC 02 enter a valid information skr', function() {
    
    authPage.register(EMAIL.IME, EMAIL.PREZIME)
    authPage.email.type(EMAIL.EXISTING) //napraviti novu mejl adresu
    authPage.password.type(EMAIL.PASSWORD)
    authPage.passConfirm.type(EMAIL.PASSWORD)
    authPage.checkbox.click()
    authPage.submit.click()
    authPage.alert.should('have.text', 'The email has already been taken.')
})
it('TC 03 enter a valid information', function() {
    
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

it('TC 04 enter already existing email', function() {
    
    authPage.register(EMAIL.IME, EMAIL.PREZIME)
    authPage.email.type(EMAIL.EXISTING) //napraviti novu mejl adresu
    authPage.password.type(EMAIL.PASSWORD)
    authPage.passConfirm.type(EMAIL.PASSWORD)
    authPage.checkbox.click()
    authPage.submit.click()
    authPage.alert.should('have.text', 'The email has already been taken.')
    
})

it('TC 05 enter a valid information without checkbox', function() {
    
    authPage.register(EMAIL.IME, EMAIL.PREZIME)
    authPage.email.type(EMAIL.EXISTING) //napraviti novu mejl adresu
    authPage.password.type(EMAIL.PASSWORD)
    authPage.passConfirm.type(EMAIL.PASSWORD)
    
    authPage.submit.click()
    authPage.alert.should('have.text', 'The email has already been taken.The terms and conditions must be accepted.')
    
})


it('TC 06 enter a valid information with wrong confirmed password', function() {
    
    authPage.register(EMAIL.IME, EMAIL.PREZIME)
    authPage.email.type(EMAIL.EXISTING) //napraviti novu mejl adresu
    authPage.password.type(EMAIL.PASSWORD)
    authPage.passConfirm.type('mohandas')
    authPage.checkbox.click()
    authPage.submit.click()
    authPage.alert.should('have.text', 'The email has already been taken.The password confirmation does not match.')
    
})
it('TC 07 enter a valid information with wrong password', function() {
    
    authPage.register(EMAIL.IME, EMAIL.PREZIME)
    authPage.email.type(EMAIL.EXISTING) //napraviti novu mejl adresu
    authPage.password.type('mohandas11')
    authPage.passConfirm.type(EMAIL.PASSWORD)
    authPage.checkbox.click()
    authPage.submit.click()
    authPage.alert.should('have.text', 'The email has already been taken.The password confirmation does not match.')
    //dodati test case sa pogresnim mejlom
})

it('TC 08 enter a valid information without email', function() {
    
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
it('TC 09 enter a valid information without valid format email', function() {
    
        authPage.register(EMAIL.IME, EMAIL.PREZIME)
        authPage.email.type('blablabla') //napraviti novu mejl adresu
        authPage.password.type(EMAIL.PASSWORD)
        authPage.passConfirm.type(EMAIL.PASSWORD)
        authPage.checkbox.click()
        authPage.submit.click()
        authPage.email.then(($input) => {
            expect($input[0].validationMessage).to.eq("Please include an '@' in the email address. 'blablabla' is missing an '@'.")
        })
    })
it('TC - 10 register with random email', function() {
    regPage.register(EMAIL.IME, EMAIL.PREZIME)
    regPage.email.randomEmail()
    regPage.password.type(EMAIL.PASSWORD)
    regPage.passConfirm.type(EMAIL.PASSWORD)
    regPage.checkbox.click()
    regPage.submit.click()
})


it.only('TC - 11 Register to gallery app', function() {
        regPage.register(EMAIL.IME, EMAIL.PREZIME, EMAIL.EXISTING, EMAIL.PASSWORD, EMAIL.PASSWORD)
        regPage.checkbox.click()
        regPage.email.then(($input) => {
            expect($input[0].validationMessage).to.eq('Please fill out this field.')
        })


        
            
    
})
    it('TC - 12 with passwrd and confirmed password', function() {
        regPage.registerCheck({
            
            password: 'mohandas1',
            passConf: 'mohandas1'
        })

        RegPage.email.then(($input) => {
            expect($input[0].validationMessage).to.eq('Please fill out this field.')
        })
        //cy.get('.alert-danger').eq(0).contains('The email has already been taken.').click()
        //cy.get('.alert-danger').eq(1).contains('The password confirmation does not match')
    })
    it('TC - 13 Register to galery app invalid name - invalid email', function() {
        regPage.registerCheck(REGISTER)
        regPage.email.then(($input) => {
            expect($input[0].validationMessage).to.eq('Please fill out this field.')
        })
    })
    
    
})
