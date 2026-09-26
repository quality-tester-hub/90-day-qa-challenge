# 90-day-qa-challenge

## **QA/QE 90-Days Portfolio | 7 Modules: UI Automation, API/DevTools, Buggy Sites, Security, E2E Workflows, Performance & Advanced Target Envs**

# 🚀 Module 1: UI Automation Mastery with Playwright

Welcome to the central repository for **Module 1 - UI Automation**. This project tracks hands-on practice covering modern Web QA Automation patterns, end-to-end workflows, resilient locators, session management, dynamic element handling, and test execution using Playwright and TypeScript.

---

## 📌 Progress Dashboard

| Date                   | Day        | Target Site                                           | Core Focus Areas                                                                              | Status      |
| :--------------------- | :--------- | :---------------------------------------------------- | :-------------------------------------------------------------------------------------------- | :---------- |
| **September 1, 2026**  | **Day 01** | The Internet (`herokuapp`)                            | Basic Elements, Inputs, Checkboxes, Alerts                                                    | ✅ Completed |
| **September 2, 2026**  | **Day 02** | DemoQA                                                | Complex UI Widgets, Form Handling, Defect Reports                                             | ✅ Completed |
| **September 3, 2026**  | **Day 03** | SauceDemo (`Swag Labs`)                               | Auth, Storage State, Cart/Checkout, Sorting & Navigation                                      | ✅ Completed |
| **September 4, 2026**  | **Day 04** | Practice ExpandTesting                                | Dynamic Workflows, OTP, Autocomplete, Clock Mocks & Infinite Scroll                           | ✅ Completed |
| **September 5, 2026**  | **Day 05** | UI Testing Playground                                 | Edge Cases, Dynamic IDs, Hidden Layers, Load Delays                                           | ✅ Completed |
| **September 6, 2026**  | **Day 06** | QA Playground                                         | Advanced UI Widgets, Portals, Multi-Tab Workflows & AI Tooling                                | ✅ Completed |
| **September 7, 2026**  | **Day 07** | Tricentis Obstacle Course                             | Complex Logic, String Extraction, Dynamic Timers, Cookies                                     | ✅ Completed |
| **September 8, 2026**  | **Day 08** | TestMu AI Selenium Playground                         | AJAX Forms, Dual List Box, Modals, Progress Bars, Hovers, Window Popups & Todo App            | ✅ Completed |
| **September 9, 2026**  | **Day 09** | Testsmith Locator Game                                | Dynamic SPA State Synchronization, Overlay Interception & Locator Resilience                  | ✅ Completed |
| **September 10, 2026** | **Day 10** | Automation Camp (`Play 2`)                            | Pure UI Automation, Native Input Controls, Multi-Window Popups & Alert Handling               | ✅ Completed |
| **September 11, 2026** | **Day 11** | CommitQuality                                         | Dynamic Tables, Forms, Accordions, Popups, API Mocking, Contact Form & Dynamic Clock          | ✅ Completed |
| **September 12, 2026** | **Day 12** | Restful-Booker-Platform                               | Date Pickers, Room Booking Forms, Contact Messaging, SPA Routing & Backend Concurrency        | ✅ Completed |
| **September 13, 2026** | **Day 13** | OrangeHRM Open Source                                 | Enterprise HR Suite, Dynamic Tables, Dropdowns, Re-Auth Popups & Single-File Test Specs       | ✅ Completed |
| **September 14, 2026** | **Day 14** | Cymbal Direct (`cymbal-shops`)                        | Microservices E-Commerce Platform, Catalog Iteration, Cart Operations & E2E Checkout          | ✅ Completed |
| **September 15, 2026** | **Day 15** | SAP UI5 Demo Apps (`ui5.sap.com`)                     | Enterprise Framework Controls, Dynamic Popups, Theme Switching, Data Tables & UX Integrations | ✅ Completed |
| **September 16, 2026** | **Day 16** | SelectorsHub (`selectorshub.com/xpath-practice-page`) | Form Inputs, Boundary Values, Submit Handlers & Async Popup Window Events                     | ✅ Completed |

---

🎉 **Module 1: UI Automation Mastery with Playwright — Complete!**

---

## 📅 Daily Execution Log

### 🗓️ September 1, 2026 — Day 01: Fundamentals (`/day-01-the-internet`)

* **Core Focus:** Establishing resilient locator strategy (`getByRole`, `getByText`), basic user interactions, and page state assertions.

* **Key Workflows:** Automated dynamic control handling, checkbox toggles, input field filling, and basic navigation checks.

### 🗓️ September 2, 2026 — Day 02: Complex UI & Bug Logging (`/day-2-demoQa`)

* **Core Focus:** Handling complex UI components, dynamic waits, frames, modal dialogs, and documenting bugs.

* **Key Workflows:** Form edge-case testing, element visibility validations, and writing structured bug reports under ` /Defects_&_Bugreports`. Learned how to cut out dynamic ad network frames and layout-shifting elements using custom `beforeEach` fixtures (`page.route()` and `page.evaluate()`) for flake-free execution.

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

* **Core Focus:** Automating end-to-end user workflows, interactive UI components, network API mocking, bug reporting, and dynamic timer assertions on CommitQuality.

* **Test Suite Breakdown:**

* `filter-product.spec.ts`: Validates product table search queries, exact name matching, non-existent item queries, and search resets.

* `add-product.spec.ts`: Validates new product creation flows, unique item additions, and mandatory field validation errors.

* `components.spec.ts`: Automates standard navigation, click types (single/double/right), radio buttons, checkboxes, and select dropdowns.

