import{ EMAIL } from "../../fixtures/constants";
import { logPage } from "../../page_object/loginGradebook.page"
import { gradePage } from "../../page_object/Gradebook.page"
import { commentPage } from "../../page_object/comment.page"//../../page_object/comment.page"
import { CREATE } from "../../fixtures/constants"
describe('COMMENTS', function () {
    beforeEach(() => {
        cy.visit('/')
        cy.contains('Sign in').click()
        logPage.login(EMAIL.EXISTING, EMAIL.PASSWORD)
        gradePage.my_gradebook.click()
            
    })
    it('TC 01 Create comment', function() {
        commentPage.comment_1.type(CREATE.validTitle)
        commentPage.submit_comment.click()
        gradePage.my_gradebook.click()
        cy.get('.comments-box').should('contain', CREATE.validTitle)
        //cy.get('div').children('div').eq(1).children('div').last().should('contain', CREATE.validTitle)
    })
    it('TC 02 CHECKING existing of authors name and comment', function() {
        commentPage.comments_box.should('contain', 'Comments')
        commentPage.comments_box.should('contain', 'Comment Author')
    })
    it('TC 03 Remove comment', function() {
        commentPage.delete_comment.click()
        commentPage.delete_comment.should('not.exist')

    })
    it('TC 04 Create comment with 255 chars', function() {
        commentPage.comment_1.type(CREATE.validTitle255)
        commentPage.submit_comment.click()
        //gradePage.my_gradebook.click()
        cy.get('.comments-box').should('contain', CREATE.validTitle255)
    })
    it('TC 05 Create comment with 256 chars', function() {
        commentPage.comment_1.type(CREATE.invalidTitle256)
        commentPage.submit_comment.click()
        gradePage.my_gradebook.click()
        cy.get('.comments-box').should('contain', CREATE.invalidTitle256)
        //BUG-test pada. PREMA SPECIFIKACIJI KOMENTAR MOZE IMATI 1000 KARAKTERA, MEDJUTIM MOZE MAX 255
    })
    
})
