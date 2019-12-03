export default class CreateProfPage {
    get first_name() {
        return cy.get('#firstName')
    }
    get last_name() {
        return cy.get('#lastName')
    }
    get add_images() {
        return cy.get('.btn-sm').contains('Add images')
    }
    get remove_image() {
        return cy.get('.btn-sm').contains('Remove image')
    }
    get move_up_image() {
        return cy.get('.btn-sm').contains('Move image up')
    }
    get move_down_image() {
        return cy.get('.btn-sm').contains('Move image down')
    }
    get submit() {
        return cy.get('button[type=submit]')
    }
    get image_url() {
        return cy.get('input[name=image_NaN]')
    }
    
    createProf(ime, prezime, urlSlike) {
        this.first_name.type(ime)
        this.last_name.type(prezime)
        this.add_images.click()
        this.image_url.type(urlSlike)
        this.submit.click()
    }
    
    
}
export const createProfPage = new CreateProfPage()