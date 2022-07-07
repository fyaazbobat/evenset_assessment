class Obj_1_Scenario_1_pom {
 
    static visitPage() {
        cy.visit('https://www.antdv.com/components/menu/#Menu-Themes', {failOnStatusCode: false})
    }

    /**
     * > This function checks to see if the dark mode toggle is set to 'Dark'
     */
    static check_for_darkmode_theme() {
        this.dark_menu_toggle = '.ant-switch-checked > .ant-switch-inner'
        cy.get(this.dark_menu_toggle).contains('Dark')
    }

    /**
     * "Click the dark theme toggle button and check that the text on the button is 'Light'."
     */
    static switch_to_light_theme() {
        cy.get(this.dark_menu_toggle).click().contains('Light')
    }
    
    static default_selected_menu() {
        this.nav_one = '#components-menu-demo-theme > .code-box-demo > :nth-child(1) > .ant-menu-root > .ant-menu-item-selected'
        cy.get(this.nav_one).filter('.ant-menu-item-selected')
    }
    /**
    * It selects the menu item.
    */
    static select_menu_item() {
        this.nav_two = '#components-menu-demo-theme > .code-box-demo > :nth-child(1) > .ant-menu-root > [data-menu-id="2"]'
        cy.get(this.nav_two).click().filter('.ant-menu-item-selected').should('have.text', ' Navigation Two ' )
    }

    static nav_3_open_by_default() {
        this.nav_three = '#components-menu-demo-theme > .code-box-demo > :nth-child(1) > .ant-menu-root > .ant-menu-submenu-open > [data-menu-id="sub1"]'
        cy.get(this.nav_three).siblings().should('have.length', 1)
    }

    static nav_4_closed_by_default() {
        this.nav_four_down_arrow = '#components-menu-demo-theme > .code-box-demo > :nth-child(1) > .ant-menu-root > [data-submenu-id="sub2"] > .ant-menu-submenu-title > .ant-menu-submenu-arrow'
        cy.get(this.nav_four_down_arrow).parent().should('have.text', 'Navigation Four' )
    }

    static open_closed_menu() {
        this.nav_four = '#components-menu-demo-theme > .code-box-demo > :nth-child(1) > .ant-menu-root > [data-submenu-id="sub2"] > .ant-menu-submenu-title'
        cy.get(this.nav_four).click()
    }

    static close_open_menu() {
        this.nav_three = '#components-menu-demo-theme > .code-box-demo > :nth-child(1) > .ant-menu-root > .ant-menu-submenu-open > [data-menu-id="sub1"]'
        cy.get(this.nav_three).click().children('li').should('have.length', 0)
    }
}
export default Obj_1_Scenario_1_pom;