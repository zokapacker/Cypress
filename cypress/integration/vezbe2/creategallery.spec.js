import { EMAIL } from "../../fixtures/constants";
import { authPage } from "../../page_object/login.page"
import { createPage } from "../../page_object/creategallery.page"
import { randomTitle } from "../../utils"
import { CREATE } from "../../fixtures/constants"
describe('My third Test', function () {
    beforeEach(() => {
        cy.visit("/login")
        authPage.login(EMAIL.EXISTING, EMAIL.PASSWORD)
    })
    it('TC 01 testiranje paginacije 1. nacin', function() {
        cy.get('.cell').eq(9)
        cy.get('.cell').eq(10).should('not.exist')
        cy.get('.btn-custom').click()
        cy.wait(2000) // nikad ne koristiti eksplicitan wait u milisekundama kao ispod
        
        //cy.get('.cell').eq(19).should('exist')
        cy.get('.cell').eq(20).should('not.exist')
        })
    it('TC 01 testiranje paginacije - 2. nacin', function() {
        cy.get('.grid').children().should('have.length', 10)
        cy.contains('Load More').click()
        cy.get('.grid').children().should('have.length', 20)
    })
    it('TC 02 automatizovati pozitivan test case za create gallery', function() {
        cy.contains('Create Gallery').click()
        createPage.title.type(CREATE.validTitle)
        createPage.description.type(CREATE.descr)
        createPage.images.type(CREATE.picture)
        createPage.submit.click()
    

    })
    it('TC 03 autom. poz. test case za create gallery sa random Title i da li se ona pojavila na home page', function() {
        var random = randomTitle()
        
        cy.contains('Create Gallery').click()
        createPage.create(random, CREATE.descr, CREATE.picture)
        cy.get('.box-title').eq(0).should('contain', random)

        //moze i ovako   cy.get('.box-title').eq(0).should('have.text', CREATE.validTitle)
        // ako ne radi aplikacija a ostao naziv nove galerije isti kao od ranije, 
        // onda napraviti random string koji dodeljuje novi naziv
        // 1. import random funkcije (utils.js)
        // 2. var random = funkcija()
        // 3. type (random)
        // 4. (contains, random)
    })
    it.only('TC 04 testiranje dodavanja input polja za sliku', function() {
        cy.contains('Create Gallery').click()
        createPage.addImage.click()
        createPage.images.should('have.length', 2)
        createPage.deleteButton.last().click()
        createPage.images.should('have.length', 1)
        createPage.addImage.click()
        createPage.images.last().type('dole')
        createPage.images.first().type('gore')
        createPage.buttonUp.last().click()
        createPage.images.first().should('contain', 'dole')
    })  // za sta se uhvatiti da bi proverili da li je donje polje posle klika otislo gore?
    it('TC 05 testiranje input polja TITLE na negativne slucajeve', function() {
        cy.contains('Create Gallery').click()
        createPage.create('1', CREATE.descr, CREATE.picture)
        createPage.alert.should('have.text', 'The title must be at least 2 characters.')
        
    })
    it('TC 06 testiranje input polja TITLE na negativne slucajeve', function() {
        cy.contains('Create Gallery').click()
        createPage.create(' ',CREATE.descr,CREATE.picture)
        createPage.alert.should('have.text', 'The title field is required.')
    })
    it('TC 07 testiranje input polja TITLE na negativne slucajeve', function() {
        cy.contains('Create Gallery').click()
        createPage.create(CREATE.invalidTitle, CREATE.descr, CREATE.picture)
        createPage.alert.should('have.text', 'The title may not be greater than 255 characters.')
    })
    it('TC 08 testiranje input polja DESCRIPTION', function() {
        cy.contains('Create Gallery').click()
        createPage.create(CREATE.validTitle, CREATE.descr1000, CREATE.picture)
        cy.get('.box-title').eq(0).should('contain', CREATE.validTitle)
        //cy.get('.box-title').eq(0).click()????
        //cy.should('contain', CREATE.descr1000)//????
        //cy.get('.p').should('have.text', CREATE.descr1000)// da li gadjati title ili descr da bi proverili da li je dodat descr od 1000 karaktera

    })
    it('TC 09 testiranje CANCEL button', function() {
        cy.contains('Create Gallery').click()
        createPage.cancel.click()
        createPage.title.should('not.exist'), createPage.description.should('not.exist'), createPage.images.should('not.exist')
    })
    



    
    })