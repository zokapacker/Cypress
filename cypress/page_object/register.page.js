export default class RegPage {
    get ime() {
        return cy.get('input[id="first-name"]')
    }
    get prezime() {
        return cy.get('input[id="last-name"]')
    }
    get passConfirm() {
        return cy.get('input[id="password-confirmation"]')   
    }
    get checkbox() {
        return cy.get('input[type=checkbox]')
    }
    register(Name, LastName) {
        this.ime.type(Name)
        this.prezime.type(LastName)
        /*this.email.type(mejl)
        this.password.type(sifra)
        this.passConfirm.type(sifra)
        this.checkbox.click()
        this.submit.click()*/

    }
}
export const regPage = new RegPage()