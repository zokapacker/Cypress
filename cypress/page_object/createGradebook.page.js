export default class CreateGradePage {
    get gradebook_title() {
        return cy.get('#title')
    }
    get professor() {
        return cy.get('#professor').select('sss sss')
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
    createGrade(naziv_dnevnika, select_profesora) {
        this.gradebook_title.type(naziv_dnevnika)
        this.professor.type(select_profesora)
        this.submit.click()
    }
    
    
}
export const createGradePage = new CreateGradePage()