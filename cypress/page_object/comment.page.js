export default class CommentPage {
    get comment() {
        return cy.get('textarea')
    }
    get submit_comment() {
        return cy.get('.btn-primary').contains('Submit')
    }
    get delete_comment() {
        return cy.get('.btn-danger').last().contains('Delete').click()
    }
    createGrade(naziv_dnevnika, select_profesora) {
        this.gradebook_title.type(naziv_dnevnika)
        this.professor.type(select_profesora)
        this.submit.click()
    }
}
export const commentPage = new commentPage()