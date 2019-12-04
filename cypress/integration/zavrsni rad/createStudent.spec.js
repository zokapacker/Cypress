import{ EMAIL } from "../../fixtures/constants";
import { logPage } from "../../page_object/gradebookLogin.page"
import { createGradePage } from "../../page_object/createGradebook.page" // promeniti 
import { randomFirstName } from "../../utils"
import { CREATE } from "../../fixtures/constants"
import { createProfPage } from "../../page_object/createProfessor.page";
describe('HOME PAGE', function () {
    beforeEach(() => {
        cy.visit('/')
        cy.contains('Sign in').click()
        logPage.login(EMAIL.EXISTING, EMAIL.PASSWORD)
            
    })
    it('TC 01 Create Student on gradebook-app', function() {
        cy.contains('My Gradebook').click()
        createGradePage.add_student.click()
        createProfPage.first_name.type('lele')
        createProfPage.last_name.type('Studentic')
        createGradePage.student_add_image.click()
        createProfPage.image_url.type(CREATE.picture)
        createGradePage.submit.click()
        cy.url().should('include', 'single-gradebook')
        
    })
    it.only('TC 02 Checking existing of created student', function() {
        cy.contains('My Gradebook').click()
        cy.get('td').eq(3).children('ul').children('li').last().should('contain', 'lele Studentic')
        

    })
    
    
})
