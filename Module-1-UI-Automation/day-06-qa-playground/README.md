# Day 07 - Advanced QA Automation & Test Infrastructure

## Overview
Focused on completing remaining QA Playground modules, handling complex UI overlays (modals, multi-select dropdowns, date pickers, bank dashboard flows), and configuring local development/testing integrations in VS Code.

## Key Learnings & Milestones

* **Live Server Integration**: Learned how to spin up and connect local environments via VS Code Live Server to test real-time DOM changes and refine Playwright automation scripts against local builds.
* **AI-Assisted Engineering**: Integrated GitHub Copilot ($10/mo subscription tier) into VS Code to accelerate locator generation, assertions, and test setup.
* **Defect Management**: Documented edge cases and framework failures (e.g., `BUG-003` for Date Picker timeouts, `BUG-004` for multi-tab portal overlay race conditions).
* **Robust Locators**: Refactored test suites to prioritize `getByRole` and `getByTestId` over brittle Codegen selectors, preventing pointer-event interception bugs on portals/overlays.

## Modules & Defects Summary

* **Date Picker**: `Tests/date-picker.spec.ts` | Logged `BUG-003-date-picker-element-timeout.md`
* **Links**: `Tests/links.spec.ts`
* **Tabs & Windows**: `Tests/tabs-windows.spec.ts`
* **Multi-Select**: `Tests/multi-select.spec.ts`
* **Modals**: `Tests/modals.spec.ts`
* **Banking App**: `Tests/banking-app.spec.ts` | Logged `BUG-004-banking-app-multitab-server-crash.md`
