describe('Objective 2 - Scenario 1: Quadratic Formula Calculator - Solve second order polynomial equation',  () => {

    //import necessary env
    const obj_2 = Cypress.env('objectives_commands')

    // information
    const title = 'Quadratic Formula Calculator'
    const coefficient_a = 'coefficient a'
    const coefficient_b = 'coefficient b'
    const coefficient_c = 'coefficient c'
    const aValue = 1
    const bValue = 1
    const cValue = 1
    const expected_aswer = '0.5+0.866025'

      
    beforeEach(() => {
        cy.visit('https://www.calculatorsoup.com/calculators/algebra/quadratic-formula-calculator.php')
    })
    
    it('Check ability solve second order polynomial equation', () => {
       
        cy.log('I can see url path is on the correct page')
        cy.obj2verifyUrl()

        cy.log('I validate calculator title is equal to ' + title + ' and placeholder for a, b, c')
        obj_2.validate_calculator_displayed(title, coefficient_a, coefficient_b, coefficient_c)

        cy.log('I enter the values for a, b, c and validate a != 0')
        obj_2.calculate_equation(aValue, bValue, cValue, expected_aswer)
    })
})
/*
Scenario 1
Given I am on the https://www.calculatorsoup.com/calculators/algebra/quadratic-formula-calculator.php page
When I enter the number a=1, b=1, c=1 in the corresponding field 
And a != 0
Then I should see the answer 0.5 display right below
*/