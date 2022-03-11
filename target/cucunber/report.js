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
  "location": "isWeekendSteps.todayIs(String)"
});
