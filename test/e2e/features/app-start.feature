Feature: Electron app startup

  Scenario: Main window opens
    Given the Electron app is running
    Then the main window title contains "My App"
    And the renderer contains "Welcome"
    And the main process app name is "my-electron-app"