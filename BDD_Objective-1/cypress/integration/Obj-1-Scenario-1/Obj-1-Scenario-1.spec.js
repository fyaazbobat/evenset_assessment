import {Given, When} from "cypress-cucumber-preprocessor/steps"
import Obj_1_Scenario_1_pom from './Obj_1_Scenario_1_pom'

//scenario 1
Given('I am on the site page', () => {
    Obj_1_Scenario_1_pom.visitPage()
})

And('the default theme is the “dark” theme', () => {
    Obj_1_Scenario_1_pom.check_for_darkmode_theme()
})

When('I click the theme switch, the selected theme changes to “light”', () => {
    Obj_1_Scenario_1_pom.switch_to_light_theme()
})

//scenario 2
Given('I am on the site page', () => {
    Obj_1_Scenario_1_pom.visitPage()
})

And('the default selected menu item is “Navigation One”', () => {
    Obj_1_Scenario_1_pom.default_selected_menu()
})

When('I click any other menu item i.e “Navigation Two”, “Option 3”, that menu item is selected', () => {
    Obj_1_Scenario_1_pom.select_menu_item()
})

//scenario 3
Given('I am on the site page', () => {
    Obj_1_Scenario_1_pom.visitPage()
})

And('the “Navigation Three” submenu is open by default', () => {
    Obj_1_Scenario_1_pom.nav_3_open_by_default()
})

And('the “Navigation Four” submenu is closed by default', () => {
    Obj_1_Scenario_1_pom.nav_4_closed_by_default()
})

When('I click any closed submenu, it opens', () => {
    Obj_1_Scenario_1_pom.open_closed_menu()
})

And('when I click any open submenu, it closes', () => {
    Obj_1_Scenario_1_pom.close_open_menu()
})
