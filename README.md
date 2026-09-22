# 90-day-qa-challenge

**QA/QE 90-Days Portfolio | 7 Modules: UI Automation, API/DevTools, Buggy Sites, Security, E2E Workflows, Performance & Advanced Target Envs**

---

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
* **Core Focus:** Automating hotel reservation workflows, date pickers, contact query submissions, single-page application (SPA) routing issues, and backend concurrency performance logging on `https://automationintesting.online/`.
* **Test Suite Breakdown:**

  * `check-availability.spec.ts`: Validates date input fields, manual check-in/check-out pickers, and availability search triggers.
  * `booking.spec.ts`: Automates room selection, guest personal details entry, date selection drag, and booking confirmation modal verification.
  * `contact-message.spec.ts`: Validates customer inquiry form submissions and required input field validation error states.
* **Bug Reports Tracked:**

  * `BUG-RBP-001`: Navigation route updates URL but target page content fails to load (`/amenities`). (Tested across macOS, Windows, Linux, Android).
  * `BUG-RBP-002`: Multi-account login concurrency causes backend failure, elevated latency, and application crashes under session load. (Tested across macOS, Windows, Linux, Android).

### 🗓️ September 13, 2026 — Day 13: OrangeHRM Automated Test Suite (`/day-13-orangehrm`)

* **Core Focus:** Automating enterprise HR management workflows, dynamic grid searches, sub-tab dropdown navigation, re-authentication security modals, and structured single-file test specs on `https://opensource-demo.orangehrmlive.com/`.
* **Test Suite Breakdown:**

  * `login.spec.ts`: Validates user login authentication and dashboard redirection.
  * `dashboard.spec.ts`: Main navigation side-menu and UI element visibility checks.
  * `admin.spec.ts`: User role filtering and search result table grid verification.
  * `pim.spec.ts`: Employee search by name/ID and record table population.
  * `leave.spec.ts`: Leave list filters, date picker inputs, and form container state.
  * `apply-leave.spec.ts`: Navigation to apply sub-tab, leave type selection, and form submission checks.
  * `leave-requirements.spec.ts`: Accessing configuration options and validating leave type tables.
  * `recruitment.spec.ts`: Filtering candidates by name/job title and grid assertions.
  * `performance.spec.ts`: Searching performance trackers and evaluating result tables.
  * `directory.spec.ts`: Employee directory queries and card view assertions.
  * `maintenance.spec.ts`: Password re-authentication prompt handling and record purge options.
  * `claim.spec.ts`: Search filters and claim request records display.

### 🗓️ September 14, 2026 — Day 14: Cymbal Direct E-Commerce Automation (`/day-14-cymbal-direct`)

* **Core Focus:** Automating end-to-end user journeys for the Cymbal Direct microservices platform (`https://cymbal-shops.retail.cymbal.dev/`), product catalog iterations, dynamic cart drawer management, and order completions.
* **Test Suite Breakdown:**

  * `select-product.spec.ts`: Navigates through individual product catalog items sequentially.
  * `add-to-cart.spec.ts`: Validates item selection, quantities, and cart additions across product routes.
  * `emty-cart.spec.ts`: Tests quantity dropdown updates and clearing cart inventory.
  * `place-order.spec.ts`: Verifies checkout input forms, shipping details, and order submission flows.

### 🗓️ September 15, 2026 — Day 15: SAP UI5 Demo Applications (`/day-15-ui5.sap.demoapps`)

* **Core Focus:** Automating enterprise UI controls, dynamic tab view switches, custom calendar team planning widgets, popup promises, custom themes (`sap_horizon_dark`), database view grids, and AI integrations on `https://ui5.sap.com/#/demoapps`.
* **Test Suite Breakdown:**

  * `brose.list.spec.ts`: Product catalog navigation and list filtering.
  * `calender.spec.ts`: Interactive Planning Calendar views (Day/Week/Month), team selector dropdowns, appointment modal creations, and legend toggles.
  * `shoping-cart.spec.ts`: Shopping demo app cart management and inventory check flows.
  * `SQL.spec.ts`: Interactive table grid views and SQL query execution views.
  * `testin-ai.spec.ts`: Dynamic AI integration components and interactive output view states.
  * `Tools.spec.ts`: Popup window listeners, external link navigation, and administrative grid interaction.
  * `uxc-integration.spec.ts`: Custom UI theme assertion (`sap_horizon_dark`) and integration verification.
* **Bug Reports Tracked:**

  * `Navbar cart counter fails to update and out of stock.md`: Dynamic cart badge failing to increment upon adding items and missing out-of-stock inventory validations.

### 🗓️ September 16, 2026 — Day 16: SelectorsHub XPath Practice (`/day-16-selectorshub`)

