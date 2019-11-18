describe('My First Test', function() {
    it('Does not do much!', function() {
        expect(true).to.equal(true)
    })
    it('Visits the Kitchen Sink', function() {
        cy.visit('https://example.cypress.io')
        cy.contains('type').click()
        cy.url().should('include', '/commands/actions')
    })
    it('Checking register on gallery.app', function() {
        cy.visit("/")
        cy.contains('Register').click()
        cy.url().should('include', '/register' )
    })
    it('Checking Login on gallery.app', function() {
        cy.visit("/")
        cy.contains('Login').click()
        cy.url().should('include', '/login' )
    })
    it('visit login', function() {
        cy.visit("/")
        cy.contains('Login').click()
        cy.get('input[id="email"]').type('zokapacker@gmail.com')
        cy.get('input[id="password"]').type('mohandas1')
        cy.get('button[type=submit]').click()
    })


})