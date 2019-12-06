import{ EMAIL } from "../../fixtures/constants";
import { logPage } from "../../page_object/loginGradebook.page"
import { gradePage } from "../../page_object/Gradebook.page" // promeniti 
import { CREATE } from "../../fixtures/constants"
import { profPage } from "../../page_object/Professor.page";
describe('HOME PAGE', function () {
    beforeEach(() => {
        cy.visit('/')
        cy.contains('Sign in').click()
        logPage.login(EMAIL.EXISTING, EMAIL.PASSWORD)
            
    })
    it('TC 01 Create Student on gradebook-app', function() {
        gradePage.my_gradebook.click()
        gradePage.add_student.click()
        profPage.first_name.type('lele')
        profPage.last_name.type('Studentic')
        gradePage.student_add_image.click()
        profPage.image_url.type(CREATE.picture)
        gradePage.submit.click()
        cy.url().should('include', 'single-gradebook')
        
    })
    it('TC 02 Checking existing of created student', function() {
        gradePage.my_gradebook.click()
        cy.get('td').eq(3).should('contain', 'lele Studentic')
        
    })
    
    
})
