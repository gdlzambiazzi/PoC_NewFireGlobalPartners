Feature: API tests on demoqa (Book Store)

  Scenario: Execute getAllBooks, asserts status code and book  names
    Given I execute getAllBooks API
    Then I can see all the books
    And getAllBooks API returned status 200
    And it contains the book "Git Pocket Guide"
    And it contains the book "Learning JavaScript Design Patterns"