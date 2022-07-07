describe('Objective 3 - Scenario 1: Upload - Validate upload functionality',  () => {

    //import necessary env
    const obj_2 = Cypress.env('objectives_commands')
      
    // information
    const validation = "validate_status"


    beforeEach(() => {
        cy.visit('https://imgur.com/')
    })
    
    it('Check ability to image', () => {
        cy.intercept("POST", 'https://t.imgur.com/').as(validation)
        
        cy.log('I assert homepage is loaded')
        cy.get('.App-cover').should('be.visible')
        
        cy.log('I upload image')
        obj_2.upload_image()
        
    })
})