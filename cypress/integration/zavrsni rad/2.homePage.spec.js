import { EMAIL } from "../../fixtures/constants/"
import { logPage } from '../../page_object/loginGradebook.page'
import GradePage, { gradePage } from '../../page_object/Gradebook.page.js'

describe('HOME PAGE', function () {
    beforeEach(() => {
        cy.visit('/')
        cy.contains('Sign in').click()
        logPage.login(EMAIL.EXISTING, EMAIL.PASSWORD)
    })
    it('TC 01 Home page PAGINATION 1. nacin', function() {
            cy.server()
            cy.route('GET', Cypress.config('backendUrl') + 'diaries?page=1').as('stub')
            //cy.wait(1000)
            gradePage.table_dark.children('tbody').should('have.length', 10)
            gradePage.next_button.click()
            cy.route('GET', Cypress.config('backendUrl') + 'search?search_term=&page=2').as('stub')
            gradePage.table_dark.children('tbody').should('have.length', 10)
    })
    it('TC 02 Home Page PAGINATION 2. nacin', function() {
        gradePage.table_dark.children('tbody').should('have.length', 10)
        gradePage.next_button.click()
        gradePage.table_dark.children('tbody').should('have.length', 10)
    })
    it('TC 03 Home Page GRADEBOOK NAME, PROFESSORS FIRST AND LAST NAME, TIME OF CREATING', function() {
        gradePage.table_dark.children('thead').contains('Gradebook')
        gradePage.table_dark.children('thead').contains('Professor')
        gradePage.table_dark.children('thead').contains('Created at')
    })
    it('TC 04 Home Page FILTER', function() {
        cy.wait(1000)
        gradePage.gradebook_filter.type('d')
        gradePage.search.click()
        gradePage.table_dark.children('tbody').should('have.length', 10)
        gradePage.next_button.click()
        gradePage.table_dark.children('tbody').should('have.length', 10)
    })
    it('TC 05 Home Page FILTER without gradebook in base', function() {
        cy.wait(1000)
        gradePage.gradebook_filter.type('bla')
        gradePage.search.click()
        cy.get('div').contains('There is no more gradebooks in base, try again')
    })
})