* **Core Focus:** Automating form validation workflows, boundary value testing on numerical spin buttons, element interaction, and handling asynchronous popup window triggers on `https://selectorshub.com/xpath-practice-page/`.
* **Test Suite Breakdown:**

  * `xpath-practice.spec.ts`: Validates input form entries (email, password, company, location), tests negative and large boundary value inputs for mobile spin buttons, executes form submissions, and intercepts external YouTube channel popup events (`page.waitForEvent('popup')`).

---

# 🌐 Module 2: API Testing & Browser DevTools Integration

Welcome to **Module 2 - API Testing & DevTools**. This section focuses on RESTful API validation, browser network traffic inspection, and programmatic execution logging across API challenge endpoints.

---

## 📌 Progress Dashboard

| Date                   | Day        | Target Site                                                   | Core Focus Areas                                                                                                          | Status      |
| :--------------------- | :--------- | :------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------ | :---------- |
| **September 17, 2026** | **Day 17** | EvilTester API Challenges (`apichallenges.eviltester.com`)    | Multi-Layered API Testing: Postman Collections, DevTools HAR Traces & Node.js Execution Simulation                        | ✅ Completed |
| **September 18, 2026** | **Day 18** | Restful Booker (`restful-booker.herokuapp.com`)               | End-to-End Restful Booker API Workflows, Environment State Binding, DevTools Tracing & Performance Profiling              | ✅ Completed |
| **September 19, 2026** | **Day 19** | Practice Software Testing (`api.practicesoftwaretesting.com`) | AI-Assisted Postman Automation, Bearer Token Auth, Cart/Invoice Workflows & DevTools Tracing                              | ✅ Completed |
| **September 20, 2026** | **Day 20** | GoREST API (`gorest.co.in`)                                   | API Bearer Token Negative Auth Testing, Newman/Postman CLI Execution & GitHub Actions CI/CD Integration                   | ✅ Completed |
| **September 21, 2026** | **Day 21** | ServeRest API (`serverest.dev`)                               | End-to-End E-Commerce Auth & User Management, Dynamic Password Mutation, Server Crash Edge-Cases & English Log Assertions | ✅ Completed |
| **September 22, 2026** | **Day 22** | JSONPlaceholder (`jsonplaceholder.typicode.com`)              | E2E REST Workflows, Comment Moderation (DELETE), Photo PATCHing, Identity PUT Replacement & Scale Edge Cases              | ✅ Completed |

---

## 📅 Daily Execution Log

### 🗓️ September 17, 2026 — Day 17: Multi-Layered API Testing & Audit Logging (`/day-17-apichallenges-practice`)

* **Core Focus:** Establishing a 3-layer QA verification process across Postman, Chrome DevTools, and automated Node.js simulation scripts while persisting session audit logs.
* **Multi-Tool Architecture Breakdown:**

  * **Postman Integration**: Configured session token retrieval (`POST /challenger`), stored dynamic `X-Challenger` header parameters inside environment variables (`day-17-apichallenges-env.postman_environment.json`), and verified `GET /todos` / `POST /todos` end-to-end endpoints.
  * **Browser DevTools HAR Trace**: Monitored HTTP request/response lifecycles during live web interactions and exported raw network activity as a HAR log (`apichallenges.com.har`) to `Logs/`.
  * **Node.js Simulation Script (`simulation.js`)**: Developed an asynchronous script using native `fetch` to programmatically execute session creation, query item lists, create new TODO entities, and automatically write execution audit logs to disk (`01_POST_Start_Challenger_Session.log`, `02_GET_Todos.log`, `03_POST_Create_Todo.log`).

### 🗓️ September 18, 2026 — Day 18: Restful Booker API Testing & Performance Analysis (`/day-18-restfulbooker`)

* **Core Focus:** Automating dynamic REST workflows across authentication, booking retrieval, full/partial updates, and deletions on `https://restful-booker.herokuapp.com/` while generating DevTools trace profiles.
* **Multi-Tool Architecture Breakdown:**

  * **Postman Integration**: Dynamic token extraction (`POST /auth`), environment binding (`baseUrl`, `token`, `bookingId`), Cookie header authentication (`Cookie: token={{token}}`), and complete CRUD request validations (`POST`, `GET`, `PUT`, `PATCH`, `DELETE`).
  * **DevTools Network & Performance Profiling**: Exported raw network request HAR traces (`restful-booker_network_trace.har`) and recorded performance profiles (`Profile-restful-booker.json`) capturing DOM shifts, network latency, and rendering benchmarks.

### 🗓️ September 19, 2026 — Day 19: Practice Software Testing API Workflows & DevTools (`/day-19-practice-software-testing`)

* **Core Focus:** Building an end-to-end e-commerce REST API workflow using Postman AI, handling dynamic Bearer tokens, state preservation across cart/order requests, and capturing network/performance trace artifacts on `https://api.practicesoftwaretesting.com`.
* **Multi-Tool Architecture Breakdown:**

  * **Postman AI Integration**: Prompt-engineered Postman AI Agent to create `day-19-practice-software-testing` collection and `Day 19 - Practice Software Testing Environment`. Managed dynamic variable extraction for `bearerToken` (`POST /users/login`), `productId` (`GET /products`), `cartId` (`POST /carts`), cart item insertion (`POST /carts/{{cartId}}`), and final checkout invoice creation (`POST /invoices`).
  * **DevTools Tracing & Performance**: Intercepted browser request/response cascades as `api.practicesoftwaretesting.com.har` and recorded CPU main-thread rendering performance profiles as `Trace-20260919T191850.json`.

