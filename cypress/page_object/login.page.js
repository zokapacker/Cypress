export default class AuthPage {
    get email() {
        return cy.get('input[id="email"]')
    }
    get password() {
        return cy.get('input[id="password"]')
    }
    get submit() { 
        return cy.get('button[type=submit]')
    }
    get alert() {
        return cy.get('.alert-danger')
    }
    login(mejl, sifra) {
        this.email.type(mejl)
        this.password.type(sifra)
        this.submit.click()
    }

}

export const authPage = new AuthPage()