Feature: Is it Weekend yet?
  Everybody wants to know when it's Weekend

  Scenario Outline: Today is or is not Weekend
    Given 用户在pawfit shop登录页停留
    When 用户输入登录账号
    Then 用户输入登录密码
    Examples:
      | day | answer |
      | Friday | Nope |
      | Sunday | Yeah |
      | anything else! | Nope |
