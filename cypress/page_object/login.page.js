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

}

export const authPage = new AuthPage()