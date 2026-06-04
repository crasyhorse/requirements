Feature: Electron Vite React starter
  As a developer starting a desktop app
  I want the starter page to expose the available workflows
  So that I can quickly discover the development commands

  Scenario: Viewing the starter commands
    Given I open the desktop starter
    Then I should see the "Desktop app starter" heading
    And I should see the "npm run coverage" command
    And I should see the "npm run docs" command
    And I should see the "Start building" action
