$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("codingExercise.feature");
formatter.feature({
  "line": 1,
  "name": "Coding exercise UniSuper",
  "description": "",
  "id": "coding-exercise-unisuper",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8882393885,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Adding todo items",
  "description": "",
  "id": "coding-exercise-unisuper;adding-todo-items",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am at the Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click the AngularJS link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I type \"First Text\" in the todo box",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click Enter button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I can see \"First Text\" in the list",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.home_url()"
});
formatter.result({
  "duration": 4275543580,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.AngularJS_link_click()"
});
formatter.result({
  "duration": 3763738361,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First Text",
      "offset": 8
    }
  ],
  "location": "stepdef.type_todo_box(String)"
});
formatter.result({
  "duration": 472965946,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_Enter()"
});
formatter.result({
  "duration": 60547018,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First Text",
      "offset": 11
    }
  ],
  "location": "stepdef.verify_list(String)"
});
formatter.result({
  "duration": 29723167,
  "status": "passed"
});
formatter.after({
  "duration": 605537688,
  "status": "passed"
});
formatter.before({
  "duration": 4941441562,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Modifying todo items",
  "description": "",
  "id": "coding-exercise-unisuper;modifying-todo-items",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am at the Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click the AngularJS link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I type \"First Text\" in the todo box",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click Enter button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I can see \"First Text\" in the list",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I doubleclick on the \"First Text\" in the list",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I type \"First Text Modified\" in the first list item",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click Enter button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I can see \"First Text Modified\" in the list",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.home_url()"
});
formatter.result({
  "duration": 3905727445,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.AngularJS_link_click()"
});
formatter.result({
  "duration": 2994520935,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First Text",
      "offset": 8
    }
  ],
  "location": "stepdef.type_todo_box(String)"
});
formatter.result({
  "duration": 448015543,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_Enter()"
});
formatter.result({
  "duration": 62120705,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First Text",
      "offset": 11
    }
  ],
  "location": "stepdef.verify_list(String)"
});
formatter.result({
  "duration": 33362346,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First Text",
      "offset": 22
    }
  ],
  "location": "stepdef.doubleclick_first_element(String)"
});
formatter.result({
  "duration": 255906456,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First Text Modified",
      "offset": 8
    }
  ],
  "location": "stepdef.modify_first_list_item(String)"
});
formatter.result({
  "duration": 64128086,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_Enter()"
});
formatter.result({
  "duration": 34240842,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First Text Modified",
      "offset": 11
    }
  ],
  "location": "stepdef.verify_list(String)"
});
formatter.result({
  "duration": 31672010,
  "status": "passed"
});
formatter.after({
  "duration": 517254802,
  "status": "passed"
});
formatter.before({
  "duration": 4667585754,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Complete todo items",
  "description": "",
  "id": "coding-exercise-unisuper;complete-todo-items",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "I am at the Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I click the AngularJS link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I type \"First Text\" in the todo box",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click Enter button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I can see \"First Text\" in the list",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I click on completed checkbox of first item",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I see the first item is striked out",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.home_url()"
});
formatter.result({
  "duration": 4008527737,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.AngularJS_link_click()"
});
formatter.result({
  "duration": 4413831103,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First Text",
      "offset": 8
    }
  ],
  "location": "stepdef.type_todo_box(String)"
});
formatter.result({
  "duration": 466474645,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_Enter()"
});
formatter.result({
  "duration": 52212414,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First Text",
      "offset": 11
    }
  ],
  "location": "stepdef.verify_list(String)"
});
formatter.result({
  "duration": 44149134,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_completed_checkbox()"
});
formatter.result({
  "duration": 70614687,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.verify_first_item_striked_out()"
});
formatter.result({
  "duration": 17439175,
  "status": "passed"
});
formatter.after({
  "duration": 694414926,
  "status": "passed"
});
formatter.before({
  "duration": 4898700757,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Reactivate todo items",
  "description": "",
  "id": "coding-exercise-unisuper;reactivate-todo-items",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "I am at the Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I click the AngularJS link",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I type \"First Text\" in the todo box",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click Enter button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I can see \"First Text\" in the list",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "I click on completed checkbox of first item",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I see the first item is striked out",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I click on completed checkbox of first item",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I see the first item active",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.home_url()"
});
formatter.result({
  "duration": 3726842802,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.AngularJS_link_click()"
});
formatter.result({
  "duration": 224171635,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First Text",
      "offset": 8
    }
  ],
  "location": "stepdef.type_todo_box(String)"
});
formatter.result({
  "duration": 3886049301,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_Enter()"
});
formatter.result({
  "duration": 51887677,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First Text",
      "offset": 11
    }
  ],
  "location": "stepdef.verify_list(String)"
});
formatter.result({
  "duration": 37172438,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_completed_checkbox()"
});
formatter.result({
  "duration": 72421671,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.verify_first_item_striked_out()"
});
formatter.result({
  "duration": 14931872,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_completed_checkbox()"
});
formatter.result({
  "duration": 76347985,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.verify_first_item_active()"
});
formatter.result({
  "duration": 13168897,
  "status": "passed"
});
formatter.after({
  "duration": 483943730,
  "status": "passed"
});
formatter.before({
  "duration": 4767711249,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Adding second todo items",
  "description": "",
  "id": "coding-exercise-unisuper;adding-second-todo-items",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 42,
  "name": "I am at the Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "I click the AngularJS link",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "I type \"First Text\" in the todo box",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I click Enter button",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I can see \"First Text\" in the list",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "I type \"Second Text\" in the todo box",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I click Enter button",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I can see \"Second Text\" in the list",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.home_url()"
});
formatter.result({
  "duration": 3706872822,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.AngularJS_link_click()"
});
formatter.result({
  "duration": 3077681539,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First Text",
      "offset": 8
    }
  ],
  "location": "stepdef.type_todo_box(String)"
});
formatter.result({
  "duration": 478762910,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_Enter()"
});
formatter.result({
  "duration": 57362042,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First Text",
      "offset": 11
    }
  ],
  "location": "stepdef.verify_list(String)"
});
formatter.result({
  "duration": 34249816,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Second Text",
      "offset": 8
    }
  ],
  "location": "stepdef.type_todo_box(String)"
});
formatter.result({
  "duration": 50049074,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_Enter()"
});
formatter.result({
  "duration": 42532291,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Second Text",
      "offset": 11
    }
  ],
  "location": "stepdef.verify_list(String)"
});
formatter.result({
  "duration": 43970957,
  "status": "passed"
});
formatter.after({
  "duration": 492836368,
  "status": "passed"
});
formatter.before({
  "duration": 4972379926,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Mark All todo items",
  "description": "",
  "id": "coding-exercise-unisuper;mark-all-todo-items",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 52,
  "name": "I am at the Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "I click the AngularJS link",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "I type \"First Text\" in the todo box",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I click Enter button",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I type \"Second Text\" in the todo box",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I click Enter button",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I click MarkAll button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.home_url()"
});
formatter.result({
  "duration": 3995500698,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.AngularJS_link_click()"
});
formatter.result({
  "duration": 3626428037,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First Text",
      "offset": 8
    }
  ],
  "location": "stepdef.type_todo_box(String)"
});
formatter.result({
  "duration": 470114679,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_Enter()"
});
formatter.result({
  "duration": 57250521,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Second Text",
      "offset": 8
    }
  ],
  "location": "stepdef.type_todo_box(String)"
});
formatter.result({
  "duration": 49729892,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_Enter()"
});
formatter.result({
  "duration": 43024095,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_MarkAll_button()"
});
formatter.result({
  "duration": 69970342,
  "status": "passed"
});
formatter.after({
  "duration": 583705177,
  "status": "passed"
});
formatter.before({
  "duration": 4649275348,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "Filter completed todo items",
  "description": "",
  "id": "coding-exercise-unisuper;filter-completed-todo-items",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 61,
  "name": "I am at the Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 62,
  "name": "I click the AngularJS link",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "I type \"First Text\" in the todo box",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I click Enter button",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I click on completed checkbox of first item",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I type \"Second Text\" in the todo box",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "I click Enter button",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "I click Completed button",
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "I see the first item is striked out",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.home_url()"
});
formatter.result({
  "duration": 3842912831,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.AngularJS_link_click()"
});
formatter.result({
  "duration": 3179163233,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First Text",
      "offset": 8
    }
  ],
  "location": "stepdef.type_todo_box(String)"
});
formatter.result({
  "duration": 464587331,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_Enter()"
});
formatter.result({
  "duration": 55977641,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_completed_checkbox()"
});
formatter.result({
  "duration": 75582720,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Second Text",
      "offset": 8
    }
  ],
  "location": "stepdef.type_todo_box(String)"
});
formatter.result({
  "duration": 96217553,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_Enter()"
});
formatter.result({
  "duration": 650875099,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_Completed_button()"
});
formatter.result({
  "duration": 96129959,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.verify_first_item_striked_out()"
});
formatter.result({
  "duration": 17829286,
  "status": "passed"
});
formatter.after({
  "duration": 321956038,
  "status": "passed"
});
formatter.before({
  "duration": 4854658871,
  "status": "passed"
});
formatter.scenario({
  "line": 71,
  "name": "Clear first todo item",
  "description": "",
  "id": "coding-exercise-unisuper;clear-first-todo-item",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 72,
  "name": "I am at the Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 73,
  "name": "I click the AngularJS link",
  "keyword": "When "
});
formatter.step({
  "line": 74,
  "name": "I type \"First Text\" in the todo box",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I click Enter button",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "I can see \"First Text\" in the list",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "I click on Close Icon",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "There are no todo entries",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.home_url()"
});
formatter.result({
  "duration": 3720726657,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.AngularJS_link_click()"
});
formatter.result({
  "duration": 2995459679,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First Text",
      "offset": 8
    }
  ],
  "location": "stepdef.type_todo_box(String)"
});
formatter.result({
  "duration": 474187978,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_Enter()"
});
formatter.result({
  "duration": 58290103,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First Text",
      "offset": 11
    }
  ],
  "location": "stepdef.verify_list(String)"
});
formatter.result({
  "duration": 31699783,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_Close_Icon()"
});
formatter.result({
  "duration": 18700518,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.no_entries_verification()"
});
formatter.result({
  "duration": 10084371527,
  "status": "passed"
});
formatter.after({
  "duration": 358244854,
  "status": "passed"
});
formatter.before({
  "duration": 4495563722,
  "status": "passed"
});
formatter.scenario({
  "line": 80,
  "name": "Clear all todo items",
  "description": "",
  "id": "coding-exercise-unisuper;clear-all-todo-items",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 81,
  "name": "I am at the Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 82,
  "name": "I click the AngularJS link",
  "keyword": "When "
});
formatter.step({
  "line": 83,
  "name": "I type \"First Text\" in the todo box",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "I click Enter button",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "I type \"Second Text\" in the todo box",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "I click Enter button",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "I click MarkAll button",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "I click on ClearCompleted button",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "There are no todo entries",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.home_url()"
});
formatter.result({
  "duration": 4581837519,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.AngularJS_link_click()"
});
formatter.result({
  "duration": 3517352223,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First Text",
      "offset": 8
    }
  ],
  "location": "stepdef.type_todo_box(String)"
});
formatter.result({
  "duration": 468913583,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_Enter()"
});
formatter.result({
  "duration": 49652127,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Second Text",
      "offset": 8
    }
  ],
  "location": "stepdef.type_todo_box(String)"
});
formatter.result({
  "duration": 57447498,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_Enter()"
});
formatter.result({
  "duration": 37368990,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_MarkAll_button()"
});
formatter.result({
  "duration": 76474888,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.clear_completed_functionality()"
});
formatter.result({
  "duration": 71104782,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.no_entries_verification()"
});
formatter.result({
  "duration": 10067765129,
  "status": "passed"
});
formatter.after({
  "duration": 580411671,
  "status": "passed"
});
});