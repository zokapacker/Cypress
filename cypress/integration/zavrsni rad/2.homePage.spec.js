import { EMAIL } from "../../fixtures/constants/"
import { logPage } from '../../page_object/loginGradebook.page'
import { gradePage } from '../../page_object/Gradebook.page.js'
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
    it('TC 01 Home PAGINATION - 2. nacin', function() {
        gradePage.table_dark.children('tbody').should('have.length', 10)
        cy.contains('Next').click()
        gradePage.table_dark.children('tbody').should('have.length', 10)
    })
    it('TC 02 Home Page GRADEBOOK NAME, FIRST AND LAST NAME PROFESSOR, TIME OF CREATING', function() {
        gradePage.table_dark.children('thead').contains('Gradebook')
        gradePage.table_dark.children('thead').contains('Professor')
        gradePage.table_dark.children('thead').contains('Created at')
    })
    it('TC 03 Home Page FILTER', function() {
        cy.wait(1000)
        gradePage.gradebook_filter.type('d')
        gradePage.search.click()
        gradePage.table_dark.children('tbody').should('have.length', 10)
        cy.contains('Next').click()
        gradePage.table_dark.children('tbody').should('have.length', 10)
    })
})