# 90-day-qa-challenge
QA/QE 90-Days Portfolio | 7 Modules: UI Automation, API/DevTools, Buggy Sites, Security, E2E Workflows, Performance &amp; Advanced Target Envs
# 🚀 Module 1: UI Automation Mastery with Playwright

Welcome to the central repository for **Module 1 - UI Automation**. This project tracks a 3-day hands-on practice series covering modern Web QA Automation patterns, end-to-end workflows, resilient locators, session management, and test execution using Playwright and TypeScript.

---

## 📌 Progress Dashboard

| Date | Day | Target Site | Core Focus Areas | Status |
| :--- | :--- | :--- | :--- | :--- |
| **September 1, 2026** | **Day 01** | The Internet (`herokuapp`) | Basic Elements, Inputs, Checkboxes, Alerts | ✅ Completed |
| **September 2, 2026** | **Day 02** | DemoQA | Complex UI Widgets, Form Handling, Defect Reports | ✅ Completed |
| **September 3, 2026** | **Day 03** | SauceDemo (`Swag Labs`) | Auth, Storage State, Cart/Checkout, Sorting & Navigation | ✅ Completed |

---

## 📅 Daily Execution Log

### 🗓️ September 1, 2026 — Day 01: Fundamentals (`/day-01-the-internet`)
* **Core Focus:** Establishing resilient locator strategy (`getByRole`, `getByText`), basic user interactions, and page state assertions.
* **Key Workflows:** Automated dynamic control handling, checkbox toggles, input field filling, and basic navigation checks.

### 🗓️ September 2, 2026 — Day 02: Complex UI & Bug Logging (`/day-2-demoQa`)
* **Core Focus:** Handling complex UI components, dynamic waits, frames, modal dialogs, and documenting bugs.
* **Key Workflows:** Form edge-case testing, element visibility validations, and writing structured bug reports under `/Defects_&_Bugreports`.
What did I learn?
Today I learned how to cut out dynamic ad network frames and completely get rid of layout-shifting ad elements using custom beforeEach fixtures (combining page.route() interception and page.evaluate() DOM manipulation) to ensure bulletproof, flake-free Playwright test execution.

### 🗓️ September 3, 2026 — Day 03: E-Commerce Workflows (`/day-03-sauce-demo`)
* **Core Focus:** Session state preservation (`storageState`), full E2E purchase flows, catalog sorting algorithms, and side drawer navigation.
* **Test Suite Breakdown:**
  * `auth.spec.ts`: Validates login, tests locked-out user handling, and exports session state to `user.json`.
  * `cart_&_checkout.spec.ts`: Complete purchase flow—adding items from catalog, reviewing cart, entering shipping details, and confirming order completion.
  * `filter-and-sort.spec.ts`: Validates catalog sorting dropdown options (`Name A-Z`, `Name Z-A`, `Price Low-High`, `Price High-Low`).
  * `menu-navigation.spec.ts`: Validates hamburger menu drawer actions, Reset App State triggers, and user logout redirection.

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
├── playwright.config.ts
├── package.json
└── README.md
