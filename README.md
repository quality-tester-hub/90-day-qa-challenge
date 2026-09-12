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
| **September 8, 2026** | **Day 08** | TestMu AI Selenium Playground | AJAX Forms, Dual List Box, Modals, Progress Bars, Hovers, Window Popups & Todo App | ✅ Completed |
| **September 9, 2026** | **Day 09** | Testsmith Locator Game | Dynamic SPA State Synchronization, Overlay Interception & Locator Resilience | ✅ Completed |
| **September 10, 2026** | **Day 10** | Automation Camp (`Play 2`) | Pure UI Automation, Native Input Controls, Multi-Window Popups & Alert Handling | ✅ Completed |
| **September 11, 2026** | **Day 11** | CommitQuality | Dynamic Tables, Forms, Accordions, Popups, API Mocking, Contact Form & Dynamic Clock | ✅ Completed |
| **September 12, 2026** | **Day 12** | Restful-Booker-Platform | Date Pickers, Room Booking Forms, Contact Messaging, SPA Routing & Backend Concurrency | ✅ Completed |

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

### 🗓️ September 8, 2026 — Day 08: TestMu AI Selenium Playground (`/day-08-testmuai-selenium-playground`)
* **Core Focus:** Automating dynamic AJAX form submissions, multi-select dual list boxes, multi-layered Bootstrap modals, asynchronous progress bar state tracking, hover overlays, multi-window popups, and dynamic To-Do app state management.
* **Test Suite Breakdown:**
  * `ajax-form-submit.spec.ts`: Form input, submit action, and dynamic response verification.
  * `bootstrap-dual-list-box.spec.ts`: Item movement (single/all), cross-box transfer, and real-time list filtering.
  * `bootstrap-modal.spec.ts`: Single modal launch/save and multi-layered nested modal interactions.
  * `bootstrap-download-progress.spec.ts`: Start trigger, percentage tracking, and 100% completion state assertions.
  * `hover-demo.spec.ts`: Dynamic element hover state triggers and overlay visibility checks.
  * `window-popup-modal.spec.ts`: Single popup intercept, multi-window generation, and URL path assertions.
  * `todo-app.spec.ts`: Item creation, checkbox toggle state management, and dynamic element verification.
  * `auto-healing.spec.ts`: Resilient selector behavior during dynamic DOM ID mutation.

### 🗓️ September 9, 2026 — Day 09: Testsmith Locator Game (`/day-09-locator-game`)
* **Core Focus:** Automating sequential SPA level progression, handling dynamic tour overlays (`tour-step-backdrop`), resolving React state input desynchronization, and analyzing framework compatibility boundaries.
* **Test Suite Breakdown:**
  * `level-1.spec.ts`: Tag selector execution (`h3`) and page heading validation.
  * `level-2.spec.ts`: ID selector extraction (`#description`) and transition handling.
  * `level-3.spec.ts`: Class selector matching (`li.active`) and level increment verification.
  * `level-4.spec.ts`: Direct container hierarchy locator (`#toolbar button`) and DOM state assertion.

### 🗓️ September 10, 2026 — Day 10: Pure Automation Sandbox (`/day-10-automation-camp`)
* **Core Focus:** Automating native browser form controls, custom color/range pickers, popup window contexts, and alert dialog triggers inside a clean single-file execution suite.
* **Test Suite Breakdown:**
  * `play2-automation.spec.ts`: Single-file test suite validating native inputs, radio toggles, multi-select dropdowns, popup interception (`waitForEvent('popup')`), and alert handling (`page.once('dialog')`).

### 🗓️ September 11, 2026 — Day 11: CommitQuality Sandbox (`/day-11-commitquality`)
* **Core Focus:** Automating end-to-end user workflows, interactive UI components, network API mocking, bug reporting, and dynamic timer assertions on CommitQuality (`https://commitquality.com/practice`).
* **Test Suite Breakdown:**
  * `filter-product.spec.ts`: Validates product table search queries, exact name matching, non-existent item queries, and search resets.
  * `add-product.spec.ts`: Validates new product creation flows, unique item additions, and mandatory field validation errors.
  * `components.spec.ts`: Automates standard navigation, click types (single/double/right), radio buttons, checkboxes, and select dropdowns on `https://commitquality.com/practice`.
  * `accordion.spec.ts`: Tests expand/collapse states and conditional text element visibility.
  * `popups.spec.ts`: Intercepts native browser alert dialogs (`page.once('dialog')`) and verifies modal overlay triggers.
  * `api-mocking.spec.ts`: Validates real network responses and mocks API payloads using Playwright's `page.route()` handler.
  * `contact-us.spec.ts`: Validates contact form submission workflows and edge cases.
  * `clock.spec.ts`: Verifies dynamic clock timer assertions over time delays.
