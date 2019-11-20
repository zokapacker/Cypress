export default class AuthPage {
    get ime() {
        return cy.get('input[id="first-name"]')
    }
    get prezime() {
        return cy.get('input[id="last-name"]')
    }
    get email() {
        return cy.get('input[id="email"]')
    }
    get password() {
        return cy.get('input[id="password"]')
    }
    get passConfirm() {
        return cy.get('input[id="password-confirmation"]')   
    }
    
    get submit() { 
        return cy.get('button[type=submit]')
    }
    get checkbox() {
        return cy.get('input[type=checkbox]')
    }
    get alert() {
        return cy.get('.alert-danger')
    }
    register(Name, LastName) {
        this.ime.type(Name)
        this.prezime.type(LastName)
    }

    login(mejl, sifra) {
        this.email.type(mejl)
        this.password.type(sifra)
        this.submit.click()
    }

}

export const authPage = new AuthPage()