#language zh_CN
Feature: Is it Weekend yet?
  Everybody wants to know when it's Weekend
  Background:
    Given open login page
  Scenario Outline: Today is or is not Weekend
    When insert data to name edittext "<name>"
    * insert data to password edittext "<pass>"
    * click login button
    Then login the pawfit shop
    Examples:
      | name | pass |
      | Friday | Nope |
      | fk123456 | Nope |
      | fk1234567 | Nope |
      | fk12345678 | Nope |
      | fk123456789 | Nope |
      | fk1234567890 | Nope |
      | fk20110218@live.com | https://www.apple.com.cn/shop/ |

