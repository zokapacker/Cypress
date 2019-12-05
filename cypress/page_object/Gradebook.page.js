export default class GradePage {
    get gradebook_title() {
        return cy.get('#title')
    }
    get professor() {
        return cy.get('#professor').select()//sta s ovim posto na drugi nacin je odradjeno
    }
    get submit() {
        return cy.get('.btn-primary').contains('Submit')
    }
    get add_student() {
        return cy.get('.btn-primary').contains('Add Student').click()
    }
    get student_add_image() {
        return cy.get('.btn-primary').contains('Add images')
    }
    get comment() {
        return cy.get('textarea')
    }
    get delete_comment() {
        return cy.get('.btn-danger').last().contains('Delete').click()
    }
    get edit_gradebook() {
        return cy.get('.btn-warning').contains('Edit Gradebook')
    }
    get delete_gradebook() {
        return cy.get('.btn-danger').first().contains('Delete').click()
    }
    createGrade(naziv_dnevnika, select_profesora) {
        this.gradebook_title.type(naziv_dnevnika)
        this.professor.type(select_profesora)
        this.submit.click()
    }
    
    
}
export const gradePage = new GradePage()