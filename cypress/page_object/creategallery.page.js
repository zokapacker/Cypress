export default class CreatePage {
    get title() {
        return cy.get('#title')
    }
    get description() {
        return cy.get('#description')
    }
    get images() {
        return cy.get('input[type="url"]')
    }
    get submit() {
        return cy.get('.btn-custom').contains('Submit').click()
    }
    get cancel() {
        return cy.get('.btn-custom').contains('Cancel').click()
    }
    get addImage() {
        return cy.contains('Add Image')
    }
    create(title, description, images) {
        this.title.type(title)
        this.description.type(description)
        this.images.type(images)
        this.submit.click()
    }
    
    
}
export const createPage = new CreatePage()