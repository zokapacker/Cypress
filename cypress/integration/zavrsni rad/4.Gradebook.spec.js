import{ EMAIL } from "../../fixtures/constants";
import { logPage } from "../../page_object/gradebookLogin.page"
import { gradePage } from "../../page_object/Gradebook.page" // promeniti 
import { randomFirstName } from "../../utils"
import { CREATE } from "../../fixtures/constants"
describe('HOME PAGE', function () {
    beforeEach(() => {
        cy.visit('/')
        cy.contains('Sign in').click()
        logPage.login(EMAIL.EXISTING, EMAIL.PASSWORD)
            
    })
    it.only('TC 01 CREATE gradebook on gradebook-app', function() {
        cy.contains('Create Gradebook').click()
        gradePage.gradebook_title.type('dnodna')
        cy.get('#professor > option').eq(0)
            .then(element => cy.get('#professor').select(element.val()))
        gradePage.submit.click()
        // createGradePage.createGrade('lele', 'sss sss')
        cy.url().should('include', 'gradebook')

        
    })
    it('TC 02 Checking existing of created gradebook', function() {
        cy.wait(2000)
        logPage.gradebook_filter.type('dnodna')
        logPage.search.click()
        cy.wait(1000)
        cy.get('.table-dark').children('tbody').last().should('contain', 'dnodna')
    })
    it('TC 03 VIEW/MY gradebook page', function() {
        cy.contains('My Gradebook').click()
        cy.get('.table-dark').should('contain', 'Gradebook')
        cy.get('.table-dark').should('contain', 'Professor')
        cy.get('.table-dark').should('contain', 'Students')
        cy.get('.table-dark').should('contain', 'Add Student')
        gradePage.add_student.click()
        cy.url().should('include', 'add-student')
    })
    it('TC 04 EDIT gradebook', function() {
        cy.contains('My Gradebook').click()
        gradePage.edit_gradebook.click()
        cy.wait(1000)
        gradePage.gradebook_title.clear().type('edit')
        gradePage.submit.click()
        cy.wait(1000)
        logPage.gradebook_filter.type('edit')
        logPage.search.click()
        cy.wait(1000)
        cy.get('.table-dark').children('tbody').last().should('contain', 'edit')
        //ubaciti proveru postojanja/editovanja/brisanja u jedan test case gde je i kreirano/editovano/brisano
    })
    it('TC 05 DELETE gradebook', function() {
        cy.contains('My Gradebook').click()
        gradePage.delete_gradebook.click()
        cy.url().should('include', 'gradebooks')

    })
    
})