* `accordion.spec.ts`: Tests expand/collapse states and conditional text element visibility.

* `popups.spec.ts`: Intercepts native browser alert dialogs (`page.once('dialog')`) and verifies modal overlay triggers.

* `api-mocking.spec.ts`: Validates real network responses and mocks API payloads using Playwright's `page.route()` handler.

* `contact-us.spec.ts`: Validates contact form submission workflows and edge cases.

* `clock.spec.ts`: Verifies dynamic clock timer assertions over time delays.

* **Bug Reports Tracked:**

* `BUG-CQ-011`: Contact Form payload mismatch & backend API silent drop (Tested across macOS, Windows, Linux, Android).

### 🗓️ September 12, 2026 — Day 12: Restful-Booker-Platform (`/day-12-restful-booker-platform`)

* **Core Focus:** Automating hotel reservation workflows, date pickers, contact query submissions, SPA routing issues, and backend concurrency performance logging.

* **Test Suite Breakdown:**

* `check-availability.spec.ts`: Validates date input fields, manual check-in/check-out pickers, and availability search triggers.

* `booking.spec.ts`: Automates room selection, guest personal details entry, date selection drag, and booking confirmation modal verification.

* `contact-message.spec.ts`: Validates customer inquiry form submissions and required input field validation error states.

* **Bug Reports Tracked:**

* `BUG-RBP-001`: Navigation route updates URL but target page content fails to load (`/amenities`).

* `BUG-RBP-002`: Multi-account login concurrency causes backend failure, elevated latency, and application crashes under session load.

### 🗓️ September 13, 2026 — Day 13: OrangeHRM Automated Test Suite (`/day-13-orangehrm`)

* **Core Focus:** Automating enterprise HR management workflows, dynamic grid searches, sub-tab dropdown navigation, re-authentication security modals, and structured single-file test specs.

* **Test Suite Breakdown:**

* `login.spec.ts`

* `dashboard.spec.ts`

* `admin.spec.ts`

* `pim.spec.ts`

* `leave.spec.ts`

* `apply-leave.spec.ts`

* `leave-requirements.spec.ts`

* `recruitment.spec.ts`

* `performance.spec.ts`

* `directory.spec.ts`

* `maintenance.spec.ts`

* `claim.spec.ts`

### 🗓️ September 14, 2026 — Day 14: Cymbal Direct E-Commerce Automation (`/day-14-cymbal-direct`)

* **Core Focus:** Automating end-to-end user journeys for the Cymbal Direct microservices platform, product catalog iterations, dynamic cart drawer management, and order completions.

* **Test Suite Breakdown:**

* `select-product.spec.ts`

* `add-to-cart.spec.ts`

* `emty-cart.spec.ts`

* `place-order.spec.ts`

### 🗓️ September 15, 2026 — Day 15: SAP UI5 Demo Applications (`/day-15-ui5.sap.demoapps`)

* **Core Focus:** Automating enterprise UI controls, dynamic tab view switches, custom calendar team planning widgets, popup promises, custom themes (`sap_horizon_dark`), database view grids, and AI integrations.

* **Test Suite Breakdown:**

* `brose.list.spec.ts`

* `calender.spec.ts`

* `shoping-cart.spec.ts`

* `SQL.spec.ts`

* `testin-ai.spec.ts`

* `Tools.spec.ts`

* `uxc-integration.spec.ts`

* **Bug Reports Tracked:**

* `Navbar cart counter fails to update and out of stock.md`: Dynamic cart badge failing to increment upon adding items and missing out-of-stock inventory validations.

### 🗓️ September 16, 2026 — Day 16: SelectorsHub XPath Practice (`/day-16-selectorshub`)

* **Core Focus:** Automating form validation workflows, boundary value testing on numerical spin buttons, element interaction, and handling asynchronous popup window triggers.

* **Test Suite Breakdown:**

* `xpath-practice.spec.ts`: Validates input form entries (email, password, company, location), tests negative and large boundary value inputs for mobile spin buttons, executes form submissions, and intercepts external YouTube channel popup events (`page.waitForEvent('popup')`).

---

# 🌐 Module 2: API Testing & Browser DevTools Integration

Welcome to **Module 2 - API Testing & DevTools**. This section focuses on RESTful API validation, browser network traffic inspection, and programmatic execution logging across API challenge endpoints.

---

## 📌 Progress Dashboard

