import{ EMAIL } from "../../fixtures/constants";
import { logPage } from "../../page_object/loginGradebook.page"
import { profPage } from "../../page_object/Professor.page" // promeniti 
import { randomFirstName } from "../../utils"
import { CREATE } from "../../fixtures/constants"
import { gradePage } from "../../page_object/Gradebook.page";
describe('PROFESSOR PAGE', function () {
    beforeEach(() => {
        cy.visit('/')
        cy.contains('Sign in').click()
        logPage.login(EMAIL.EXISTING, EMAIL.PASSWORD)
            
    })
    it('TC 01 CREATE professor on gradebook', function() {
        cy.contains('Professors').click()//profPage.professors.click() nece ovako
        cy.contains('Create Professor').click()//profPage.create_professor.click() nece ovako
        profPage.createProf(CREATE.firstName, CREATE.lastName, CREATE.picture)
        cy.wait(3000)
        cy.url().should('include', 'all-professors')
    })
    it('TC 02 CHECKING existing of created professor', function() {
        cy.contains('Professors').click()//profPage.professors
        cy.contains('All Professors').click()//profPage.all_professors
        gradePage.table_dark.children('tbody').last().should('contain', 'Zoka')
    })
    it('TC 03 ALL professors page', function() {
        cy.contains('Professors').click()//profPage.professors.click()
        cy.contains('All Professors').click()//profPage.all_professors.click()
        cy.wait(1000)
        gradePage.table_dark.should('contain', 'FirstName')
        gradePage.table_dark.should('contain', 'LastName')
        gradePage.table_dark.should('contain', 'Picture')
        gradePage.table_dark.should('contain', 'Gradebook')
    })
    it('TC 04 SINGLE professor page', function() {
        cy.get('td').eq(1).click()
        cy.wait(1000)
        profPage.tabela_bela.should('contain', 'Professor')
        profPage.tabela_bela.should('contain', 'Gradebook')
        profPage.tabela_bela.should('contain', 'Image')
        profPage.tabela_bela.should('contain', 'Number of students')
        cy.get('td').eq(1).click()
        cy.url().should('include', 'single-professor')
    })
    it('TC 05 Negative case - CREATE professor without FIRST name', function() {
        cy.contains('Professors').click()//profPage.professors.click() nece ovako
        cy.contains('Create Professor').click()//profPage.create_professor.click() nece ovako
        cy.wait(1000)
        profPage.createProf(' ', CREATE.lastName, CREATE.picture)
        cy.wait(1000)
        /*profPage.first_name.then(($input) => {
            expect($input[0].validationMessage).to.eq('Please lengthen this text to 2 characters or more (you are currently using 1 character).')
        })*/
        cy.get('.alert-danger').should('contain', "Column 'firstName' cannot be null")
    })
    it('TC 06 Negative case - CREATE professor without LAST name', function() {
        cy.contains('Professors').click()//profPage.professors.click() nece ovako
        cy.contains('Create Professor').click()//profPage.create_professor.click() nece ovako
        cy.wait(1000)
        profPage.createProf(CREATE.firstName, ' ', CREATE.picture)
        cy.wait(1000)
        cy.get('.alert-danger').should('contain', "Column 'lastName' cannot be null")
    })
    it('TC 07 Negative case - CREATE professor without IMAGE', function() {
        cy.contains('Professors').click()//profPage.professors.click() nece ovako
        cy.contains('Create Professor').click()//profPage.create_professor.click() nece ovako
        cy.wait(1000)
        profPage.createProf(CREATE.firstName, CREATE.lastName, ' ')
        cy.wait(1000)
        cy.get('.alert-danger').should('contain', "Column 'url' cannot be null")
    })
    it('TC 08 Negative case - CREATE professor with 256 chars first name', function() {
        cy.contains('Professors').click()//profPage.professors.click() nece ovako
        cy.contains('Create Professor').click()//profPage.create_professor.click() nece ovako
        cy.wait(1000)
        profPage.createProf(CREATE.invalidTitle256, CREATE.lastName, CREATE.picture)
        cy.wait(1000)
        cy.get('.alert-danger').should('contain', "Data too long for column 'firstName'")
        //NEMA VALIDACIONE PORUKE PRI KREIRANJU FIRST NAME SA 256, 257, 1000 KARAKTERA ITD...
    })
    it('TC 09 Negative case - CREATE professor with 256 chars last name', function() {
        cy.contains('Professors').click()//profPage.professors.click() nece ovako
        cy.contains('Create Professor').click()//profPage.create_professor.click() nece ovako
        cy.wait(1000)
        profPage.createProf(CREATE.firstName, CREATE.invalidTitle256, CREATE.picture)
        cy.wait(1000)
        cy.get('.alert-danger').should('contain', "Data too long for column 'lastName'")
    })
    it.only('TC 10 Positive case - CREATE professor with 255 chars last name', function() {
        cy.contains('Professors').click()//profPage.professors.click() nece ovako
        cy.contains('Create Professor').click()//profPage.create_professor.click() nece ovako
        cy.wait(1000)
        profPage.createProf(CREATE.firstName, CREATE.validTitle255, CREATE.picture)
        //prebaciti ovaj case ispred u pozitivne, a dodati posle kreiranja proveru da li je poslednji taj sto je kreiran
    })


})