
describe('Scenario 2: Navigation - When clicked on another nav menu, it is slected',  () => {

    //import necessary env
    const obj_1 = Cypress.env('objectives_commands')
      
    beforeEach(() => {
        cy.visit('https://www.antdv.com/components/menu/#Menu-Themes', {failOnStatusCode: false})

    })
    
    it('Check ability to switch navigation menus', () => {
       
        cy.log('I can see url path is on the correct page')
        cy.verifyUrl()

        cy.log('I can see navigation One is selected and I can select navigation Two')
        obj_1.select_menu_item()
    })
})

   