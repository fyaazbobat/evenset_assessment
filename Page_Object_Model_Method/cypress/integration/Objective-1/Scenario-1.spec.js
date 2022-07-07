
describe('Scenario 1: Theme switch - When clicked on theme toggle, the slected theme changes from dark to light',  () => {

    //import necessary env
    const obj_1 = Cypress.env('objectives_commands')
  
    beforeEach(() => {
        cy.visit('https://www.antdv.com/components/menu/#Menu-Themes', {failOnStatusCode: false})
    })
    
    it('Check ability to switch from "dark" theme to "light"', () => {
       
        cy.log('I can see url path is on the correct page')
        cy.verifyUrl()

        cy.log('I can see dark mode text on the toggle')
        obj_1.check_for_darkmode_theme()
        
        cy.log('I can see light mode text when clicked on the toggle')
        obj_1.switch_to_light_theme()
    
    })
})

    