| Date                   | Day        | Target Site                                                   | Core Focus Areas                                                                                                                 | Status      |
| :--------------------- | :--------- | :------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------- | :---------- |
| **September 17, 2026** | **Day 17** | EvilTester API Challenges (`apichallenges.eviltester.com`)    | Multi-Layered API Testing: Postman Collections, DevTools HAR Traces & Node.js Execution Simulation                               | ✅ Completed |
| **September 18, 2026** | **Day 18** | Restful Booker (`restful-booker.herokuapp.com`)               | End-to-End Restful Booker API Workflows, Environment State Binding, DevTools Tracing & Performance Profiling                     | ✅ Completed |
| **September 19, 2026** | **Day 19** | Practice Software Testing (`api.practicesoftwaretesting.com`) | AI-Assisted Postman Automation, Bearer Token Auth, Cart/Invoice Workflows & DevTools Tracing                                     | ✅ Completed |
| **September 20, 2026** | **Day 20** | GoREST API (`gorest.co.in`)                                   | API Bearer Token Negative Auth Testing, Newman/Postman CLI Execution & GitHub Actions CI/CD Integration                          | ✅ Completed |
| **September 21, 2026** | **Day 21** | ServeRest API (`serverest.dev`)                               | End-to-End E-Commerce Auth & User Management, Dynamic Password Mutation, Server Crash Edge-Cases & English Log Assertions        | ✅ Completed |
| **September 22, 2026** | **Day 22** | JSONPlaceholder (`jsonplaceholder.typicode.com`)              | E2E REST Workflows, Comment Moderation (DELETE), Photo PATCHing, Identity PUT Replacement & Scale Edge Cases                     | ✅ Completed |
| **September 23, 2026** | **Day 23** | ReqRes API (`reqres.in`)                                      | Functional API Testing, Postman/Newman CI Integration, Collection-Level Authentication, Dynamic Variables & Request Chaining     | ✅ Completed |
| **September 24, 2026** | **Day 24** | HTTPBin API (`httpbin.org`)                                   | HTTP Methods, Status Codes, Headers, Query Parameters, Cookies, Redirects, Delays, Streaming, Bytes, UUIDs & Response Inspection | ✅ Completed |
| **September 25, 2026** | **Day 25** | DummyJSON                                                     | GET Requests, HTTP Status Validation, JSON Response Validation & Basic Response-Structure Checks                                 | ✅ Completed |
| **September 26, 2026** | **Day 26** | Rick and Morty GraphQL API                                    | GraphQL Queries, Nested Relationships, Multiple Records, Pagination & Automated Response Assertions                              | ✅ Completed |

> **API Testing Status:** ✅ **Complete through Day 26**
>
> **Module 2 Status:** 🔄 **DevTools work remains to be completed before Module 2 is fully closed.**

---

## 📅 Daily Execution Log

### 🗓️ September 17, 2026 — Day 17: Multi-Layered API Testing & Audit Logging (`/day-17-apichallenges-practice`)

* **Core Focus:** Establishing a 3-layer QA verification process across Postman, Chrome DevTools, and automated Node.js simulation scripts while persisting session audit logs.

* **Multi-Tool Architecture Breakdown:**

* **Postman Integration:** Configured session token retrieval (`POST /challenger`), stored dynamic `X-Challenger` header parameters inside environment variables (`day-17-apichallenges-env.postman_environment.json`), and verified `GET /todos` / `POST /todos` end-to-end endpoints.

* **Browser DevTools HAR Trace:** Monitored HTTP request/response lifecycles during live web interactions and exported raw network activity as a HAR log (`apichallenges.com.har`) to `Logs/`.

* **Node.js Simulation Script (`simulation.js`):** Developed an asynchronous script using native `fetch` to programmatically execute session creation, query item lists, create new TODO entities, and automatically write execution audit logs to disk.

### 🗓️ September 18, 2026 — Day 18: Restful Booker API Testing & Performance Analysis (`/day-18-restfulbooker`)

* **Core Focus:** Automating dynamic REST workflows across authentication, booking retrieval, full/partial updates, and deletions while generating DevTools trace profiles.

* **Multi-Tool Architecture Breakdown:**

* **Postman Integration:** Dynamic token extraction (`POST /auth`), environment binding (`baseUrl`, `token`, `bookingId`), Cookie header authentication (`Cookie: token={{token}}`), and complete CRUD request validations (`POST`, `GET`, `PUT`, `PATCH`, `DELETE`).

* **DevTools Network & Performance Profiling:** Exported raw network request HAR traces (`restful-booker_network_trace.har`) and recorded performance profiles (`Profile-restful-booker.json`) capturing DOM shifts, network latency, and rendering benchmarks.

### 🗓️ September 19, 2026 — Day 19: Practice Software Testing API Workflows & DevTools (`/day-19-practice-software-testing`)

* **Core Focus:** Building an end-to-end e-commerce REST API workflow using Postman AI, handling dynamic Bearer tokens, state preservation across cart/order requests, and capturing network/performance trace artifacts.

* **Multi-Tool Architecture Breakdown:**

* **Postman AI Integration:** Prompt-engineered Postman AI Agent to create `day-19-practice-software-testing` collection and `Day 19 - Practice Software Testing Environment`. Managed dynamic variable extraction for `bearerToken`, `productId`, `cartId`, cart item insertion, and final checkout invoice creation.

* **DevTools Tracing & Performance:** Intercepted browser request/response cascades as `api.practicesoftwaretesting.com.har` and recorded CPU main-thread rendering performance profiles as `Trace-20260919T191850.json`.

### 🗓️ September 20, 2026 — Day 20: GoREST Authentication Negative Testing & CI/CD Pipeline (`/day-20-gorest`)

* **Core Focus:** Comprehensive negative authentication testing for Bearer Token APIs, collection run execution, and automated execution via GitHub Actions Postman CLI workflows.

* **Postman Collection & Environment:**

* Built test suites for invalid, missing, malformed, empty, and expired tokens across `GET`, `POST`, `PATCH`, and `DELETE` methods.

* Bound authentication state inside `Day 20 - GoRest Environment.postman_environment.json`.

* **CI/CD Automation (GitHub Actions):**

* Automated collection execution on `push` triggers using Postman CLI inside `.github/workflows/postman.yml` with secure secret variable injections (`POSTMAN_API_KEY`).

* **Run Artifacts:**

* Exported local execution test summaries and terminal output screenshots.

### 🗓️ September 21, 2026 — Day 21: ServeRest End-to-End API Workflows & User Management (`/day-21-serverest`)

* **Core Focus:** Automated user administration lifecycle, Bearer token extraction, dynamic password mutation, edge-case server failure assertions, and full Portuguese-to-English translation mapping.

* **Postman Collection (`day-21-serverest.postman_collection.json`):**