### 🗓️ September 20, 2026 — Day 20: GoREST Authentication Negative Testing & CI/CD Pipeline (`/day-20-gorest`)

* **Core Focus:** Comprehensive negative authentication testing for Bearer Token APIs on `https://gorest.co.in`, collection run execution, and automated execution via GitHub Actions Postman CLI workflows.
* **Multi-Tool Architecture Breakdown:**

  * **Postman Collection & Environment**: Built test suites for invalid, missing, malformed, empty, and expired tokens across `GET`, `POST`, `PATCH`, and `DELETE` methods (`day-20-gorest.postman_collection.json`). Bound authentication state inside `Day 20 - GoRest Environment.postman_environment.json`.
  * **CI/CD Automation (GitHub Actions)**: Automated collection execution on `push` triggers using Postman CLI inside `.github/workflows/postman.yml` with secure secret variable injections (`POSTMAN_API_KEY`).
  * **Run Artifacts**: Exported local execution test summaries (`day-20-gorest.postman_test_run.json`) and terminal output screenshots.

### 🗓️ September 21, 2026 — Day 21: ServeRest End-to-End API Workflows & User Management (`/day-21-serverest`)

* **Core Focus:** Automated user administration lifecycle, Bearer token extraction, dynamic password mutation, edge-case server failure assertions, and full Portuguese-to-English translation mapping on `https://serverest.dev`.
* **Multi-Tool Architecture Breakdown:**

  * **Postman Collection (`day-21-serverest.postman_collection.json`)**: Built a complete 15-request API testing collection covering authentication (`POST /login`), catalog queries (`GET /usuarios`), user registration (`POST /usuarios`), negative validation (`400 Bad Request`), deliberate server crashes (`500 Internal Server Error`), upsert updates (`PUT /usuarios/{_id}`), and total data cleanup (`DELETE /usuarios/{_id}`).
  * **Environment Configuration (`Day 21 - ServeRest Environment.postman_environment.json`)**: Managed dynamic variables for `baseUrl`, `loginEmail`, `loginPassword`, `authToken`, `johnWickId`, and `johnWickEmail`.
  * **CI/CD Pipeline Integration**: Exported test run summaries (`day-21-serverest_test_run.json`) and execution screenshots under `Screenshots/`, triggering GitHub Actions workflow execution automatically via root `.github/workflows/postman.yml`.

### 🗓️ September 22, 2026 — Day 22: JSONPlaceholder Integration & Edge Testing (`/day-22-jsonplaceholder`)

* **Core Focus:** End-to-end integration and edge-case testing against JSONPlaceholder (`https://jsonplaceholder.typicode.com`). Executed full CRUD cycles, dynamic variable chaining, comment moderation, partial updates, full record replacement, and high-volume boundary stress testing.
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

  * *Initial Failure:* 6 tests failed across Requests 06 and 07 due to missing initial values for `photoId` and `userId` in the environment scope, causing URLs to send unparsed template strings (`%7B%7BphotoId%7D%7D`).
  * *Resolution:* Added default variable definitions to `day 22 JSONPlaceholder` environment context, driving test execution to a clean **28/28 passing state (100%)**.

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
│   │   └── README.md
│   └── README.md
├── day-14-cymbal-direct/
│   ├── Tests/
│   │   ├── select-product.spec.ts
│   │   ├── add-to-cart.spec.ts
│   │   ├── emty-cart.spec.ts
│   │   └── place-order.spec.ts
│   └── README.md
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
├── day-20-gorest/
│   ├── Collections/
│   │   └── day-20-gorest.postman_collection.json
│   ├── Environments/
│   │   └── Day 20 - GoRest Environment.postman_environment.json
│   ├── Screenshots/
│   │   └── day-20-gorest-run.png
│   ├── day-20-gorest.postman_test_run.json
│   └── README.md
├── day-21-serverest/
│   ├── Collections/
│   │   └── day-21-serverest.postman_collection.json
│   ├── Environment/
│   │   └── Day 21 - ServeRest Environment.postman_environment.json
│   ├── Screenshots/
│   │   └── Day21_Collection_Runner_Pass.png
│   ├── day-21-serverest_test_run.json
│   └── README.md
└── day-22-jsonplaceholder/
    ├── Collections/
    │   └── day-22-jsonplaceholder.postman_collection.json
    ├── Environment/
    │   └── day-22-jsonplaceholder.postman_environment.json
    ├── Screenshots/
    │   └── Day22_Collection_Runner_Pass.png
    └── README.md
```
