export default class RegPage {
    get ime() {
        return cy.get('#firstName')
    }
    get prezime() {
        return cy.get('#lastName')
    }
    get email() {
        return cy.get('#email')
    }
    get password() {
        return cy.get('#password')
    }
    get passConfirm() {
        return cy.get('#passwordConfirmation')   
    }
    get checkbox() {
        return cy.get('#termsAndConditions')
    }
    get submit() {
        return cy.get('button[type=submit]')
    }
    get register() {
        return cy.contains('Register')
    }
    /*register(name, surname, email, password, passConf) {
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
      }*/

        
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