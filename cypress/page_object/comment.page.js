export default class CommentPage {

get comment_1() {
    return cy.get('textarea')
}
get submit_comment() {
    return cy.get('.btn-primary').contains('Submit')
}
get delete_comment() {
    return cy.get('.btn-danger').last().contains('Delete').click()
}
get comments_box() {
    return cy.get('.comments-box')
}
}
export const commentPage = new CommentPage()