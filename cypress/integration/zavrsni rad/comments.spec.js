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
    it('TC 01 Create comment on gradebook-app', function() {
        cy.contains('My Gradebook').click()
        createGradePage.comment.type('lala')
        createGradePage.submit.click()  
    })
    it.only('TC 02 Checking existing of created comment', function() {
        cy.contains('My Gradebook').click()
        cy.get('div').children('div').eq(1).children('div').last().should('contain', 'lala')
        

    })
    it('TC 03 My gradebook page', function() {
        cy.contains('My Gradebook').click()
        cy.get('.table-dark').should('contain', 'Gradebook')
        cy.get('.table-dark').should('contain', 'Professor')
        cy.get('.table-dark').should('contain', 'Students')
        cy.get('.table-dark').should('contain', 'Add Student')
        createGradePage.add_student.click()
        cy.url().should('include', 'add-student')
    })
    
})