* **Bug Reports Tracked:**
  * `BUG-CQ-011`: Contact Form payload mismatch & backend API silent drop (Tested across macOS, Windows, Linux, Android).

### 🗓️ September 12, 2026 — Day 12: Restful-Booker-Platform (`/day-12-restful-booker-platform`)
* **Core Focus:** Automating hotel reservation workflows, date pickers, contact query submissions, single-page application (SPA) routing issues, and backend concurrency performance logging on `https://automationintesting.online/`.
* **Test Suite Breakdown:**
  * `check-availability.spec.ts`: Validates date input fields, manual check-in/check-out pickers, and availability search triggers.
  * `booking.spec.ts`: Automates room selection, guest personal details entry, date selection drag, and booking confirmation modal verification.
  * `contact-message.spec.ts`: Validates customer inquiry form submissions and required input field validation error states.
* **Bug Reports Tracked:**
  * `BUG-RBP-001`: Navigation route updates URL but target page content fails to load (`/amenities`). (Tested across macOS, Windows, Linux, Android).
  * `BUG-RBP-002`: Multi-account login concurrency causes backend failure, elevated latency, and application crashes under session load. (Tested across macOS, Windows, Linux, Android).

---

## 🛠️ Project Directory Structure

```text
Module-1-UI-Automation/
├── day-01-the-internet/
│   ├── Defects_&_Bugreports/
│   │   ├── DEFECT-001-basic-auth.md
│   │   ├── DEFECT-002-broken-image.md
│   │   └── DEFECT-003-element-disappearing.md
│   ├── Tests/
│   │   ├── add-remove-elements.spec.ts
│   │   ├── basic-auth.spec.ts
│   │   ├── challenging-dom.spec.ts
│   │   ├── checkboxes.spec.ts
│   │   ├── context-menu.spec.ts
│   │   ├── drag-and-drop.spec.ts
│   │   ├── dropdown.spec.ts
│   │   ├── dynamic-content.spec.ts
│   │   ├── dynamic-controls.spec.ts
│   │   ├── dynamic-loading.spec.ts
│   │   ├── elements.spec.ts
│   │   ├── entry-ad-and-exit-intent.spec.ts
│   │   ├── file-upload-download.spec.ts
│   │   ├── floating-menu.spec.ts
│   │   ├── frames-and-geolocation.spec.ts
│   │   └── images.spec.ts
│   └── README.md
├── day-02-demoQa/
│   ├── Defects_&_Bugreports/
│   │   └── DEFECT-001-disabled-button.md
│   ├── Tests/
│   │   ├── alerts_windows.spec.ts
│   │   ├── book_store.spec.ts
│   │   ├── elements.spec.ts
│   │   ├── forms.spec.ts
│   │   ├── interactions.spec.ts
│   │   └── widgets.spec.ts
│   └── README.md
├── day-03-sauce-demo/
│   ├── Defects_&_Bugreports/
│   ├── Tests/
│   │   ├── auth.spec.ts
│   │   ├── cart_&_checkout.spec.ts
│   │   ├── filter-and-sort.spec.ts
│   │   └── menu-navigation.spec.ts
│   └── README.md
├── day-04-practice-expandtesting/
│   ├── Defects_&_Bugreports/
│   │   ├── DEFECT-01-failed-to-register.md
│   │   └── DEFECT-01-failed-to-register.png
│   ├── Tests/
│   │   ├── autocomplete.spec.ts
│   │   ├── contact.spec.ts
│   │   ├── form-validation.spec.ts
│   │   ├── infinite-scroll.spec.ts
│   │   ├── login.spec.ts
│   │   ├── my-browser.spec.ts
│   │   ├── notification-message.spec.ts
│   │   ├── otp.spec.ts
│   │   ├── password-reset.spec.ts
│   │   ├── register.spec.ts
│   │   ├── spies-stubs-clocks.spec.ts
│   │   └── web-inputs.spec.ts
│   └── README.md
├── day-05-ui-testing-playground/
│   ├── Defects_&_Bugreports/
│   │   ├── Defect-01-load-delay.md
│   │   └── Defect-02-inaccurate-location.md
│   ├── Tests/
│   │   ├── Ajax.data.spec.ts
│   │   ├── Alerts.spec.ts
│   │   ├── Animated Button.spec.ts
│   │   ├── Auto Wait.spec.ts
│   │   ├── class-attribute.spec.ts
│   │   ├── Clear Input.spec.ts
│   │   ├── click.spec.ts
│   │   ├── clientside-delay.spec.ts
│   │   ├── CSS Selectors.spec.ts
│   │   ├── Disabled Input.spec.ts
│   │   ├── dynamic-id.spec.ts
│   │   ├── dynamic-table.spec.ts
│   │   ├── Frames.spec.ts
│   │   ├── Geo Location.spec.ts
│   │   ├── hidden-layers.spec.ts
│   │   ├── load-delay.spec.ts
│   │   ├── mouse-over.spec.ts
│   │   ├── non-breakingspace.spec.ts
│   │   ├── Overlapped Element.spec.ts
│   │   ├── progressbar.spec.ts
│   │   ├── sample-app.spec.ts
│   │   ├── Scroll to Click.spec.ts
│   │   ├── scrollbar.spec.ts
│   │   ├── Select.spec.ts
│   │   ├── Shadow DOM.spec.ts
│   │   ├── text-input.spec.ts
│   │   ├── verify-text.spec.ts
│   │   └── visibility.spec.ts
│   └── README.md
├── day-06-qa-playground/
│   ├── Defects_&_Bugreports/
│   │   ├── Defect-01-datepicker-timeout&locator-issue.md
│   │   └── Defect-02-Server-crash.md
│   ├── Tests/
│   │   ├── alerts-dialogs.spec.ts
│   │   ├── annotations.spec.ts
│   │   ├── banking-app.spec.ts
│   │   ├── buttons.spec.ts
│   │   ├── data-table.spec.ts
│   │   ├── date-picker.spec.ts
│   │   ├── drag-drop.spec.ts
│   │   ├── dropdowns.spec.ts
│   │   ├── dynamic-waits.spec.ts
│   │   ├── filling-forms.spec.ts
│   │   ├── iframes.spec.ts
│   │   ├── input-fields.spec.ts
│   │   ├── links.spec.ts
│   │   ├── modals.spec.ts
│   │   ├── multi-select.spec.ts
│   │   ├── radio-checkbox.spec.ts
│   │   ├── shadow-dom.spec.ts
│   │   └── tabs-windows.spec.ts
│   └── README.md
├── day-07-tricentis-Obstacale/
│   ├── Tests/
│   │   ├── comprehensive.spec.ts
│   │   ├── tough-cookie.spec.ts
│   │   └── wait-a-moment.spec.ts
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
├── day-10-automation-camp/
│   ├── play2-automation.spec.ts
│   └── README.md
├── day-11-commitquality/
│   ├── Defects_&_Bugreports/
│   │   └── Backend Data Transport Failure.md
│   ├── Tests/
│   │   ├── accordion.spec.ts
│   │   ├── add-product.spec.ts
│   │   ├── api-mocking.spec.ts
│   │   ├── clock.spec.ts
│   │   ├── components.spec.ts
│   │   ├── contact-us.spec.ts
│   │   ├── filter-product.spec.ts
│   │   └── popups.spec.ts
│   └── README.md
├── day-12-restful-booker-platform/
│   ├── Defect_&_Bugreports/
│   │   ├── DEFECT-01-button_visible_but_page_not_loading.md
│   │   └── DEFECT-02-servercrash.md
│   ├── Tests/
│   │   ├── booking.spec.ts
│   │   ├── check-availability.spec.ts
│   │   └── contact-message.spec.ts
│   └── README.md
├── node_modules
├── test-results
├── .gitignore
├── package-lock.json
├── package.json
├── playwright.config.ts
└── README.md