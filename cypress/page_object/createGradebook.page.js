export default class CreateGradePage {
    get gradebook_title() {
        return cy.get('#title')
    }
    get professor() {
        return cy.get('#professor')
    }
    get submit() {
        return cy.get('button[type=submit]')
    }
    
    createProf(ime, prezime, urlSlike) {
        this.first_name.type(ime)
        this.last_name.type(prezime)
        this.add_images.click()
        this.image_url.type(urlSlike)
        this.submit.click()
    }
    
    
}
export const createGradePage = new CreateGradePage()