
@Login
Feature: As a end user I want to test Login is working as required


  Scenario Outline:
    Given User is on LogIn page
    When User enters username as "<username>" and Password as "<password>"
    And Click on Login button
    Then User should login successfully

    Examples:
      | username                   |   password        |
      | standard_user              |   secret_sauce    |




  Scenario:
    Given User enter login credentials and is on home page
    When User search for random product
    And Add it to the cart
    Then User should be able to see all the respective products in the cart





