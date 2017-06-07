Feature: Coding exercise UniSuper

  Scenario: Adding todo items
    Given I am at the Home page
    When I click the AngularJS link
    And I type "First Text" in the todo box
    And I click Enter button
    Then I can see "First Text" in the list

  Scenario: Modifying todo items
    Given I am at the Home page
    When I click the AngularJS link
    And I type "First Text" in the todo box
    And I click Enter button
    Then I can see "First Text" in the list
    When I doubleclick on the "First Text" in the list
    And I type "First Text Modified" in the first list item
    And I click Enter button
    Then I can see "First Text Modified" in the list

  Scenario: Complete todo items
    Given I am at the Home page
    When I click the AngularJS link
    And I type "First Text" in the todo box
    And I click Enter button
    Then I can see "First Text" in the list
    When I click on completed checkbox of first item
    Then I see the first item is striked out

  Scenario: Reactivate todo items
    Given I am at the Home page
    When I click the AngularJS link
    And I type "First Text" in the todo box
    And I click Enter button
    Then I can see "First Text" in the list
    When I click on completed checkbox of first item
    Then I see the first item is striked out
    When I click on completed checkbox of first item
    Then I see the first item active

  Scenario: Adding second todo items
    Given I am at the Home page
    When I click the AngularJS link
    And I type "First Text" in the todo box
    And I click Enter button
    Then I can see "First Text" in the list
    And I type "Second Text" in the todo box
    And I click Enter button
    Then I can see "Second Text" in the list

  Scenario: Mark All todo items
    Given I am at the Home page
    When I click the AngularJS link
    And I type "First Text" in the todo box
    And I click Enter button
    And I type "Second Text" in the todo box
    And I click Enter button
    Then I click MarkAll button

  Scenario: Filter completed todo items
    Given I am at the Home page
    When I click the AngularJS link
    And I type "First Text" in the todo box
    And I click Enter button
    And I click on completed checkbox of first item
    And I type "Second Text" in the todo box
    And I click Enter button
    When I click Completed button
    Then I see the first item is striked out

  Scenario: Clear first todo item
    Given I am at the Home page
    When I click the AngularJS link
    And I type "First Text" in the todo box
    And I click Enter button
    Then I can see "First Text" in the list
    When I click on Close Icon
    Then There are no todo entries

  Scenario: Clear all todo items
    Given I am at the Home page
    When I click the AngularJS link
    And I type "First Text" in the todo box
    And I click Enter button
    And I type "Second Text" in the todo box
    And I click Enter button
    And I click MarkAll button
    And I click on ClearCompleted button
    Then There are no todo entries