* Built a complete 15-request API testing collection covering authentication (`POST /login`), catalog queries (`GET /usuarios`), user registration (`POST /usuarios`), negative validation (`400 Bad Request`), deliberate server crashes (`500 Internal Server Error`), upsert updates (`PUT /usuarios/{_id}`), and total data cleanup (`DELETE /usuarios/{_id}`).

* **Environment Configuration (`Day 21 - ServeRest Environment.postman_environment.json`):**

* Managed dynamic variables for `baseUrl`, `loginEmail`, `loginPassword`, `authToken`, `johnWickId`, and `johnWickEmail`.

* **CI/CD Pipeline Integration:**

* Exported test run summaries and execution screenshots under `Screenshots/`, triggering GitHub Actions workflow execution automatically via root `.github/workflows/postman.yml`.

### 🗓️ September 22, 2026 — Day 22: JSONPlaceholder Integration & Edge Testing (`/day-22-jsonplaceholder`)

* **Core Focus:** End-to-end integration and edge-case testing against JSONPlaceholder. Executed full CRUD cycles, dynamic variable chaining, comment moderation, partial updates, full record replacement, and high-volume boundary stress testing.

* **Test Suite Breakdown & Assertion Results (28/28 Passed):**

* `01_GET_Posts_Catalog`: Asserts `200 OK` and verifies the post catalog contains 100 items.

* `02_POST_Create_New_Post`: Asserts `201 Created`, creates a new post, and dynamically captures `postId` (ID `101`).

