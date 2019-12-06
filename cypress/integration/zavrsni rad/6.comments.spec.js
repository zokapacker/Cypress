import{ EMAIL } from "../../fixtures/constants";
import { logPage } from "../../page_object/loginGradebook.page"
import { gradePage } from "../../page_object/Gradebook.page"
import { commentPage } from "../../page_object/comment.page"
describe('HOME PAGE', function () {
    beforeEach(() => {
        cy.visit('/')
        cy.contains('Sign in').click()
        logPage.login(EMAIL.EXISTING, EMAIL.PASSWORD)
        cy.contains('My Gradebook').click()
            
    })
    it.only('TC 01 Create comment on gradebook-app', function() {
        commentPage.comment_1.type('lala')
        commentPage.submit_comment.click()
        gradePage.my_gradebook.click()
        //cy.contains('My Gradebook').click()
        //cy.wait(3000)
        //cy.get('div').children('div').eq(1).children('div').last().should('contain', 'lala')
        
    })
    it('TC 02 CHECKING of existing created comment', function() {
        cy.get('div').children('div').eq(1).children('div').last().should('contain', 'lala')

    })
    it('TC 03 CHECKING existing of authors name and comment', function() {
        commentPage.comments_box.should('contain', 'Comments')
        commentPage.comments_box.should('contain', 'Comment Author')
    })
    it('TC 04 Remove comment', function() {
        commentPage.delete_comment.click()
        commentPage.delete_comment.should('not.exist')

    })
    
})
