Feature: Objective 1 - Testing menu themes component

    I want to test functionality of the navagiation panel under menu themes

    Scenario: Switch from dark mode to light mode
        Given I am on the site page
        And the default theme is the “dark” theme
        When I click the theme switch, the selected theme changes to “light”
    
    Scenario: Validate selected navigaion functionality 
        Given I am on the site page
        And the default selected menu item is “Navigation One”
        When I click any other menu item i.e “Navigation Two”, “Option 3”, that menu item is selected


    Scenario: Test navigaion functionality
        Given I am on the site page
        And the “Navigation Three” submenu is open by default
        And the “Navigation Four” submenu is closed by default
        When I click any closed submenu, it opens
        And when I click any open submenu, it closes