* `03_POST_Volume_Stress_Simulation`: Asserts `201 Created` for volume item creation scaling bounds (#501).

* `04_GET_Post_Comments_Moderation`: Fetches post comments, asserts `200 OK`, and extracts target `commentId`.

* `05_DELETE_Inappropriate_Comment`: Asserts `200 OK` on deleting flagged comment resource.

* `06_PATCH_Update_Photo_Title`: Asserts `200 OK` and validates partial title update on target photo.

* `07_PUT_Replace_User_Identity`: Asserts `200 OK` and verifies total user record payload replacement.

* `08_GET_Baseline_Users_Check`: Asserts `200 OK` and confirms default 10-user record array.

* `09_GET_Over_1k_Users_Scale_EdgeCase`: Tests out-of-bounds query (`/users/1001`), asserting `404 Not Found` without server crash (`500`).

* **Root Cause Analysis (RCA) & Troubleshooting:**

* **Initial Failure:** 6 tests failed across Requests 06 and 07 due to missing initial values for `photoId` and `userId` in the environment scope, causing URLs to send unparsed template strings (`%7B%7BphotoId%7D%7D`).

* **Resolution:** Added default variable definitions to `day 22 JSONPlaceholder` environment context, driving test execution to a clean **28/28 passing state (100%)**.

### 🗓️ September 23, 2026 — Day 23: ReqRes API Functional Testing with Postman (`/day-23-reqres`)

## 📌 Overview

This module covers automated functional API testing against the **ReqRes API** using Postman and Newman CI integration. It includes end-to-end test assertions, collection-level authentication headers, dynamic variable extraction, and request chaining.

---

## 🔑 Environment Setup (`day 23 reqres`)

| Variable Key    | Scope / Type       | Description                                    |
| :-------------- | :----------------- | :--------------------------------------------- |
| `baseUrl`       | `String`           | Target API host address (`https://reqres.in`)  |
| `api_key`       | `Secret / Header`  | Authorization key passed via collection header |
| `userId`        | `Number`           | Target user ID for endpoint checks             |
| `createdUserId` | `Dynamic Variable` | Extracted post `POST /api/users` execution     |
| `page`          | `Number`           | Pagination query variable                      |

---

## 🚀 Detailed Request & Test Assertions Breakdown

### Global Collection Setup

* **Header:** `x-api-key: {{api_key}}` applied automatically across all endpoints.

### 1. Users Folder

#### 1.1 `GET /api/users?page={{page}}` — List Users

* **Goal:** Verify user pagination data.

* **Test Assertions:**

* Status code is `200 OK`.

* Response time is less than `1000ms`.

* `page` in response body equals `2`.

* `data` array contains items and verifies `data[0].id` exists.

#### 1.2 `GET /api/users/{{userId}}` — Single User

* **Goal:** Verify retrieval of a specific user.

* **Test Assertions:**

* Status code is `200 OK`.

* Response contains `data.id` matching variable `userId`.

* Response contains `data.email`, `data.first_name`, and `data.last_name`.

#### 1.3 `POST /api/users` — Create User

* **Goal:** Create a new user resource and extract its ID dynamically.

* **Payload:**

```json
{
  "name": "morpheus",
  "job": "leader"
}
```

* **Dynamic Variable:** The created user's ID is extracted from the response and stored as `createdUserId` for subsequent request chaining.

---

### 🗓️ September 24, 2026 — Day 24: HTTPBin API Testing with Postman

API functional testing with Postman using HTTPBin, covering HTTP status codes, methods, request/response inspection, query params, custom headers, JSON/form-data, cookies, redirects, delays, streaming, bytes, UUIDs, response headers, image/content-type, user-agent/IP, and environment variables.

## 🎯 Objectives

* Validate different HTTP status codes.
* Test common HTTP methods.
* Validate cookies and redirects.
* Test query parameters and custom headers.
* Validate form-data requests.
* Test delayed and streaming responses.
* Validate UUID, range, link, image, IP, and user-agent endpoints.
* Inspect response headers and response characteristics.
* Use Postman environment variables for dynamic test data.

## 🔧 Environment

**API:** HTTPBin

**Base URL:** `https://httpbin.org`

**Tool:** Postman

**Collection:** `day-24-httpbin`

**Schema:** Postman Collection v2.1

**Base variable:** `{{baseUrl}}`

### Environment: `day 24 httpbin`

| Variable         | Value                      |
| :--------------- | :------------------------- |
| `baseUrl`        | `https://httpbin.org`      |
| `statusCode`     | `200`                      |
| `etag`           | `abc123`                   |
| `delay`          | `1`                        |
| `redirectTarget` | `https://httpbin.org/get`  |
| `numRedirects`   | `3`                        |
| `cookieName`     | `testCookie`               |
| `cookieValue`    | `hello123`                 |
| `byteCount`      | `100`                      |
| `chunkSize`      | `10`                       |
| `chunkDelay`     | `0.5`                      |
| `streamCount`    | `5`                        |
| `encodedValue`   | `SFRUUEJJTiBpcyBhd2Vzb21l` |
| `contentType`    | `application/json`         |
| `userAgent`      | `PostmanRuntime/7.0`       |
| `lastUUID`       | empty initially            |

## 📋 Collection Coverage

### 1. Status Codes

GET/POST/PUT `/status/{{statusCode}}`

Tests expected status and response time `<3000ms`.

### 2. Cookies

Set/get/delete/multiple cookies, with accepted `200`/`302` responses.

### 3. Redirects

Absolute/relative/redirect-to GET and 307 scenario, redirect n times, no follow, HTTPS, and history.

### 4. Anything

GET/POST/PUT/PATCH/DELETE/HEAD/OPTIONS using the corresponding `/anything` endpoints, request bodies, and assertions.

### 5. Query Params

`/anything?foo=bar&baz=qux`

### 6. Custom Headers

`X-Custom-Header: PostmanTest`

`X-Day: 24`

### 7. Form Data

URL encoded:

`name=Postman`

`day=24`

### 8. Delay

`/delay/{{delay}}`

Parses delay using `parseInt` and validates response-time behavior.

### 9. Drip

`/drip?numbytes={{byteCount}}&duration={{delay}}&delay={{chunkDelay}}&code=200`

### 10. Streaming

`/stream/{{streamCount}}`

`/stream-bytes/{{byteCount}}`

### 11. UUID

`/uuid`

Uses regex validation and stores the UUID using:

```javascript
pm.environment.set("lastUUID", pm.response.json().uuid)
```

### 12. Range

`/range/{{byteCount}}`

Checks `Accept-Ranges` or `Content-Range`.

### 13. Links

`/links/5/0`

Checks for `<a href`.

### 14. Images

`/image/png`

`/image/svg`

`/image/webp`

Validates expected content types.

### 15. IP and User Agent

`/ip`

`/user-agent`

### 16. Response Inspection

Validates cache control and `Last-Modified` response headers.

## 🧪 Assertion Strategy

```javascript
pm.response.to.have.status(200);
```

Environment status code validation.

```javascript
pm.expect(pm.response.responseTime).to.be.below(3000);
```

JSON property validation.

Exact JSON value validation.

Header validation.

Response size validation.

Regex validation.

## 🔄 Dynamic Variable Handling

Dynamic response values are captured from responses and stored in Postman environment variables for subsequent requests.

Example:

```javascript
pm.environment.set("lastUUID", pm.response.json().uuid);
```

## 📊 Main Test Coverage

| Area                | Coverage                                                                     |
| :------------------ | :--------------------------------------------------------------------------- |
| Status Codes        | GET, POST, PUT                                                               |
| Cookies             | Set, Get, Delete, Multiple                                                   |
| Redirects           | Absolute, Relative, Redirect-To, 307, N Redirects, No Follow, HTTPS, History |
| HTTP Methods        | GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS                                 |
| Query Parameters    | Query parameter validation                                                   |
| Headers             | Custom header validation                                                     |
| Form Data           | URL encoded form validation                                                  |
| Delay               | Delayed responses                                                            |
| Drip                | Streaming byte delivery                                                      |
| Streaming           | Stream and stream-bytes                                                      |
| UUID                | UUID generation and regex validation                                         |
| Range               | Byte range headers                                                           |
| Links               | Link generation                                                              |
| Images              | PNG, SVG, WebP                                                               |
| IP/User Agent       | Request environment inspection                                               |
| Response Inspection | Cache-Control, Last-Modified                                                 |

## 📚 Key QA Concepts

1. HTTP status-code validation
2. Request and response inspection
3. Environment-driven test data
4. Dynamic variable chaining
5. Response header and payload validation

## 📁 Suggested Project Structure

```text
day-24-httpbin/

├── Collections/
│   └── day-24-httpbin.postman_collection.json
├── Environment/
│   └── day 24 httpbin.postman_environment.json
├── Screenshots/
│   ├── Collection-Runner-1.png
│   └── Collection-Runner-2.png
└── README.md
```

## 🎯 Day 24 Outcome

HTTPBin was used to practice broad HTTP-level API testing through Postman, including status codes, HTTP methods, cookies, redirects, headers, delays, streaming, bytes, UUIDs, response headers, content types, and request environment inspection.

**Collection:** `day-24-httpbin`

**Base URL:** `https://httpbin.org`

**Environment:** `day 24 httpbin`

---

# Day 25: DummyJSON API Testing with Postman

API testing practice using **Postman** and the **DummyJSON API**, focusing on GET requests, HTTP status validation, JSON response validation, and basic response-structure checks.

---

## 🎯 Objective

The objective of Day 25 was to practice basic API testing with Postman by validating multiple GET requests against the DummyJSON API.

The tests focused on:

* Verifying successful HTTP responses
* Confirming that responses are returned as JSON
* Validating the presence of expected response arrays
* Confirming that returned arrays contain at least one record
* Running multiple API requests together as a collection

## 🔖 Day 25 Summary

**Focus:** API Testing with Postman

**API:** DummyJSON

**Method:** GET

**Requests:** 3

**Tests:** 12

**Passed:** 12

**Failed:** 0

**Pass Rate:** 100%

**Execution Time:** 1363 ms

**Status:** ✅ ALL PASSED

## 🔧 API Under Test

**API:** DummyJSON

**Base URL:** `https://dummyjson.com`

**Environment:** `Postman day 25 dummyjson`

## 📋 Requests

### 1 Get Products

**Method:** GET

**Validation:**

* Status `200`
* Response is JSON
* `products` is an array
* Array contains at least one record

### 2 Get Carts

**Method:** GET

**Validation:**

* Status `200`
* Response is JSON
* `carts` is an array
* Array contains at least one record

### 3 Get Comments

**Method:** GET

**Validation:**

* Status `200`
* Response is JSON
* `comments` is an array
* Array contains at least one record

## 🧪 Test Strategy

| Validation Area          | Products            | Carts               | Comments            |
| :----------------------- | :------------------ | :------------------ | :------------------ |
| HTTP 200                 | ✅                   | ✅                   | ✅                   |
| JSON Format              | ✅                   | ✅                   | ✅                   |
| Expected Top-Level Array | `products`          | `carts`             | `comments`          |
| Data Presence            | At least one record | At least one record | At least one record |

## 📊 Test Execution Results

**Run Date:** 25 Sep 2026

**Run Time:** 10:50 UTC

**Run Status:** ALL PASSED

| Metric         | Result                                 |
| :------------- | :------------------------------------- |
| Requests       | 3                                      |
| Tests Passed   | 12                                     |
| Tests Failed   | 0                                      |
| Total Time     | 1363 ms                                |
| Test Pass Rate | 100%                                   |
| Run ID         | `6a1c5cae-604d-4dd3-999b-75a830672763` |

## 📋 Request Results

| Request      | Method | Status | Response Time | Tests      |
| :----------- | :----- | :----- | :------------ | :--------- |
| Get Products | GET    | 200 OK | ~450 ms       | 4/4 passed |
| Get Carts    | GET    | 200 OK | ~460 ms       | 4/4 passed |
| Get Comments | GET    | 200 OK | ~453 ms       | 4/4 passed |

## 🔍 Detailed Results

### Get Products

**4/4 tests passed**

* HTTP status validation passed.
* JSON response validation passed.
* `products` array validation passed.
* Data presence validation passed.

### Get Carts

**4/4 tests passed**

* HTTP status validation passed.
* JSON response validation passed.
* `carts` array validation passed.
* Data presence validation passed.

### Get Comments

**4/4 tests passed**

* HTTP status validation passed.
* JSON response validation passed.
* `comments` array validation passed.
* Data presence validation passed.

## 📚 QA Learning Outcomes

* HTTP status validation
* Response format validation
* Response schema/structure validation
* Basic data validation
* Collection-level execution

## 📸 Run Evidence

`Day-25-DummyJSON-API-Testing-Run-Report.html`

The run evidence records:

* Collection execution status
* Individual request results
* Individual tests
* Response times
* Overall pass/fail status
* Run ID
* Environment information

## 🎯 Outcome

Day 25 completed with **3 API requests** and **12 total tests**, with all tests passing.

**Pass Rate:** 100%

---

# 🗓️ September 26, 2026 — Day 26: Rick and Morty GraphQL API Testing (`/day-26`)

## 🎯 Objective

Day 26 focused on GraphQL API testing using Postman against the Rick and Morty GraphQL API.

The goal was to move beyond basic REST GET validation and test GraphQL-specific response structures, nested relationships, multiple-record queries, and pagination while using environment-driven test data and automated JavaScript assertions.

This completes the **API Testing portion of Module 2**.

---

## 🚀 Collection Overview

The collection contains **10 POST requests** structured into two core folders:

## 📁 Characters

* **GET SINGLE CHARACTER:** Validates scalar fields (`id`, `name`, `status`, `species`, `type`, `gender`) and single nested objects (`origin`, `location`).
* **CHARACTER WITH EPISODES:** Tests nested array relationships (`character → episode`).
* **MULTIPLE CHARACTERS:** Validates array queries using `charactersByIds(ids: [...])`.
* **LIST CHARACTERS:** Tests paginated character queries along with metadata (`info` & `results`).
* **CHARACTERS PAGE 2:** Validates `page` parameter arguments directly within GraphQL queries (`page: 2`).

## 📁 Episodes

* **GET SINGLE EPISODE:** Validates single episode fetching and scalar assertions.
* **EPISODE WITH CHARACTERS:** Tests reverse nested array relationships (`episode → characters`).
* **MULTIPLE EPISODES:** Validates multi-record fetching using `episodesByIds(ids: [...])`.
* **LIST EPISODES:** Tests listing episodes with pagination details (`count`, `pages`, `next`, `prev`).
* **EPISODES PAGE 2:** Verifies pagination transitions on page 2.

---

# 📊 Automated Assertions & Quality Checks

Every request includes JavaScript tests checking:

* **HTTP Status Code:** `200 OK`
* **Response Data Payload:** Presence of the `data` property
* **Field Completeness:** Ensures requested fields are present and unrequested fields are omitted
* **Data Types:** Validates arrays, objects, and string matches against environment variables
* **Pagination Contracts:** Verifies page state changes, e.g. `prev != null` on page 2

---

# 🛠️ Environment Configuration

The environment file:

`day 26 rick and morty graphql.postman_environment.json`

is pre-configured with the following variables stored in the **Initial Value** column:

| Variable       | Value                                 | Description                         |
| :------------- | :------------------------------------ | :---------------------------------- |
| `baseUrl`      | `https://rickandmortyapi.com/graphql` | Public GraphQL Endpoint             |
| `characterId1` | `1`                                   | Primary character ID (Rick Sanchez) |
| `characterId2` | `2`                                   | Secondary character ID              |
| `characterId3` | `3`                                   | Tertiary character ID               |
| `episodeId1`   | `1`                                   | Primary episode ID                  |
| `episodeId2`   | `2`                                   | Secondary episode ID                |
| `episodeId3`   | `3`                                   | Tertiary episode ID                 |
| `page`         | `1`                                   | Pagination page number              |

---

# 📁 Project Structure

```text
day-26/
│
├── Collections/
│   └── day-26-rick-and-morty-graphql.postman_collection.json
│
├── Environment/
│   └── day 26 rick and morty graphql.postman_environment.json
│
├── HTML Report/
│   └── Day-26-Rick-and-Morty-GraphQL-Test-Report.html
│
└── README.md
```

---

# 🎯 Day 26 Outcome

Day 26 completes the **API Testing track** of the 90-day QA challenge.

The API portion progressed from REST API fundamentals through authentication, CRUD operations, negative testing, environment variables, request chaining, Newman/CI execution, HTTP-level testing, response validation, and finally GraphQL testing.

**API Testing Status:** ✅ **COMPLETE**

**Final API Testing Day:** **Day 26**

**API Type Covered:** REST + GraphQL

**Primary Tool:** Postman

**GraphQL API:** Rick and Morty API

**Day 26 Requests:** 10 POST requests

**Day 26 Focus:** GraphQL queries, nested relationships, multiple records, pagination, environment variables, and automated assertions.

---

# 🔜 Module 2 Remaining Work — DevTools

The API Testing portion is now complete.

The remaining Module 2 work is the **Browser DevTools** portion. The earlier days already incorporated HAR/network tracing and performance profiling as part of the API exercises; the remaining DevTools-focused work will be handled separately before Module 2 receives its final completion status.

**Current Module 2 state:**

| Module 2 Area          | Status              |
| :--------------------- | :------------------ |
| REST API Testing       | ✅ Complete          |
| Postman Testing        | ✅ Complete          |
| Newman / CLI Execution | ✅ Complete          |
| API Authentication     | ✅ Complete          |
| API Negative Testing   | ✅ Complete          |
| API Request Chaining   | ✅ Complete          |
| Environment Variables  | ✅ Complete          |
| GraphQL API Testing    | ✅ Complete — Day 26 |
| DevTools Investigation | 🔄 Remaining        |
| Module 2 Overall       | 🔄 In Progress      |

---

# 📁 Project Structure

## Module-1-UI-Automation/

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
│
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
│
├── day-03-sauce-demo/
│   ├── Defects_&_Bugreports/
│   ├── Tests/
│   │   ├── auth.spec.ts
│   │   ├── cart_&_checkout.spec.ts
│   │   ├── filter-and-sort.spec.ts
│   │   └── menu-navigation.spec.ts
│   └── README.md
│
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
│
├── day-05-ui-testing-playground/
│   ├── Defects_&_Bugreports/
│   │   ├── Defect-01-load-delay.md
│   │   └── Defect-02-inaccurate-location.md
│   ├── Tests/
│   │   ├── Ajax.data.spec.ts
│   │   ├── Alerts.spec.ts
│   │   ├── Animated Button.spec.ts
│   │   ├── Auto Wait.spec.ts
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
│
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
│
├── day-07-tricentis-Obstacale/
│   ├── Tests/
│   │   ├── comprehensive.spec.ts
│   │   ├── tough-cookie.spec.ts
│   │   └── wait-a-moment.spec.ts
│   └── README.md
│
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
│
├── day-09-locator-game/
│   ├── Tests/
│   │   ├── level-1.spec.ts
│   │   ├── level-2.spec.ts
│   │   ├── level-3.spec.ts
│   │   └── level-4.spec.ts
│   └── README.md
│
├── day-10-automation-camp/
│   ├── play2-automation.spec.ts
│   └── README.md
│
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
│
├── day-12-restful-booker-platform/
│   ├── Defect_&_Bugreports/
│   │   ├── DEFECT-01-button_visible_but_page_not_loading.md
│   │   └── DEFECT-02-servercrash.md
│   ├── Tests/
│   │   ├── booking.spec.ts
│   │   ├── check-availability.spec.ts
│   │   └── contact-message.spec.ts
│   └── README.md
│
├── day-13-orangehrm/
│   ├── Tests/
│   │   ├── login.spec.ts
│   │   ├── dashboard.spec.ts
│   │   ├── admin.spec.ts
│   │   ├── pim.spec.ts
│   │   ├── leave.spec.ts
│   │   ├── apply-leave.spec.ts
│   │   ├── leave-requirements.spec.ts
│   │   ├── recruitment.spec.ts
│   │   ├── performance.spec.ts
│   │   ├── directory.spec.ts
│   │   ├── maintenance.spec.ts
│   │   └── claim.spec.ts
│   └── README.md
│
├── day-14-cymbal-direct/
│   ├── Tests/
│   │   ├── select-product.spec.ts
│   │   ├── add-to-cart.spec.ts
│   │   ├── emty-cart.spec.ts
│   │   └── place-order.spec.ts
│   └── README.md
│
├── day-15-ui5.sap.demoapps/
│   ├── Defects_&_Bugreports/
│   │   └── Navbar cart counter fails to update and out of stock.md
│   ├── Tests/
│   │   ├── brose.list.spec.ts
│   │   ├── calender.spec.ts
│   │   ├── shoping-cart.spec.ts
│   │   ├── SQL.spec.ts
│   │   ├── testin-ai.spec.ts
│   │   ├── Tools.spec.ts
│   │   └── uxc-integration.spec.ts
│   └── README.md
│
└── day-16-selectorshub/
    ├── Tests/
    │   └── xpath-practice.spec.ts
    └── README.md
```

## Module-2-API-Testing_DevTools/

```text
Module-2-API-Testing_DevTools/

├── day-17-apichallenges-practice/
│   ├── Collections/
│   │   └── day-17-apichallenges.postman_collection.json
│   ├── Environments/
│   │   └── day-17-apichallenges-env.postman_environment.json
│   ├── Logs/
│   │   ├── apichallenges.com.har
│   │   ├── 01_POST_Start_Challenger_Session.log
│   │   ├── 02_GET_Todos.log
│   │   └── 03_POST_Create_Todo.log
│   ├── README.md
│   └── simulation.js
│
├── day-18-restfulbooker/
│   ├── Collections/
│   │   └── day-18-restful-booker.postman_collection.json
│   ├── Enviroments/
│   │   └── Day 18 - Restful Booker Environment.postman_environment.json
│   ├── Devtools/
│   │   ├── Network_Configs/
│   │   │   └── restful-booker_network_trace.har
│   │   └── Performance/
│   │       └── Profile-restful-booker.json
│   └── README.md
│
├── day-19-practice-software-testing/
│   ├── Collections/
│   │   └── day-19-practice-software-testing.postman_collection.json
│   ├── Environments/
│   │   └── Day 19 - Practice Software Testing Environment.postman_environment.json
│   ├── Devtools/
│   │   ├── Network_Configs/
│   │   │   └── api.practicesoftwaretesting.com.har
│   │   └── Performance/
│   │       └── Trace-20260919T191850.json
│   └── README.md
│
├── day-20-gorest/
│   ├── Collections/
│   │   └── day-20-gorest.postman_collection.json
│   ├── Environments/
│   │   └── Day 20 - GoRest Environment.postman_environment.json
│   ├── Screenshots/
│   │   └── day-20-gorest-run.png
│   ├── day-20-gorest.postman_test_run.json
│   └── README.md
│
├── day-21-serverest/
│   ├── Collections/
│   │   └── day-21-serverest.postman_collection.json
│   ├── Environment/
│   │   └── Day 21 - ServeRest Environment.postman_environment.json
│   ├── Screenshots/
│   │   └── Day21_Collection_Runner_Pass.png
│   ├── day-21-serverest_test_run.json
│   └── README.md
│
├── day-22-jsonplaceholder/
│   ├── Collections/
│   │   └── day-22-jsonplaceholder.postman_collection.json
│   ├── Environment/
│   │   └── day-22-jsonplaceholder.postman_environment.json
│   ├── Screenshots/
│   │   └── Day22_Collection_Runner_Pass.png
│   └── README.md
│
├── day-23-reqres/
│   ├── Collections/
│   │   ├── Collection-Runner/
│   │   │   └── day-23-reqres.postman_test_run.json
│   │   ├── Screenshots/
│   │   │   ├── Collection-Runner-1.png
│   │   │   └── Collection-Runner-2.png
│   │   └── day-23-reqres.postman_collection.json
│   ├── Enviroment/
│   │   └── day 23 reqres.postman_environment.json
│   └── README.md
│
├── day-24-httpbin/
│   ├── Collections/
│   │   └── day-24-httpbin.postman_collection.json
│   ├── Environment/
│   │   └── day 24 httpbin.postman_environment.json
│   ├── Screenshots/
│   │   ├── Collection-Runner-1.png
│   │   └── Collection-Runner-2.png
│   └── README.md
│
├── day-25-dummyjson/
│   ├── Collections/
│   │   └── day-25-dummyjson.postman_collection.json
│   ├── Environment/
│   │   └── Postman day 25 dummyjson.postman_environment.json
│   ├── Reports/
│   │   └── Day-25-DummyJSON-API-Testing-Run-Report.html
│   └── README.md
│
└── day-26/
    ├── Collections/
    │   └── day-26-rick-and-morty-graphql.postman_collection.json
    ├── Environment/
    │   └── day 26 rick and morty graphql.postman_environment.json
    ├── HTML Report/
    │   └── Day-26-Rick-and-Morty-GraphQL-Test-Report.html
    └── README.md
```

---

# 🏁 Current Portfolio Milestone

## Module 1 — UI Automation

**Status:** ✅ Complete

**Days:** 01–16

**Primary Technology:** Playwright + TypeScript

---

## Module 2 — API Testing & DevTools

**API Testing:** ✅ Complete through Day 26

**DevTools:** 🔄 Remaining

**Overall Module 2:** 🔄 In Progress

Day 26 represents the final planned API-testing exercise, expanding the portfolio from REST API testing into GraphQL testing with nested data, multiple-record queries, pagination, environment variables, and automated assertions.

The remaining DevTools work will be completed before Module 2 receives its final **✅ Complete** status.

---

# 🚀 Current Progress

**Completed Days:** 01–26

**Completed Modules:** Module 1

**Completed API Track:** Module 2 — API Testing

**Remaining Module 2 Track:** DevTools

**Next Milestone:** Complete the remaining DevTools work and close Module 2.
