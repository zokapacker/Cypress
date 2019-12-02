export default class LogPage {
    
    get email() {
        return cy.get('input[name="email"]')
    }
    get password() {
        return cy.get('input[name="password"]')
    }
    get submit() { 
        return cy.get('button[type=submit]')
    }
    get gradebook_filter() {
        return cy.get('input[type=text]')
    }
    get search() {
        return cy.get('.btn-md').contains('Search')
    }
    login(mejl, sifra) {
        this.email.type(mejl)
        this.password.type(sifra)
        this.submit.click()
    }

}

export const logPage = new LogPage()