import{ EMAIL } from "../../fixtures/constants";
import { logPage } from "../../page_object/loginGradebook.page"
import { gradePage } from "../../page_object/Gradebook.page" // promeniti 
import { random_string } from "../../utils"
import { CREATE } from "../../fixtures/constants"
describe('GRADEBOOK PAGE', function () {
    beforeEach(() => {
        cy.visit('/')
        cy.contains('Sign in').click()
        logPage.login(EMAIL.EXISTING, EMAIL.PASSWORD)
            
    })
    it.only('TC 01 CREATE gradebook on gradebook-app', function() {
        cy.contains('Create Gradebook').click()
        gradePage.gradebook_title.type('skola')
        cy.get('#professor > option').eq(0)
            .then(element => cy.get('#professor').select(element.val()))
        gradePage.submit.click()
        cy.url().should('include', 'gradebook')
    })
    it('TC 02 CHECKING existing of created gradebook', function() {
        cy.wait(2000)
        gradePage.gradebook_filter.type('skola')
        gradePage.search.click()
        cy.wait(1000)
        gradePage.table_dark.children('tbody').last().should('contain', 'skola')
    })
    it('TC 03 VIEW/MY gradebook page', function() {
        gradePage.my_gradebook.click()
        gradePage.table_dark.should('contain', 'Gradebook')
        gradePage.table_dark.should('contain', 'Professor')
        gradePage.table_dark.should('contain', 'Students')
        gradePage.table_dark.should('contain', 'Add Student')
        //gradePage.add_student.click()
        //cy.url().should('include', 'add-student')
    })
    it('TC 04 EDIT gradebook', function() {
        gradePage.my_gradebook.click()
        gradePage.edit_gradebook.click()
        cy.wait(1000)
        gradePage.gradebook_title.clear().type('edit')
        gradePage.submit.click()
        cy.wait(1000)
        gradePage.gradebook_filter.type('edit')
        gradePage.search.click()
        cy.wait(1000)
        gradePage.table_dark.children('tbody').last().should('contain', 'edit')
        //ubaciti proveru postojanja/editovanja/brisanja u jedan test case gde je i kreirano/editovano/brisano
    })
    it('TC 05 DELETE gradebook', function() {
        gradePage.my_gradebook.click()
        gradePage.delete_gradebook.click()
        cy.url().should('include', 'gradebooks')
        cy.get('.btn-danger').should('not.exist')
    })
    
})