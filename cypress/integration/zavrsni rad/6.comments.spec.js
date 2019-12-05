import{ EMAIL } from "../../fixtures/constants";
import { logPage } from "../../page_object/gradebookLogin.page"
import { commentPage } from "../../page_object/Gradebook.page" // promeniti 
import { randomFirstName } from "../../utils"
import { CREATE } from "../../fixtures/constants"
describe('HOME PAGE', function () {
    beforeEach(() => {
        cy.visit('/')
        cy.contains('Sign in').click()
        logPage.login(EMAIL.EXISTING, EMAIL.PASSWORD)
        cy.contains('My Gradebook').click()
            
    })
    it('TC 01 Create comment on gradebook-app', function() {
        commentPage.comment.type('lala')
        commentPage.submit_comment.click()
        cy.contains('My Gradebook').click()
        //cy.contains('My Gradebook').click()
        //cy.wait(3000)
        //cy.get('div').children('div').eq(1).children('div').last().should('contain', 'lala')
        
    })
    it('TC 02 CHECKING of existing created comment', function() {
        cy.get('div').children('div').eq(1).children('div').last().should('contain', 'lala')

    })
    it('TC 03 CHECKING existing of authors name and comment', function() {
        cy.get('.comments-box').should('contain', 'Comments')
        cy.get('.comments-box').should('contain', 'Comment Author')
    })
    it('TC 04 Remove comment', function() {
        commentPage.delete_comment.click()
        commentPage.delete_comment.should('not.exist')

    })
    
})
