Feature: Latlong.net login

    Scenario: Login flow
        Given I access Latlong login page
        And I fill in my credentials
        When I click Login button
        Then I am logged in successfully