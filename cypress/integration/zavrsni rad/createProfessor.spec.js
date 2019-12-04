import{ EMAIL } from "../../fixtures/constants";
import { logPage } from "../../page_object/gradebookLogin.page"
import { createProfPage } from "../../page_object/createProfessor.page" // promeniti 
import { randomFirstName } from "../../utils"
import { CREATE } from "../../fixtures/constants"
describe('HOME PAGE', function () {
    beforeEach(() => {
        cy.visit('/')
        cy.contains('Sign in').click()
        logPage.login(EMAIL.EXISTING, EMAIL.PASSWORD)
            
    })
    it('TC 01 Create professor on gradebook', function() {
        cy.contains('Professors').click()
        cy.contains('Create Professor').click()
        createProfPage.createProf('zoka', 'lala', CREATE.picture)
        cy.url().should('include', 'all-professors')
        /*createProfPage.first_name.type('zoka')
        createProfPage.last_name.type('lala')
        createProfPage.add_images.click()
        createProfPage.image_url.type(CREATE.picture)
        createProfPage.submit.click()*/
    })
    it.only('TC 02 Checking existing of created professor', function() {
        cy.contains('Professors').click()
        cy.contains('All Professors').click()
        cy.get('.table-dark').children('tbody').last().should('contain', 'zoka')
    })
    it('TC 03 all professors page', function() {
        cy.contains('Professors').click()
        cy.contains('All Professors').click()
        cy.get('.table-dark').should('contain', 'FirstName')
        cy.get('.table-dark').should('contain', 'LastName')
        cy.get('.table-dark').should('contain', 'Picture')
        cy.get('.table-dark').should('contain', 'Gradebook')
    })
    it('TC 04 single professor page', function() {
        cy.get('td').eq(1).click()
        cy.get('.table-striped').should('contain', 'Professor')
        cy.get('.table-striped').should('contain', 'Gradebook')
        cy.get('.table-striped').should('contain', 'Image')
        cy.get('.table-striped').should('contain', 'Number of students')
        cy.get('td').eq(1).click()
        cy.url().should('include', 'single-gradebook')
    })
})
