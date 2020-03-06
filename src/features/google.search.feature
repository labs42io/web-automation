Feature: Performing a Google Search

    As a user on the Google search page
    I want to search for Selenium-Webdriver
    Because I want to learn more about it

    Background:
        Given I open the url "https://google.com"

    Scenario: Searching for unknown term
        When I set "cO8QFWBdl0jJD5AHFOox" to the inputfield "[name=q]"
        And  I press "Enter"
        Then I expect that element "#search" becomes not displayed

    # The @Verbose tag adds a screenshot and additional test metadata.
    @Verbose
    Scenario Outline: Searching for term "<searchItem>"
        When I set "<searchItem>" to the inputfield "[name=q]"
        And  I press "Enter"
        Then I expect that element "#search" becomes displayed

        Examples:
        |searchItem|
        |Selenium Webdriver|
        |Docker|
        |Labs42|