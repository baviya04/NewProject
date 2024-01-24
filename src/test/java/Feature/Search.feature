  Feature: Validate the search functionality

  Background:
    Given I am on Home page

  Scenario Outline: Search By Products type
     When I enter the "<Product>"on the search button
     Then I should see  "<ActProduct>" results
   Examples:
      |Product | ActProduct |
      |Shoes| Shoes |

   Scenario: Add New USER
     When I enter all the required fields
     Then I should able to register successfully

   Scenario: Verify the Existing user
     When I enter the existing user
     Then I should able to login successfully

   Scenario: Validate the Complete Checkout
     Given I am on Home page
     When I add an item in the shopping cart
     Then I should able to purchase successfully

  Scenario: Validate the Brand tab
    Given  I am on Home page
    When I click on brand and select the brand
    Then I should able to see the selected brand

    @Smoke
    Scenario Outline: Validate the search functionality
      Given I am on Home page
      When I enter "<prod>"
      Then I should see "<result>" and "<prod>"
      Examples:

      |prod|result|prod|
      |bag |bag   |bag |
      |lego|lego  |bag |



































