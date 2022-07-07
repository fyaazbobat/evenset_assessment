
class objectives_commands {
    constructor() {
        this.dark_menu_toggle = '.ant-switch-checked > .ant-switch-inner'
        this.nav_one = '#components-menu-demo-theme > .code-box-demo > :nth-child(1) > .ant-menu-root > .ant-menu-item-selected'
        this.nav_two = '#components-menu-demo-theme > .code-box-demo > :nth-child(1) > .ant-menu-root > [data-menu-id="2"]'
        this.nav_three = '#components-menu-demo-theme > .code-box-demo > :nth-child(1) > .ant-menu-root > .ant-menu-submenu-open > [data-menu-id="sub1"]'
        this.nav_four = '#components-menu-demo-theme > .code-box-demo > :nth-child(1) > .ant-menu-root > [data-submenu-id="sub2"] > .ant-menu-submenu-title'
        this.nav_four_down_arrow = '#components-menu-demo-theme > .code-box-demo > :nth-child(1) > .ant-menu-root > [data-submenu-id="sub2"] > .ant-menu-submenu-title > .ant-menu-submenu-arrow'
        this.calc_title = '.calculatorTitle'
        this.calc_a = '#a'
        this.calc_b = '#b'
        this.calc_c = '#c'
        this.calc_button = '#calculateButton'
        this.calc_answer = '#answer > :nth-child(5)'
        this.calc_answer_section = '#MathJax-Element-5-Frame'
        this.calc_answer_num = '#answer > :nth-child(9)'
        this.calc_asnwer_pane = '#answer'
        this.img_add_image = '.UploadPost-addButton > .Button'
        this.img_title = '.UploadPost-postTitle > .UploadPost-editable'
        this.img_new_post_btn = '.NavbarContainer-left > .Button'
        this.img_url_post = '.PopUpActions-textPicker > input'
        this.img_description = '.ImageDescription-editable'
        this.img_first_option = '.TagSuggestions-options > :nth-child(1)'
    }

    /**
     * > This function checks to see if the dark mode toggle is set to 'Dark'
     */
    check_for_darkmode_theme() {
        cy.get(this.dark_menu_toggle).contains('Dark')
    }

    /**
     * "Click the dark theme toggle button and check that the text on the button is 'Light'."
     */
    switch_to_light_theme() {
        cy.get(this.dark_menu_toggle).click().contains('Light')
    }

   /**
    * It selects the menu item.
    */
    select_menu_item() {
        cy.get(this.nav_one).filter('.ant-menu-item-selected')
        cy.get(this.nav_two).click().filter('.ant-menu-item-selected').should('have.text', ' Navigation Two ' )
    }

    /**
     * This function tests the navigation functionality of the website
     */
    test_nav_functionality() {
        cy.get(this.nav_three).siblings().should('have.length', 1)
        cy.get(this.nav_four_down_arrow).parent().should('have.text', 'Navigation Four' )
        cy.get(this.nav_four).click()
        cy.get(this.nav_three).click().children('li').should('have.length', 0)
    }

    /**
     * This function validates that the calculator is displayed and that the title, coefficient a,
     * coefficient b, and coefficient c are displayed as expected
     * @param title - The title of the calculator
     * @param coefficient_a - The placeholder text for the first coefficient input field
     * @param coefficient_b - The placeholder text for the second coefficient input field
     * @param coefficient_c - The placeholder text for the third coefficient input field
     */
    validate_calculator_displayed(title, coefficient_a, coefficient_b, coefficient_c) {
        cy.get(this.calc_title).contains(title)
        cy.get(this.calc_a).invoke('attr', 'placeholder').should('contain', coefficient_a)
        cy.get(this.calc_b).invoke('attr', 'placeholder').should('contain', coefficient_b)
        cy.get(this.calc_c).invoke('attr', 'placeholder').should('contain', coefficient_c)
    }

    /**
     * This function takes in three values, types them into the input fields, and then clicks the
     * calculate button
     * @param aValue - The value of the a variable in the equation
     * @param bValue - The value of b in the equation
     * @param cValue - The value of the c variable in the equation
     */
    calculate_equation(aValue, bValue, cValue, expected_aswer) {
        cy.get(this.calc_a).type(aValue).should('not.have.value', 0)
        cy.get(this.calc_b).type(bValue)
        cy.get(this.calc_c).type(cValue)
        cy.get(this.calc_button).click()
        cy.wait(2000)
        cy.get(this.calc_answer).invoke('text').should('contain', expected_aswer)
    }

    /**
     * This function validates the solution steps and the standard values in the calculator answer pane
     * @param a_b_c_values - The values of a, b, and c that you want to validate.
     * @param standard_values - This is the standard values that are displayed in the answer pane.
     */
    validate_solution_steps(a_b_c_values,standard_values) {
        cy.get(this.calc_asnwer_pane).should('be.visible').invoke('text').should('contain', a_b_c_values)
        cy.get(this.calc_answer_section).invoke('text').should('contain', standard_values)
    }

    /**
     * This function will click on the new post button, then it will check if the url contains the word
     * upload, then it will upload the image, then it will check if the url does not contain the word
     * upload, then it will type in the title, description, and tag, then it will click on the first
     * option
     */
    upload_image() {
        cy.get(this.img_new_post_btn).click() 
        cy.url().should("contain", "/upload");
        cy.get("#file-input").attachFile('leafs.jpeg')
        cy.url().should("not.contain", "/upload");
        cy.get(this.img_title).type('Next Year!!!')
        cy.get(this.img_description).type('Toronto Maple Leafs')
        cy.get('.TagView').type('Toronto Maple Leafs')
        cy.get(this.img_first_option).click()
    }
    /**
     * `validate_api_status()` is a function that waits for the `@validate_status` alias to be called,
     * then checks the response status code of the request to make sure it's equal to 200
     */
    validate_api_status() {
        cy.wait('@validate_status').its('response.statusCode').should('eq',200)
    }
}
export default objectives_commands;