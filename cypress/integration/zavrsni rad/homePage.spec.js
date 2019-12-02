import { EMAIL } from "../../fixtures/constants/"
import { logPage } from '../../page_object/gradebookLogin.page'
describe('HOME PAGE', function () {
    beforeEach(() => {
        cy.visit('/')
        cy.contains('Sign in').click()
        logPage.login(EMAIL.EXISTING, EMAIL.PASSWORD)
            
    })
    /*it('TC 01 Home page and pagination', function() {
            cy.server()
            cy.route('GET', Cypress.config('backendUrl') + 'galleries?page=1&term=', 'fixture:gallery9.json').as('stub')
            cy.get('.btn-custom').should('not.exist')
    })*/
    it('TC 01 Home page pagination - 2. nacin', function() {
        cy.get('.table-dark').children('tbody').should('have.length', 10)
        cy.contains('Next').click()
        cy.get('.table-dark').children('tbody').should('have.length', 10)
    })
    it('TC 02 Home Page IME DNEVNIKA, IME I PREZIME RAZREDNOG I VREME KREIRANJA', function() {
        cy.get('.table-dark').children('thead').contains('Gradebook')
        cy.get('.table-dark').children('thead').contains('Professor')
        cy.get('.table-dark').children('thead').contains('Created at')
    })
    it.only('TC 03 Home Page FILTER', function() {
        cy.wait(1000)
        logPage.gradebook_filter.type('d')
        logPage.search.click()
        cy.get('.table-dark').children('tbody').should('have.length', 10)
        cy.contains('Next').click()
        cy.get('.table-dark').children('tbody').should('have.length', 10)
    })
})