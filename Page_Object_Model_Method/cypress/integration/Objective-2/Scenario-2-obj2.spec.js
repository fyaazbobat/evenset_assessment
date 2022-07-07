describe('Objective 2 - Scenario 2: Quadratic Formula Calculator - Validate solution step is visible',  () => {

    //import necessary env
    const obj_2 = Cypress.env('objectives_commands')
      
    // information
    const title = 'Quadratic Formula Calculator'
    const coefficient_a = 'coefficient a'
    const coefficient_b = 'coefficient b'
    const coefficient_c = 'coefficient c'
    const aValue = 4
    const bValue = 2
    const cValue = 3
    const expected_aswer = '0.25+0.829156'
    const standard_values = '4𝑥2+2𝑥+3=0'
    const a_b_c_values = 'a = 4, b = 2, and c = 3'

    beforeEach(() => {
        cy.visit('https://www.calculatorsoup.com/calculators/algebra/quadratic-formula-calculator.php')
    })
    
    it('Check ability to validate solution step is visible for the equation', () => {
       
        cy.log('I can see url path is on the correct page')
        cy.obj2verifyUrl()

        cy.log('I validate calculator title is equal to ' + title + ' and placeholder for a, b, c')
        obj_2.validate_calculator_displayed(title, coefficient_a, coefficient_b, coefficient_c)

        cy.log('I enter the values for a, b, c and validate a != 0')
        obj_2.calculate_equation(aValue, bValue, cValue,expected_aswer)

        cy.log('I validate steps for solution is visible')
        obj_2.validate_solution_steps(a_b_c_values, standard_values, )
    })
})
/*
Scenario 2
Given I am on the https://www.calculatorsoup.com/calculators/algebra/quadratic-formula-calculator.php page
When I enter the number a=1, b=1, c=1 in the corresponding field 
And a != 0
Then I can see my values in the solution
*/