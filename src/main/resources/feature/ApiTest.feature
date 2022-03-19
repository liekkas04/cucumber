@debug
Feature: Pawfit login feature automated testing
  Scenario Outline:
    Given the pawFit login function is initialized
    When  the test all is empty
    When  the test account is empty "<password>"
    Then  check test account is empty result
    When  the test password is empty "<account>"
    Then  check test password is empty result
    When  the test account is error "<error_account>" "<password>"
    Then  check test account is error result
    When  the test password is error "<error_password>" "<account>"
    Then  check test password is error result
    When  the test account and password is correct "<account>" "<password>"
    Then  check test account and password is correct
    Examples:
      |account|password|error_account|error_password|
      |latsen_1@tmpbox.net|@fk123456Aa|fk123456Aa@cc.com|fk123456Aa|
