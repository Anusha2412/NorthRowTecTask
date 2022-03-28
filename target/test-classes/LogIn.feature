
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
      | locked_out_user            |   secret_sauce    |
      | problem_user               |   secret_sauce    |
      | performance_glitch_user    |   secret_sauce    |
      | Standard_user              |   secret_sauce    |
      | standard_user              |   Secret_sauce    |










