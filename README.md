# 90-day-qa-challenge
QA/QE 90-Days Portfolio | 7 Modules: UI Automation, API/DevTools, Buggy Sites, Security, E2E Workflows, Performance & Advanced Target Envs

# 🚀 Module 1: UI Automation Mastery with Playwright

Welcome to the central repository for **Module 1 - UI Automation**. This project tracks hands-on practice covering modern Web QA Automation patterns, end-to-end workflows, resilient locators, session management, dynamic element handling, and test execution using Playwright and TypeScript.

---

## 📌 Progress Dashboard

| Date | Day | Target Site | Core Focus Areas | Status |
| :--- | :--- | :--- | :--- | :--- |
| **September 1, 2026** | **Day 01** | The Internet (`herokuapp`) | Basic Elements, Inputs, Checkboxes, Alerts | ✅ Completed |
| **September 2, 2026** | **Day 02** | DemoQA | Complex UI Widgets, Form Handling, Defect Reports | ✅ Completed |
| **September 3, 2026** | **Day 03** | SauceDemo (`Swag Labs`) | Auth, Storage State, Cart/Checkout, Sorting & Navigation | ✅ Completed |
| **September 4, 2026** | **Day 04** | Practice ExpandTesting | Dynamic Workflows, OTP, Autocomplete, Clock Mocks & Infinite Scroll | ✅ Completed |
| **September 5, 2026** | **Day 05** | UI Testing Playground | Edge Cases, Dynamic IDs, Hidden Layers, Load Delays | ✅ Completed |
| **September 6, 2026** | **Day 06** | QA Playground | Advanced UI Widgets, Portals, Multi-Tab Workflows & AI Tooling | ✅ Completed |
| **September 7, 2026** | **Day 07** | Tricentis Obstacle Course | Complex Logic, String Extraction, Dynamic Timers, Cookies | ✅ Completed |
| **September 8, 2026** | **Day 08** | TestMu AI Selenium Playground | AJAX Forms, Dual List Box, Modals, Progress Bars, Hovers, Window Popups & Todo App | ✅ Completed |                                           **September 9, 2026** | **Day 09** | Testsmith Locator Game | Dynamic SPA State Synchronization, Overlay Interception & Locator Resilience | ✅ Completed |
---

## 📅 Daily Execution Log

### 🗓️ September 1, 2026 — Day 01: Fundamentals (`/day-01-the-internet`)
* **Core Focus:** Establishing resilient locator strategy (`getByRole`, `getByText`), basic user interactions, and page state assertions.
* **Key Workflows:** Automated dynamic control handling, checkbox toggles, input field filling, and basic navigation checks.

### 🗓️ September 2, 2026 — Day 02: Complex UI & Bug Logging (`/day-2-demoQa`)
* **Core Focus:** Handling complex UI components, dynamic waits, frames, modal dialogs, and documenting bugs.
* **Key Workflows:** Form edge-case testing, element visibility validations, and writing structured bug reports under `/Defects_&_Bugreports`. Learned how to cut out dynamic ad network frames and layout-shifting elements using custom `beforeEach` fixtures (`page.route()` and `page.evaluate()`) for flake-free execution.

### 🗓️ September 3, 2026 — Day 03: E-Commerce Workflows (`/day-03-sauce-demo`)
* **Core Focus:** Session state preservation (`storageState`), full E2E purchase flows, catalog sorting algorithms, and side drawer navigation.
* **Test Suite Breakdown:**
  * `auth.spec.ts`: Validates login, tests locked-out user handling, and exports session state to `user.json`.
  * `cart_&_checkout.spec.ts`: Complete purchase flow—adding items from catalog, reviewing cart, entering shipping details, and confirming order completion.
  * `filter-and-sort.spec.ts`: Validates catalog sorting dropdown options (`Name A-Z`, `Name Z-A`, `Price Low-High`, `Price High-Low`).
  * `menu-navigation.spec.ts`: Validates hamburger menu drawer actions, Reset App State triggers, and user logout redirection.

### 🗓️ September 4, 2026 — Day 04: Dynamic Web Applications (`/day-04-practice-expandtesting`)
* **Core Focus:** Advanced dynamic element handling, execution visibility via console logs, time-travel clocks, dynamic DOM infinite scrolling, and form validation flows.
* **Test Suite Breakdown:**
  * `web-inputs.spec.ts`: Validates specialized input type entries (Number, Text, Password, Date).
  * `dynamic-table.spec.ts`: Dynamic data extraction and locator matching across table rows.
  * `login.spec.ts` & `register.spec.ts`: User authentication and registration form workflows.
  * `password-reset.spec.ts`: Forgot password submission and confirmation banner checks.
  * `otp.spec.ts`: One-time password submission and verification flows.
  * `my-browser.spec.ts`: User-agent and browser information detection assertions.
  * `form-validation.spec.ts`: Form field criteria, picker validations, and submission state checks.
  * `notification-message.spec.ts`: Dynamic flash banner alerts and pattern-matched text validation.
  * `autocomplete.spec.ts`: Search input interaction, dynamic dropdown selection, and result assertions.
  * `spies-stubs-clocks.spec.ts`: Time-travel test assertions utilizing `page.clock` manipulation.
  * `infinite-scroll.spec.ts`: Page scrolling and asynchronous DOM element appending checks.
  * `contact.spec.ts`: End-to-end contact form submission and success banner assertions.

