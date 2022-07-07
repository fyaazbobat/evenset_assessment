
describe('Scenario 3: Navigation - When clicked on another nav menu, it is slected',  () => {

    //import necessary env
    const obj_1 = Cypress.env('objectives_commands')
      
    beforeEach(() => {
        cy.visit('https://www.antdv.com/components/menu/#Menu-Themes', {failOnStatusCode: false})

    })
    
    it('Check ability to switch navigation menus', () => {
       
        cy.log('I can see url path is on the correct page')
        cy.verifyUrl()

        cy.log('I can validate nav 3 is open by default and nav 4 is closed by default ')
        obj_1.test_nav_functionality()
    })
})

   