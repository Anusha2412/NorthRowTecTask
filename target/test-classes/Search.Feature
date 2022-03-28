

Feature: Search random Product

  Scenario:
Given User enter login credentials and is on home page
When User search for random product
And Add it to the cart
Then User should be able to see all the respective products in the cart