### 🗓️ September 5, 2026 — Day 05: Sandbox Edge Cases & Delays (`/day-05-uitestingplayground`)
* **Core Focus:** Navigating technical UI automation challenges—dynamic IDs, volatile CSS classes, Z-index layer stacks, long-running AJAX requests, and server load delays.
* **Test Suite Breakdown:**
  * `class-attribute.spec.ts`: Primary/secondary button matching using dynamic class strings.
  * `dynamic-id.spec.ts`: Locating elements without relying on dynamic runtime IDs.
  * `hidden-layer.spec.ts`: Managing Z-index overlays and verifying non-clickable dynamic states.
  * `load-delay.spec.ts`: Auto-waiting navigation handling under artificial server load.
  * `ajax-data.spec.ts`: Handling 15-second dynamic DOM insertions using explicit assertion timeouts.
* **Bug Reports Tracked:**
  * `BUG-001-load-delay-performance-threshold.md`: SLA performance violation on `/loaddelay`.
  * `BUG-002-inaccurate-geolocation-picker.md`: Inaccurate coordinate resolution and picker failure.

### 🗓️ September 6, 2026 — Day 06: QA Playground & Dev Environment Integrations (`/day-06-qa-playground`)
* **Core Focus:** Automating complex UI widgets, managing multi-window contexts, resolving pointer event interception bugs, integrating VS Code Live Server, and using GitHub Copilot for code acceleration.
* **Test Suite Breakdown:**
  * `date-picker.spec.ts`: Date picker widget interactions and input validations.
  * `links.spec.ts`: Navigation triggers, status code checks, and target URL routing.
  * `tabs-windows.spec.ts`: Intercepting and switching between new browser tab contexts using `context.waitForEvent('page')`.
  * `multi-select.spec.ts`: Selecting multiple option items and validating container tags.
  * `modals.spec.ts`: Managing overlay dialog visibility, focus traps, and dismissal actions.
  * `banking-app.spec.ts`: Multi-step banking workflow, form options, and loan calculations.
* **Bug Reports Tracked:**
  * `BUG-003-date-picker-element-timeout.md`: Element timeout on invalid container input target fill.
  * `BUG-004-banking-app-multitab-server-crash.md`: Portal overlay pointer interception and multi-tab state failure.

### 🗓️ September 7, 2026 — Day 07: Advanced Tricentis Obstacles (`/day-07-tricentis-Obstacale`)
* **Core Focus:** Solving complex algorithmic web obstacles including dynamic string extraction, regex processing, asynchronous calculating state timers, and cookie manipulation.
* **Test Suite Breakdown:**
  * `obstacle-45618-tough-cookie.spec.ts`: Regex-based number extraction from random string payloads and input field populating.
  * `obstacle-33678-wait-a-moment.spec.ts`: Managing asynchronous dynamic wait states, button state transitions, and state triggers.
  * `obstacle-73590-comprehensive.spec.ts`: Multi-step form flows, structural page assertions, and state verification.

### Day 08 - testmuai-selenium-playground
## Overview
Focused on automating complex UI components on the TestMu AI Selenium Playground, including dynamic AJAX form submissions, multi-select dual list boxes, multi-layered Bootstrap modals, asynchronous progress bar state tracking, hover overlays, multi-window popups, and dynamic To-Do app state management using Playwright with TypeScript.

## Key Learnings & Milestones

* **Manual Codegen & Locator Refactoring**: Utilized Playwright `codegen` to capture raw browser events and systematically refactored brittle selectors into resilient, user-centric locators (`getByRole`, `getByLabel`, `locator`).
* **Asynchronous AJAX & Progress Tracking**: Implemented dynamic assertions (`toContainText`, `toHaveText`) with extended timeouts to handle delayed DOM state changes in progress bars and AJAX responses.
* **Multi-Window & Popup Handling**: Automated multi-tab/popup flows using `waitForEvent('popup')` and Playwright `BrowserContext` to manage multiple simultaneous window triggers cleanly.
* **Dynamic DOM & Auto-Healing Validation**: Validated locator resilience against dynamic DOM mutation scenarios (such as ID changes) to prevent element selection breakage.

## Modules & Test Execution Summary

