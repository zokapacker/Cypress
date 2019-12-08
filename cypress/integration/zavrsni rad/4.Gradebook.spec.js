import{ EMAIL } from "../../fixtures/constants";
import { logPage } from "../../page_object/loginGradebook.page"
import { gradePage } from "../../page_object/Gradebook.page" // promeniti 
import { random_string } from "../../utils"
import { CREATE } from "../../fixtures/constants"
import { profPage } from "../../page_object/Professor.page";
describe('GRADEBOOK PAGE', function () {
    beforeEach(() => {
        cy.visit('/')
        cy.contains('Sign in').click()
        logPage.login(EMAIL.EXISTING, EMAIL.PASSWORD)
            
    })
    it('TC 01 CREATE and CHECKING gradebook', function() {
        cy.wait(1000)
        gradePage.create_gradebook.click()
        gradePage.gradebook_title.type(CREATE.validTitle)
        gradePage.professorFromList
        gradePage.submit.click()
        cy.url().should('include', 'gradebook')
        cy.wait(2000)
        gradePage.gradebook_filter.clear().type(CREATE.validTitle)
        gradePage.search.click()
        cy.wait(1000)
        gradePage.table_dark.children('tbody').last().should('contain', CREATE.validTitle)
    })
    it('TC 02 VIEW/MY gradebook page', function() {
        gradePage.my_gradebook.click()
        gradePage.table_dark.should('contain', 'Gradebook')
        gradePage.table_dark.should('contain', 'Professor')
        gradePage.table_dark.should('contain', 'Students')
        gradePage.table_dark.should('contain', 'Add Student')
        gradePage.add_student.click()
        cy.url().should('include', 'add-student')
    })
    it('TC 03 EDIT gradebook', function() {
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
    })
    it('TC 04 DELETE gradebook', function() {
        gradePage.my_gradebook.click()
        gradePage.delete_gradebook.click()
        cy.url().should('include', 'gradebooks')
        cy.get('.btn-danger').should('not.exist')
    })
    it('TC 05 Negative case CREATE with 1 character', function() {
        cy.wait(1000)
        gradePage.create_gradebook.click()
        gradePage.gradebook_title.type(CREATE.Title1)
        gradePage.professorFromList
        gradePage.submit.click()
        cy.get('.alert-danger').should('contain', 'The title must be at least 2 characters.')
    })
    it('TC 06 Negative case CREATE with 256 characters', function() {
        cy.wait(1000)
        gradePage.create_gradebook.click()
        gradePage.gradebook_title.type(CREATE.invalidTitle256)
        gradePage.professorFromList
        gradePage.submit.click()
        cy.get('.alert-danger').should('contain', "Data too long for column 'title'")
        //BUG - PADA TEST, NEMA VALIDACIONE PORUKE PRI KREIRANJU TITLE SA 256 i vise karaktera...
    })
    it('TC 07 Negative case CREATE without professor', function() {
        cy.wait(1000)
        gradePage.create_gradebook.click()
        gradePage.gradebook_title.type(CREATE.validTitle)
        gradePage.submit.click()
        cy.get('.alert-danger').should('contain', 'The professor id field is required.')
    })
    it('TC 08 DODAT TEST RADI POSTOJANJA U BAZI ZBOG KASNIJEG KREIRANJA STUDENTA I KOMENTARA', function() {
        cy.wait(1000)
        gradePage.create_gradebook.click()
        gradePage.gradebook_title.type(CREATE.validTitle)
        gradePage.professorFromList
        gradePage.submit.click()
        //TC 08 DODAT TEST RADI POSTOJANJA U BAZI ZBOG KASNIJEG KREIRANJA STUDENTA I KOMENTARA
    })


    
})