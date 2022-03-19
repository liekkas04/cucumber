$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/rad7/Desktop/Cucumber/src/main/resources/feature/pawfitShop.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language zh_CN"
    }
  ],
  "line": 3,
  "name": "Is it Weekend yet?",
  "description": "Everybody wants to know when it\u0027s Weekend",
  "id": "is-it-weekend-yet?",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@debug"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Today is or is not Weekend",
  "description": "",
  "id": "is-it-weekend-yet?;today-is-or-is-not-weekend",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "insert data to name edittext \"\u003cname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "insert data to password edittext \"\u003cpass\u003e\"",
  "keyword": "* "
});
formatter.step({
  "line": 10,
  "name": "click login button",
  "keyword": "* "
});
formatter.step({
  "line": 11,
  "name": "login the pawfit shop",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "is-it-weekend-yet?;today-is-or-is-not-weekend;",
  "rows": [
    {
      "cells": [
        "name",
        "pass"
      ],
      "line": 13,
      "id": "is-it-weekend-yet?;today-is-or-is-not-weekend;;1"
    },
    {
      "cells": [
        "Friday",
        "Nope"
      ],
      "line": 14,
      "id": "is-it-weekend-yet?;today-is-or-is-not-weekend;;2"
    },
    {
      "cells": [
        "fk20110218@live.com",
        "https://www.apple.com.cn/shop/"
      ],
      "line": 15,
      "id": "is-it-weekend-yet?;today-is-or-is-not-weekend;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "open login page",
  "keyword": "When "
});
formatter.match({
  "location": "TestPawfitShopLogin.open_login_page()"
});
formatter.result({
  "duration": 15314587622,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Today is or is not Weekend",
  "description": "",
  "id": "is-it-weekend-yet?;today-is-or-is-not-weekend;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@debug"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "insert data to name edittext \"Friday\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "insert data to password edittext \"Nope\"",
  "matchedColumns": [
    1
  ],
  "keyword": "* "
});
formatter.step({
  "line": 10,
  "name": "click login button",
  "keyword": "* "
});
formatter.step({
  "line": 11,
  "name": "login the pawfit shop",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Friday",
      "offset": 30
    }
  ],
  "location": "TestPawfitShopLogin.insert_data_to_name_edittext(String)"
});
formatter.result({
  "duration": 311970510,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nope",
      "offset": 34
    }
  ],
  "location": "TestPawfitShopLogin.insert_data_to_password_edittext(String)"
});
formatter.result({
  "duration": 174306118,
  "status": "passed"
});
formatter.match({
  "location": "TestPawfitShopLogin.click_login_button()"
});
formatter.result({
  "duration": 183288391,
  "status": "passed"
});
formatter.match({
  "location": "TestPawfitShopLogin.login_the_pawfit_shop()"
});
formatter.result({
  "duration": 2677399,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[2]\u003e but was:\u003c[1]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat cn.cucumber.fk.TestPawfitShopLogin.login_the_pawfit_shop(TestPawfitShopLogin.java:41)\r\n\tat ✽.Then login the pawfit shop(C:/Users/rad7/Desktop/Cucumber/src/main/resources/feature/pawfitShop.feature:11)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "open login page",
  "keyword": "When "
});
formatter.match({
  "location": "TestPawfitShopLogin.open_login_page()"
});
formatter.result({
  "duration": 10738335845,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Today is or is not Weekend",
  "description": "",
  "id": "is-it-weekend-yet?;today-is-or-is-not-weekend;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@debug"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "insert data to name edittext \"fk20110218@live.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "insert data to password edittext \"https://www.apple.com.cn/shop/\"",
  "matchedColumns": [
    1
  ],
  "keyword": "* "
});
formatter.step({
  "line": 10,
  "name": "click login button",
  "keyword": "* "
});
formatter.step({
  "line": 11,
  "name": "login the pawfit shop",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "fk20110218@live.com",
      "offset": 30
    }
  ],
  "location": "TestPawfitShopLogin.insert_data_to_name_edittext(String)"
});
formatter.result({
  "duration": 176215851,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.apple.com.cn/shop/",
      "offset": 34
    }
  ],
  "location": "TestPawfitShopLogin.insert_data_to_password_edittext(String)"
});
formatter.result({
  "duration": 220686033,
  "status": "passed"
});
formatter.match({
  "location": "TestPawfitShopLogin.click_login_button()"
});
formatter.result({
  "duration": 5073543770,
  "status": "passed"
});
formatter.match({
  "location": "TestPawfitShopLogin.login_the_pawfit_shop()"
});
formatter.result({
  "duration": 324008,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[2]\u003e but was:\u003c[1]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat cn.cucumber.fk.TestPawfitShopLogin.login_the_pawfit_shop(TestPawfitShopLogin.java:41)\r\n\tat ✽.Then login the pawfit shop(C:/Users/rad7/Desktop/Cucumber/src/main/resources/feature/pawfitShop.feature:11)\r\n",
  "status": "failed"
});
});