* **AJAX Form Submit**: `Tests/ajax-form-submit.spec.ts` | Form input, submit action, and dynamic response verification
* **Bootstrap Dual List Box**: `Tests/bootstrap-dual-list-box.spec.ts` | Item movement (single/all), cross-box transfer, and real-time list filtering
* **Bootstrap Modals**: `Tests/bootstrap-modal.spec.ts` | Single modal launch/save and multi-layered nested modal interactions
* **Download Progress Bar**: `Tests/bootstrap-download-progress.spec.ts` | Start trigger, percentage tracking, and 100% completion state assertions
* **Hover Demo**: `Tests/hover-demo.spec.ts` | Dynamic element hover state triggers and overlay visibility checks
* **Window Popup Modal**: `Tests/window-popup-modal.spec.ts` | Single popup intercept, multi-window generation, and URL path assertions
* **To-Do App**: `Tests/todo-app.spec.ts` | Item creation, checkbox toggle state management, and dynamic element verification
* **Auto Healing Demo**: `Tests/auto-healing.spec.ts` | Resilient selector behavior during dynamic DOM ID mutation 
### 🗓️ September 9, 2026 — Day 09: Testsmith Locator Game (`/day-09-locator-game`)
* **Core Focus:** Automating sequential SPA level progression, handling dynamic tour overlays (`tour-step-backdrop`), resolving React state input desynchronization, and analyzing framework compatibility boundaries.
* **Test Suite Breakdown:**
  * `level-1.spec.ts`: Tag selector execution (`h3`) and page heading validation.
  * `level-2.spec.ts`: ID selector extraction (`#description`) and transition handling.
  * `level-3.spec.ts`: Class selector matching (`li.active`) and level increment verification.
  * `level-4.spec.ts`: Direct container hierarchy locator (`#toolbar button`) and DOM state assertion.
* **Key Learnings & Technical Friction Points:**
  * **Input State Desynchronization:** Playwright’s default `.fill()` populates the visual DOM input but fails to trigger native `onChange`/`onInput` handlers in event-heavy SPAs. Resolved by explicitly dispatching synthetic events (`locatorInput.dispatchEvent('input')`).
  * **Overlay Pointer Interception:** Third-party tour backdrop overlays intercept standard mouse clicks during level transition animations. Bypassed by using direct DOM click execution (`submitButton.evaluate(b => b.click())`).
  * **Tool Compatibility Limits:** Identified core architectural limits when running automated E2E test drivers against interactive, state-heavy game sandboxes designed for manual input. Concluded automation effort at Level 4 and documented SPA race conditions.

---

### 🗓️ September 10, 2026 — Day 10: Pure Automation Sandbox (`/day-10-automation-camp`)
* **Core Focus:** Automating native browser form controls, custom color/range pickers, popup window contexts, and alert dialog triggers inside a clean single-file execution suite.
* **Test Suite Breakdown:**
  * `play2-automation.spec.ts`: Single-file test suite validating native inputs, radio toggles, multi-select dropdowns, popup interception (`waitForEvent('popup')`), and alert handling (`page.once('dialog')`).

## 🛠️ Project Directory Structure

```text
Module-1-UI-Automation/
├── day-01-the-internet/
│   └── Tests/
├── day-2-demoQa/
│   ├── Defects_&_Bugreports/
│   └── Tests/
├── day-03-sauce-demo/
│   ├── Defects_&_Bugreports/
│   ├── Tests/
│   └── README.md
├── day-04-practice-expandtesting/
│   ├── Tests/
│   └── README.md
├── day-05-uitestingplayground/
│   ├── Defects_&_Bugreports/
│   │   ├── BUG-001-load-delay-performance-threshold.md
│   │   └── BUG-002-inaccurate-geolocation-picker.md
│   ├── Tests/
│   └── README.md
├── day-06-qa-playground/
│   ├── Defects_&_Bugreports/
│   │   ├── Defect-01-date-picker-element-timeout.md
│   │   └── BUG-02-banking-app-multitab-server-crash.md
│   ├── Tests/
│   │   ├── banking-app.spec.ts
│   │   ├── date-picker.spec.ts
│   │   ├── links.spec.ts
│   │   ├── modals.spec.ts
│   │   ├── multi-select.spec.ts
│   │   └── tabs-windows.spec.ts
│   └── README.md
├── day-07-tricentis-Obstacale/
│   ├── Tests/
│   │   ├── obstacle-33678-wait-a-moment.spec.ts
│   │   ├── obstacle-45618-tough-cookie.spec.ts
│   │   └── obstacle-73590-comprehensive.spec.ts
│   └── README.md
├── day-08-testmuai-selenium-playground/
│   ├── Tests/
│   │   ├── ajax-form-submit.spec.ts
│   │   ├── auto-healing.spec.ts
│   │   ├── bootstrap-download-progress.spec.ts
│   │   ├── bootstrap-dual-list-box.spec.ts
│   │   ├── bootstrap-modal.spec.ts
│   │   ├── hover-demo.spec.ts
│   │   ├── todo-app.spec.ts
│   │   └── window-popup-modal.spec.ts
│   └── README.md
├── day-09-locator-game/
│   ├── Tests/
│   │   ├── level-1.spec.ts
│   │   ├── level-2.spec.ts
│   │   ├── level-3.spec.ts
│   │   └── level-4.spec.ts
│   └── README.md