export default class GradePage {
    get gradebook_title() {
        return cy.get('#title')
    }
    get professor() {
        return cy.get('#professor').select()//sta s ovim posto na drugi nacin je odradjeno, da stavim u sendvich kao prilog
    }
    get submit() {
        return cy.get('.btn-primary').contains('Submit')
    }
    get add_student() {
        return cy.get('.btn-primary').contains('Add Student')
    }
    get student_add_image() {
        return cy.get('.btn-primary').contains('Add images')
    }
    get gradebook_filter() {
        return cy.get('input[type=text]')
    }
    get search() {
        return cy.get('.btn-md').contains('Search').click()
    }
    get edit_gradebook() {
        return cy.get('.btn-warning').contains('Edit Gradebook')
    }
    get delete_gradebook() {
        return cy.get('.btn-danger').first().contains('Delete').click()
    }
    get table_dark() {
        return cy.get('.table-dark')
    }
    get my_gradebook() {
        return cy.contains('My Gradebook').click()
    }
    get next_button() {
        return cy.get('.btn-primary').contains('Next').click()
    }
    createGrade(naziv_dnevnika, select_profesora) {
        this.gradebook_title.type(naziv_dnevnika)
        this.professor.type(select_profesora)
        this.submit.click()
    }
    
    
}
export const gradePage = new GradePage()