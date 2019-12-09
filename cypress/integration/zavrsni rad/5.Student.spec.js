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
        gradePage.my_gradebook.click()
        gradePage.add_student.click()
        cy.wait(2000)
    })
    it('TC 01 Create and CHECKING Student', function() {
        profPage.first_name.type(CREATE.studentName)
        profPage.last_name.type(CREATE.studentLastName)
        gradePage.student_add_image.click()
        profPage.image_url.type(CREATE.picture)
        gradePage.submit.click()
        cy.url().should('include', 'single-gradebook')
        cy.get('td').eq(3).should('contain', CREATE.studentName)   
    })
    it('TC 02 Create Student without first name', function() {
        
        profPage.last_name.type(CREATE.studentLastName)
        gradePage.student_add_image.click()
        profPage.image_url.type(CREATE.picture)
        gradePage.submit.click()
        //NEMA VALIDACIONIH PORUKA, ALI STUDENT NIJE KREIRAN
    })
    it('TC 03 Create Student without last name', function() {
        profPage.first_name.type(CREATE.studentName)
        gradePage.student_add_image.click()
        profPage.image_url.type(CREATE.picture)
        gradePage.submit.click()
        //NEMA VALIDACIONIH PORUKA, ALI STUDENT NIJE KREIRAN
    })
    //ako nece iz prve, vrteti vise puta. Ne uspe da locira my gradebook
})
