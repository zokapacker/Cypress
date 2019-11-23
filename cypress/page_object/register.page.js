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
        return cy.get('button[type=submit]')
    }
    register(name, surname, email, password, passConf) {
        this.ime.type(this.ifExist(name)),
        this.prezime.type(this.ifExist(surname)),
        this.email.type(this.ifExist(email)),
        this.password.type(this.ifExist(password)),
        this.passConfirm.type(this.ifExist(passConf))
        this.submit.click()
    }
    ifExist(postoji) {
        if (!postoji) {
            postoji = 'validdata'
            return postoji
        }
    }
    registerCheck({name, surname, email, password, passConf}) {
        this.checkBox.click()
        this.register({name, surname, email, password, passConf})
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