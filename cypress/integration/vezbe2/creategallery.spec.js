import { EMAIL } from "../../fixtures/constants";
import { authPage } from "../../page_object/login.page"
import { createPage } from "../../page_object/creategallery.page"
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
        cy.get('div.grid').children().should('have.length', 10)
        cy.contains('Load More').click()
        cy.get('div.grid').children().should('have.length', 20)
    })
    it('TC 02 automatizovati pozitivan test case za create gallery', function() {
        cy.contains('Create Gallery').click()
        createPage.title.type('vezba2')
        createPage.description.type('opis2')
        createPage.images.type('https://thumbs-prod.si-cdn.com/axLBu4V_KP6gbQQtbRulSdlWkXQ=/420x240/https://public-media.si-cdn.com/filer/28/bc/28bc19a4-ec88-4e71-9ff2-19efc1375e6c/ap_18295547401274.jpg')
        createPage.submit.click()
    

    })
    it.only('TC 03 automatizovati pozitivan test case za create gallery', function() {
        cy.contains('Create Gallery').click()
        createPage.create('dada','dada','https://thumbs-prod.si-cdn.com/axLBu4V_KP6gbQQtbRulSdlWkXQ=/420x240/https://public-media.si-cdn.com/filer/28/bc/28bc19a4-ec88-4e71-9ff2-19efc1375e6c/ap_18295547401274.jpg')
        cy.get('.box-title').eq(0).should('have.text', 'dada')
        // ili smo mogli cy.get('.box-title').eq(0).should('contain', 'dada')
        // ako ne radi aplikacija a ostao naziv nove galerije isti kao od ranije, 
        // onda napraviti random string koji dodeljuje novi naziv
        // 1. import random funkcije (utils.js)
        // 2. var random = funkcija()
        // 3. type (random)
        // 4. (contains, random)
    })
})