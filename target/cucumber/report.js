$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/rad7/Desktop/Cucumber/src/main/resources/feature/ApiTest.feature");
formatter.feature({
  "line": 2,
  "name": "Pawfit login feature automated testing",
  "description": "",
  "id": "pawfit-login-feature-automated-testing",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@debug"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "",
  "description": "",
  "id": "pawfit-login-feature-automated-testing;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the pawFit login function is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the test all is empty",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "the test account is empty \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "check test account is empty result",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "the test password is empty \"\u003caccount\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "check test password is empty result",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the test account is error \"\u003cerror_account\u003e\" \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "check test account is error result",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the test password is error \"\u003cerror_password\u003e\" \"\u003caccount\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "check test password is error result",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "the test account and password is correct \"\u003caccount\u003e\" \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "check test account and password is correct",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "pawfit-login-feature-automated-testing;;",
  "rows": [
    {
      "cells": [
        "account",
        "password",
        "error_account",
        "error_password"
      ],
      "line": 17,
      "id": "pawfit-login-feature-automated-testing;;;1"
    },
    {
      "cells": [
        "latsen_1@tmpbox.net",
        "@fk123456Aa",
        "fk123456Aa@cc.com",
        "fk123456Aa"
      ],
      "line": 18,
      "id": "pawfit-login-feature-automated-testing;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "",
  "description": "",
  "id": "pawfit-login-feature-automated-testing;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@debug"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "the pawFit login function is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the test all is empty",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "the test account is empty \"@fk123456Aa\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "check test account is empty result",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "the test password is empty \"latsen_1@tmpbox.net\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "check test password is empty result",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the test account is error \"fk123456Aa@cc.com\" \"@fk123456Aa\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "check test account is error result",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the test password is error \"fk123456Aa\" \"latsen_1@tmpbox.net\"",
  "matchedColumns": [
    0,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "check test password is error result",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "the test account and password is correct \"latsen_1@tmpbox.net\" \"@fk123456Aa\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "check test account and password is correct",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});