import{ EMAIL } from "../../fixtures/constants";
import { logPage } from "../../page_object/gradebookLogin.page"
import { createGradePage } from "../../page_object/createGradebook.page" // promeniti 
import { randomFirstName } from "../../utils"
import { CREATE } from "../../fixtures/constants"
describe('HOME PAGE', function () {
    beforeEach(() => {
        cy.visit('/')
        cy.contains('Sign in').click()
        logPage.login(EMAIL.EXISTING, EMAIL.PASSWORD)
            
    })
    it('TC 01 Create gradebook on gradebook-app', function() {
        cy.contains('Create Gradebook').click()
        createGradePage.gradebook_title.type('lele')
        createGradePage.professor.select('zoka blablabla')
        createGradePage.submit.click()
        // createGradePage.createGrade('lele', 'sss sss')
        cy.url().should('include', 'gradebook')
        
    })
    it('TC 02 Checking existing of created gradebook', function() {
        cy.get('.table-dark').children('tbody').last().should('contain', 'sss')
        // kako dopreti do poslednjeg ako ima vise stranica? da li klikcati stalno 'next'?

    })
    it.only('TC 03 My gradebook page', function() {
        cy.contains('My Gradebook').click()
        cy.get('.table-dark').should('contain', 'Gradebook')
        cy.get('.table-dark').should('contain', 'Professor')
        cy.get('.table-dark').should('contain', 'Students')
        cy.get('.table-dark').should('contain', 'Add Student')
        createGradePage.add_student.click()
        cy.url().should('include', 'add-student')
    })
    
})
