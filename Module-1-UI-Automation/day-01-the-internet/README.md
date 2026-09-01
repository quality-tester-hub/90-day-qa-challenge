# Day 01: The Internet (UI Automation)

## Overview
Completed 15 core UI test scripts using Playwright and TypeScript for "The Internet" platform. Documented unexpected application behaviors with structured defect reports and supporting visual evidence.

## Test Coverage
* **Element Interactions**: Add/remove elements, dynamic controls, dynamic loading, entry/exit intents, floating menus.
* **Complex UI Components**: Checkboxes, dropdowns, context menus, drag-and-drop, images, basic auth.
* **Frame & File Handling**: Upload/download routines, frame switching, and geolocation mock setup.

## Defects Reported
* `DEFECT-001`: Basic auth bypass error handling.
* `DEFECT-002`: Broken image display rendering issue.
* `DEFECT-003`: Dynamic element disappearance behavior.

*All defects include Markdown documentation, screenshots, and `.webm` video execution traces in the `Defects_&_Report/` directory.*

## Execution
Run all test scripts inside this directory:
```bash
npx playwright test Module-1-UI-Automation/day-01-the-internet/Tests/
