$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/rad7/Desktop/Cucumber/src/main/resources/feature/cucumber.feature");
formatter.feature({
  "line": 1,
  "name": "Is it Weekend yet?",
  "description": "Everybody wants to know when it\u0027s Weekend",
  "id": "is-it-weekend-yet?",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Today is or is not Weekend",
  "description": "",
  "id": "is-it-weekend-yet?;today-is-or-is-not-weekend",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "today is \"\u003cday\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I ask whether it\u0027s Weekend yet",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should be told \"\u003canswer\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "is-it-weekend-yet?;today-is-or-is-not-weekend;",
  "rows": [
    {
      "cells": [
        "day",
        "answer"
      ],
      "line": 10,
      "id": "is-it-weekend-yet?;today-is-or-is-not-weekend;;1"
    },
    {
      "cells": [
        "Friday",
        "Nope"
      ],
      "line": 11,
      "id": "is-it-weekend-yet?;today-is-or-is-not-weekend;;2"
    },
    {
      "cells": [
        "Sunday",
        "Yeah"
      ],
      "line": 12,
      "id": "is-it-weekend-yet?;today-is-or-is-not-weekend;;3"
    },
    {
      "cells": [
        "anything else!",
        "Nope"
      ],
      "line": 13,
      "id": "is-it-weekend-yet?;today-is-or-is-not-weekend;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Today is or is not Weekend",
  "description": "",
  "id": "is-it-weekend-yet?;today-is-or-is-not-weekend;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "today is \"Friday\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I ask whether it\u0027s Weekend yet",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should be told \"Nope\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Friday",
      "offset": 10
    }
  ],
  "location": "isWeekendSteps.today_is(String)"
});
formatter.result({
  "duration": 119212630,
  "status": "passed"
});
formatter.match({
  "location": "isWeekendSteps.i_ask_whether_it_s_Weekend_yet()"
});
formatter.result({
  "duration": 66164,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nope",
      "offset": 18
    }
  ],
  "location": "isWeekendSteps.i_should_be_told(String)"
});
formatter.result({
  "duration": 1449722,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Today is or is not Weekend",
  "description": "",
  "id": "is-it-weekend-yet?;today-is-or-is-not-weekend;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "today is \"Sunday\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I ask whether it\u0027s Weekend yet",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should be told \"Yeah\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Sunday",
      "offset": 10
    }
  ],
  "location": "isWeekendSteps.today_is(String)"
});
formatter.result({
  "duration": 54415,
  "status": "passed"
});
formatter.match({
  "location": "isWeekendSteps.i_ask_whether_it_s_Weekend_yet()"
});
formatter.result({
  "duration": 21024,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yeah",
      "offset": 18
    }
  ],
  "location": "isWeekendSteps.i_should_be_told(String)"
});
formatter.result({
  "duration": 55652,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Today is or is not Weekend",
  "description": "",
  "id": "is-it-weekend-yet?;today-is-or-is-not-weekend;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "today is \"anything else!\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I ask whether it\u0027s Weekend yet",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should be told \"Nope\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "anything else!",
      "offset": 10
    }
  ],
  "location": "isWeekendSteps.today_is(String)"
});
formatter.result({
  "duration": 57506,
  "status": "passed"
});
formatter.match({
  "location": "isWeekendSteps.i_ask_whether_it_s_Weekend_yet()"
});
formatter.result({
  "duration": 17623,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nope",
      "offset": 18
    }
  ],
  "location": "isWeekendSteps.i_should_be_told(String)"
});
formatter.result({
  "duration": 167882,
  "status": "passed"
});
});