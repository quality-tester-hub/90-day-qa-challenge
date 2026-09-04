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

---

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
│   │   ├── auth.spec.ts
│   │   ├── cart_&_checkout.spec.ts
│   │   ├── filter-and-sort.spec.ts
│   │   └── menu-navigation.spec.ts
│   └── README.md
├── day-04-practice-expandtesting/
│   ├── Tests/
│   │   ├── autocomplete.spec.ts
│   │   ├── contact.spec.ts
│   │   ├── dynamic-table.spec.ts
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
├── playwright.config.ts
├── package.json
└── README.md