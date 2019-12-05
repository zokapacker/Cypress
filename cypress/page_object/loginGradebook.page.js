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
    login(mejl, sifra) {
        this.email.type(mejl)
        this.password.type(sifra)
        this.submit.click()
    }

}

export const logPage = new LogPage()