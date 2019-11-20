export default class RegPage {
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
    get checkbox() {
        return cy.get('input[type=checkbox]')
    }
    get submit() {
        return cy.get('input[type=submit]')
    }
    registerCheck(name, surname, email, password, passConf, checkbox) {
        this.name.type('Pera'),
        this.surname.type('Lenger'),
        this.email.type('zokapacker@gmail.com'),
        this.password.type('mohandas1'),
        this.passConf.type('mohandas1')
        this.checkbox.click()
    }
    ifExist(postoji) {
        if (!postoji) {
            postoji = 'validdata'
            return postoji
        }
    }

        
    }
    
    
    //register(name, Surname) {
        //this.ime.type(Name)
        //this.prezime.type(LastName)
        /*this.email.type(mejl)
        this.password.type(sifra)
        this.passConfirm.type(sifra)
        this.checkbox.click()
        this.submit.click()*/

    
export const regPage = new RegPage()