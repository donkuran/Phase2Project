Feature: This feature will be used to validate Products and Prices

  Background: Open the application
    Given I have opened the application in a browser
    When I have successfully open the application
    And I enter username "standard_user"
    And I enter password "secret_sauce"
    And I click on the Login Button
    Then I should land on the products page

  @Regression
  Scenario: Validate product prices
    When I have have landed on the products page
    Then Products prices should be as below
      | Sauce Labs Backpack               | $29.99 |
      | Sauce Labs Bike Light             | $9.99  |
      | Sauce Labs Bolt T-Shirt           | $15.99 |
      | Sauce Labs Fleece Jacket          | $49.99 |
      | Sauce Labs Onesie                 | $7.99  |
      | Test.allTheThings() T-Shirt (Red) | $15.99 |
