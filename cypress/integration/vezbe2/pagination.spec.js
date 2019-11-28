import { EMAIL } from "../../fixtures/constants/"
describe('My Fourth Test', function () {
    beforeEach(() => {
        cy.login(EMAIL.EXISTING, EMAIL.PASSWORD)
        //cy.visit('/')
        
        
    })
    it('TC 01 pagination all galleries page count 9', function() {
        cy.server()
        cy.route('GET', Cypress.config('backendUrl') + 'galleries?page=1&term=', 'fixture:gallery9.json').as('stub')
        cy.get('.btn-custom').should('not.exist')

    })
    it('TC 02 pagination all galleries page count 10', function() {
        cy.server()
        cy.route('GET', Cypress.config('backendUrl') + 'galleries?page=1&term=', 'fixture:gallery10.json').as('stub')
        cy.get('.btn-custom').should('not.exist')
    })
    it('TC 03 pagination all galleries page count 11', function() {
        cy.server()
        cy.route('GET', Cypress.config('backendUrl') + 'galleries?page=1&term=', 'fixture:gallery11.json').as('stub')
        cy.get('.btn-custom').should('exist')
    })
    

    it('TC 04 pagination my galleries 9', function() {
        cy.server()
        cy.route('GET', Cypress.config('backendUrl') + 'galleries?page=1&term=', 'fixture:gallery9.json').as('stub')
        cy.visit('/')
        cy.get('.cell').eq(8).should('exist')
        cy.get('.btn-custom').should('not.exist')
    })
    it('TC 05 pagination my galleries 10', function() {
        cy.server()
        cy.route('GET', Cypress.config('backendUrl') + 'galleries?page=1&term=', 'fixture:gallery10.json').as('stub')
        cy.visit('/')
        cy.get('.btn-custom').should('not.exist')
        cy.get('.cell').eq(9).should('exist')
        
    })
    it('TC 06 pagination my galleries 11', function() {
        cy.server()
        cy.route('GET', Cypress.config('backendUrl') + 'galleries?page=1&term=', 'fixture:gallery10.json').as('stub')
        cy.get('.btn-custom').click()
        cy.visit('/')
        cy.route('GET', Cypress.config('backendUrl') + 'galleries?page=2&term=', 'fixture:gallery1.json').as('stub')
        cy.get('.btn-custom').should('not.exist')
        cy.get('.cell').eq(0).should('exist')
        
    })
    it('TC 07 pagination my galleries 12', function() {
        cy.server()
        cy.route('GET', Cypress.config('backendUrl') + 'galleries?page=1&term=', 'fixture:gallery10.json').as('stub')
        cy.get('.btn-custom').click()
        cy.visit('/')
        cy.route('GET', Cypress.config('backendUrl') + 'galleries?page=2&term=', 'fixture:gallery1.json').as('stub')
        //cy.visit('/')
        cy.get('.btn-custom').should('not.exist')
        cy.get('.cell').eq(0).should('exist')
        
    })
    it('TC 08 pagination all galleries page 13', function() {
        cy.server()
        cy.route('GET', Cypress.config('backendUrl') + 'galleries?page=1&term=', 'fixture:gallery10.json').as('stub')
        cy.get('.btn-custom').click()
        cy.visit('/')
        cy.route('GET', Cypress.config('backendUrl') + 'galleries?page=2&term=', 'fixture:gallery13.json').as('stub')
        //cy.visit('/')
        //cy.get('.cell').eq(2).should('exist') -- mora ici posle testa za button Load More
        cy.get('.btn-custom').should('not.exist')
        cy.get('.cell').eq(2).should('exist')
    })
    //domaci
    /* it('TC 01 pagination all galleries page count 9', function() {
        cy.server()
        cy.route('GET', Cypress.config('backendUrl') + 'galleries?page=1&term=', 'fixture:gallery13.json').as('stub')
        cy.get('.btn-custom')click()
        cy.route('GET', Cypress.config('backendUrl') + 'galleries?page=2&term=', 'fixture:gallery13.json').as('stub')
        .cell (treba da postoji 3 galerije)*/


    

            
})