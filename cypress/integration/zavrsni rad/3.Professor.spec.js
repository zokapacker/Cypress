import{ EMAIL } from "../../fixtures/constants";
import { logPage } from "../../page_object/loginGradebook.page"
import { profPage } from "../../page_object/Professor.page" // promeniti 
import { randomFirstName } from "../../utils"
import { CREATE } from "../../fixtures/constants"
import { gradePage } from "../../page_object/Gradebook.page";
describe('HOME PAGE', function () {
    beforeEach(() => {
        cy.visit('/')
        cy.contains('Sign in').click()
        logPage.login(EMAIL.EXISTING, EMAIL.PASSWORD)
            
    })
    it('TC 01 CREATE professor on gradebook', function() {
        cy.contains('Professors').click()//profPage.professors.click()
        cy.contains('Create Professor').click()//profPage.create_professor.click()
        profPage.createProf('Zoka', 'lala', CREATE.picture)
        cy.url().should('include', 'all-professors')
        /*createProfPage.first_name.type('zoka')
        createProfPage.last_name.type('lala')
        createProfPage.add_images.click()
        createProfPage.image_url.type(CREATE.picture)
        createProfPage.submit.click()*/
    })
    it('TC 02 CHECKING existing of created professor', function() {
        cy.contains('Professors').click()//profPage.professors
        cy.contains('All Professors').click()//profPage.all_professors
        gradePage.table_dark.children('tbody').last().should('contain', 'Zoka')
    })
    it('TC 03 ALL professors page', function() {
        cy.contains('Professors').click()//profPage.professors.click()
        cy.contains('All Professors').click()//profPage.all_professors.click()
        gradePage.table_dark.should('contain', 'FirstName')
        gradePage.table_dark.should('contain', 'LastName')
        gradePage.table_dark.should('contain', 'Picture')
        gradePage.table_dark.should('contain', 'Gradebook')
    })
    it('TC 04 SINGLE professor page', function() {
        cy.get('td').eq(1).click()
        profPage.tabela_bela.should('contain', 'Professor')
        profPage.tabela_bela.should('contain', 'Gradebook')
        profPage.tabela_bela.should('contain', 'Image')
        profPage.tabela_bela.should('contain', 'Number of students')
        cy.get('td').eq(1).click()
        cy.url().should('include', 'single-professor')
    })
})