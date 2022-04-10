Feature: This feature will be used to validate the Login page

  Background: Open the application
    Given I have opened the application in a browser

  @Sanity
  Scenario Outline: Validate successful login
    When I have successfully open the application
    And I enter username "<Username>"
    And I enter password "<password>"
    And I click on the Login Button
    Then I should land on the products page

    Examples: 
      | UserName      | Password     |
      | standard_user | secret_sauce |

  @Regression
  Scenario Outline: Validate negative login
    When I have successfully open the application
    And I enter username "<Username>"
    And I enter password "<password>"
    And I click on the Login Button
    Then I should be get the error message "Epic sadface: Username and password do not match any user in this service"

    Examples: 
      | UserName        | Password     |
      | locked_out_user | secret_sauce |
