# # 90-day-qa-challenge

QA/QE 90-Days Portfolio | 7 Modules: UI Automation, API/DevTools, Buggy Sites, Security, E2E Workflows, Performance & Advanced Target Envs

---

# 🚀 Module 1: UI Automation Mastery with Playwright

Welcome to the central repository for Module 1 - UI Automation. This project tracks hands-on practice covering modern Web QA Automation patterns, end-to-end workflows, resilient locators, session management, dynamic element handling, and test execution using Playwright and TypeScript.

## 📌 Progress Dashboard

| Date | Day | Target Site | Core Focus Areas | Status |
| --- | --- | --- | --- | --- |
| September 1, 2026 | Day 01 | The Internet (herokuapp) | Basic Elements, Inputs, Checkboxes, Alerts | ✅ Completed |
| September 2, 2026 | Day 02 | DemoQA | Complex UI Widgets, Form Handling, Defect Reports | ✅ Completed |
| September 3, 2026 | Day 03 | SauceDemo (Swag Labs) | Auth, Storage State, Cart/Checkout, Sorting & Navigation | ✅ Completed |
| September 4, 2026 | Day 04 | Practice ExpandTesting | Dynamic Workflows, OTP, Autocomplete, Clock Mocks & Infinite Scroll | ✅ Completed |
| September 5, 2026 | Day 05 | UI Testing Playground | Edge Cases, Dynamic IDs, Hidden Layers, Load Delays | ✅ Completed |
| September 6, 2026 | Day 06 | QA Playground | Advanced UI Widgets, Portals, Multi-Tab Workflows & AI Tooling | ✅ Completed |
| September 7, 2026 | Day 07 | Tricentis Obstacle Course | Complex Logic, String Extraction, Dynamic Timers, Cookies | ✅ Completed |
| September 8, 2026 | Day 08 | TestMu AI Selenium Playground | AJAX Forms, Dual List Box, Modals, Progress Bars, Hovers, Window Popups & Todo App | ✅ Completed |
| September 9, 2026 | Day 09 | Testsmith Locator Game | Dynamic SPA State Synchronization, Overlay Interception & Locator Resilience | ✅ Completed |
| September 10, 2026 | Day 10 | Automation Camp (Play 2) | Pure UI Automation, Native Input Controls, Multi-Window Popups & Alert Handling | ✅ Completed |
| September 11, 2026 | Day 11 | CommitQuality | Dynamic Tables, Forms, Accordions, Popups, API Mocking, Contact Form & Dynamic Clock | ✅ Completed |
| September 12, 2026 | Day 12 | Restful-Booker-Platform | Date Pickers, Room Booking Forms, Contact Messaging, SPA Routing & Backend Concurrency | ✅ Completed |
| September 13, 2026 | Day 13 | OrangeHRM Open Source | Enterprise HR Suite, Dynamic Tables, Dropdowns, Re-Auth Popups & Single-File Test Specs | ✅ Completed |
| September 14, 2026 | Day 14 | Cymbal Direct (cymbal-shops) | Microservices E-Commerce Platform, Catalog Iteration, Cart Operations & E2E Checkout | ✅ Completed |
| September 15, 2026 | Day 15 | SAP UI5 Demo Apps (ui5.sap.com) | Enterprise Framework Controls, Dynamic Popups, Theme Switching, Data Tables & UX Integrations | ✅ Completed |
| September 16, 2026 | Day 16 | SelectorsHub (selectorshub.com/xpath-practice-page) | Form Inputs, Boundary Values, Submit Handlers & Async Popup Window Events | ✅ Completed |

🎉 **Module 1: UI Automation Mastery with Playwright — Complete!**

---

## 📅 Daily Execution Log

### 🗓️ September 1, 2026 — Day 01: Fundamentals (/day-01-the-internet)

**Core Focus:** Establishing resilient locator strategy (getByRole, getByText), basic user interactions, and page state assertions.

**Key Workflows:** Automated dynamic control handling, checkbox toggles, input field filling, and basic navigation checks.

---

### 🗓️ September 2, 2026 — Day 02: Complex UI & Bug Logging (/day-2-demoQa)

**Core Focus:** Handling complex UI components, dynamic waits, frames, modal dialogs, and documenting bugs.

**Key Workflows:** Form edge-case testing, element visibility validations, and writing structured bug reports under /Defects\_&\_Bugreports. Learned how to cut out dynamic ad network frames and layout-shifting elements using custom beforeEach fixtures (page.route() and page.evaluate()) for flake-free execution.

---

### 🗓️ September 3, 2026 — Day 03: E-Commerce Workflows (/day-03-sauce-demo)

**Core Focus:** Session state preservation (storageState), full E2E purchase flows, catalog sorting algorithms, and side drawer navigation.

#### Test Suite Breakdown

**auth.spec.ts:** Validates login, tests locked-out user handling, and exports session state to user.json.

**cart\_&\_checkout.spec.ts:** Complete purchase flow—adding items from catalog, reviewing cart, entering shipping details, and confirming order completion.

**filter-and-sort.spec.ts:** Validates catalog sorting dropdown options (Name A-Z, Name Z-A, Price Low-High, Price High-Low).

**menu-navigation.spec.ts:** Validates hamburger menu drawer actions, Reset App State triggers, and user logout redirection.

---

### 🗓️ September 4, 2026 — Day 04: Dynamic Web Applications (/day-04-practice-expandtesting)

**Core Focus:** Advanced dynamic element handling, execution visibility via console logs, time-travel clocks, dynamic DOM infinite scrolling, and form validation flows.

#### Test Suite Breakdown

**web-inputs.spec.ts:** Validates specialized input type entries (Number, Text, Password, Date).

**dynamic-table.spec.ts:** Dynamic data extraction and locator matching across table rows.

**login.spec.ts & register.spec.ts:** User authentication and registration form workflows.

**password-reset.spec.ts:** Forgot password submission and confirmation banner checks.

**otp.spec.ts:** One-time password submission and verification flows.

**my-browser.spec.ts:** User-agent and browser information detection assertions.

**form-validation.spec.ts:** Form field criteria, picker validations, and submission state checks.

**notification-message.spec.ts:** Dynamic flash banner alerts and pattern-matched text validation.

**autocomplete.spec.ts:** Search input interaction, dynamic dropdown selection, and result assertions.

**spies-stubs-clocks.spec.ts:** Time-travel test assertions utilizing page.clock manipulation.

**infinite-scroll.spec.ts:** Page scrolling and asynchronous DOM element appending checks.

**contact.spec.ts:** End-to-end contact form submission and success banner assertions.

---

### 🗓️ September 5, 2026 — Day 05: Sandbox Edge Cases & Delays (/day-05-uitestingplayground)

**Core Focus:** Navigating technical UI automation challenges—dynamic IDs, volatile CSS classes, Z-index layer stacks, long-running AJAX requests, and server load delays.

#### Test Suite Breakdown

**class-attribute.spec.ts:** Primary/secondary button matching using dynamic class strings.

**dynamic-id.spec.ts:** Locating elements without relying on dynamic runtime IDs.

**hidden-layer.spec.ts:** Managing Z-index overlays and verifying non-clickable dynamic states.

**load-delay.spec.ts:** Auto-waiting navigation handling under artificial server load.

**ajax-data.spec.ts:** Handling 15-second dynamic DOM insertions using explicit assertion timeouts.

#### Bug Reports Tracked

**BUG-001-load-delay-performance-threshold.md:** SLA performance violation on /loaddelay.

**BUG-002-inaccurate-geolocation-picker.md:** Inaccurate coordinate resolution and picker failure.

---

### 🗓️ September 6, 2026 — Day 06: QA Playground & Dev Environment Integrations (/day-06-qa-playground)

**Core Focus:** Automating complex UI widgets, managing multi-window contexts, resolving pointer event interception bugs, integrating VS Code Live Server, and using GitHub Copilot for code acceleration.

#### Test Suite Breakdown

**date-picker.spec.ts:** Date picker widget interactions and input validations.

**links.spec.ts:** Navigation triggers, status code checks, and target URL routing.

**tabs-windows.spec.ts:** Intercepting and switching between new browser tab contexts using context.waitForEvent('page').

**multi-select.spec.ts:** Selecting multiple option items and validating container tags.

**modals.spec.ts:** Managing overlay dialog visibility, focus traps, and dismissal actions.

**banking-app.spec.ts:** Multi-step banking workflow, form options, and loan calculations.

#### Bug Reports Tracked

**BUG-003-date-picker-element-timeout.md:** Element timeout on invalid container input target fill.

**BUG-004-banking-app-multitab-server-crash.md:** Portal overlay pointer interception and multi-tab state failure.

---

### 🗓️ September 7, 2026 — Day 07: Advanced Tricentis Obstacles (/day-07-tricentis-Obstacale)

**Core Focus:** Solving complex algorithmic web obstacles including dynamic string extraction, regex processing, asynchronous calculating state timers, and cookie manipulation.

#### Test Suite Breakdown

**obstacle-45618-tough-cookie.spec.ts:** Regex-based number extraction from random string payloads and input field populating.

**obstacle-33678-wait-a-moment.spec.ts:** Managing asynchronous dynamic wait states, button state transitions, and state triggers.

**obstacle-73590-comprehensive.spec.ts:** Multi-step form flows, structural page assertions, and state verification.

---

### 🗓️ September 8, 2026 — Day 08: TestMu AI Selenium Playground (/day-08-testmuai-selenium-playground)

**Core Focus:** Automating dynamic AJAX form submissions, multi-select dual list boxes, multi-layered Bootstrap modals, asynchronous progress bar state tracking, hover overlays, multi-window popups, and dynamic To-Do app state management.

#### Test Suite Breakdown

**ajax-form-submit.spec.ts:** Form input, submit action, and dynamic response verification.

**bootstrap-dual-list-box.spec.ts:** Item movement (single/all), cross-box transfer, and real-time list filtering.

**bootstrap-modal.spec.ts:** Single modal launch/save and multi-layered nested modal interactions.

**bootstrap-download-progress.spec.ts:** Start trigger, percentage tracking, and 100% completion state assertions.

**hover-demo.spec.ts:** Dynamic element hover state triggers and overlay visibility checks.

**window-popup-modal.spec.ts:** Single popup intercept, multi-window generation, and URL path assertions.

**todo-app.spec.ts:** Item creation, checkbox toggle state management, and dynamic element verification.

**auto-healing.spec.ts:** Resilient selector behavior during dynamic DOM ID mutation.

---

### 🗓️ September 9, 2026 — Day 09: Testsmith Locator Game (/day-09-locator-game)

**Core Focus:** Automating sequential SPA level progression, handling dynamic tour overlays (tour-step-backdrop), resolving React state input desynchronization, and analyzing framework compatibility boundaries.

#### Test Suite Breakdown

**level-1.spec.ts:** Tag selector execution (h3) and page heading validation.

**level-2.spec.ts:** ID selector extraction (#description) and transition handling.

**level-3.spec.ts:** Class selector matching (li.active) and level increment verification.

**level-4.spec.ts:** Direct container hierarchy locator (#toolbar button) and DOM state assertion.

---

### 🗓️ September 10, 2026 — Day 10: Pure Automation Sandbox (/day-10-automation-camp)

**Core Focus:** Automating native browser form controls, custom color/range pickers, popup window contexts, and alert dialog triggers inside a clean single-file execution suite.

#### Test Suite Breakdown

**play2-automation.spec.ts:** Single-file test suite validating native inputs, radio toggles, multi-select dropdowns, popup interception (waitForEvent('popup')), and alert handling (page.once('dialog')).

---

### 🗓️ September 11, 2026 — Day 11: CommitQuality Sandbox (/day-11-commitquality)

**Core Focus:** Automating end-to-end user workflows, interactive UI components, network API mocking, bug reporting, and dynamic timer assertions on CommitQuality.

#### Test Suite Breakdown

**filter-product.spec.ts:** Validates product table search queries, exact name matching, non-existent item queries, and search resets.

**add-product.spec.ts:** Validates new product creation flows, unique item additions, and mandatory field validation errors.

**components.spec.ts:** Automates standard navigation, click types (single/double/right), radio buttons, checkboxes, and select dropdowns.

**accordion.spec.ts:** Tests expand/collapse states and conditional text element visibility.

**popups.spec.ts:** Intercepts native browser alert dialogs (page.once('dialog')) and verifies modal overlay triggers.

**api-mocking.spec.ts:** Validates real network responses and mocks API payloads using Playwright's page.route() handler.

**contact-us.spec.ts:** Validates contact form submission workflows and edge cases.

**clock.spec.ts:** Verifies dynamic clock timer assertions over time delays.

#### Bug Reports Tracked

**BUG-CQ-011:** Contact Form payload mismatch & backend API silent drop (Tested across macOS, Windows, Linux, Android).

---

### 🗓️ September 12, 2026 — Day 12: Restful-Booker-Platform (/day-12-restful-booker-platform)

**Core Focus:** Automating hotel reservation workflows, date pickers, contact query submissions, SPA routing issues, and backend concurrency performance logging.

#### Test Suite Breakdown

**check-availability.spec.ts:** Validates date input fields, manual check-in/check-out pickers, and availability search triggers.

**booking.spec.ts:** Automates room selection, guest personal details entry, date selection drag, and booking confirmation modal verification.

**contact-message.spec.ts:** Validates customer inquiry form submissions and required input field validation error states.

#### Bug Reports Tracked

**BUG-RBP-001:** Navigation route updates URL but target page content fails to load (/amenities).

**BUG-RBP-002:** Multi-account login concurrency causes backend failure, elevated latency, and application crashes under session load.

---

### 🗓️ September 13, 2026 — Day 13: OrangeHRM Automated Test Suite (/day-13-orangehrm)

**Core Focus:** Automating enterprise HR management workflows, dynamic grid searches, sub-tab dropdown navigation, re-authentication security modals, and structured single-file test specs.

#### Test Suite Breakdown

- `login.spec.ts`
- `dashboard.spec.ts`
- `admin.spec.ts`
- `pim.spec.ts`
- `leave.spec.ts`
- `apply-leave.spec.ts`
- `leave-requirements.spec.ts`
- `recruitment.spec.ts`
- `performance.spec.ts`
- `directory.spec.ts`
- `maintenance.spec.ts`
- `claim.spec.ts`

---

### 🗓️ September 14, 2026 — Day 14: Cymbal Direct E-Commerce Automation (/day-14-cymbal-direct)

**Core Focus:** Automating end-to-end user journeys for the Cymbal Direct microservices platform, product catalog iterations, dynamic cart drawer management, and order completions.

#### Test Suite Breakdown

- `select-product.spec.ts`
- `add-to-cart.spec.ts`
- `emty-cart.spec.ts`
- `place-order.spec.ts`

---

### 🗓️ September 15, 2026 — Day 15: SAP UI5 Demo Applications (/day-15-ui5.sap.demoapps)

**Core Focus:** Automating enterprise UI controls, dynamic tab view switches, custom calendar team planning widgets, popup promises, custom themes (sap_horizon_dark), database view grids, and AI integrations.

#### Test Suite Breakdown

- `brose.list.spec.ts`
- `calender.spec.ts`
- `shoping-cart.spec.ts`
- `SQL.spec.ts`
- `testin-ai.spec.ts`
- `Tools.spec.ts`
- `uxc-integration.spec.ts`

#### Bug Reports Tracked

**Navbar cart counter fails to update and out of stock.md:** Dynamic cart badge failing to increment upon adding items and missing out-of-stock inventory validations.

---

### 🗓️ September 16, 2026 — Day 16: SelectorsHub XPath Practice (/day-16-selectorshub)

**Core Focus:** Automating form validation workflows, boundary value testing on numerical spin buttons, element interaction, and handling asynchronous popup window triggers.

#### Test Suite Breakdown

**xpath-practice.spec.ts:** Validates input form entries (email, password, company, location), tests negative and large boundary value inputs for mobile spin buttons, executes form submissions, and intercepts external YouTube channel popup events (page.waitForEvent('popup')).

---

# 🌐 Module 2: API Testing & Browser DevTools Integration

Welcome to Module 2 - API Testing & DevTools. This section focuses on RESTful API validation, browser network traffic inspection, and programmatic execution logging across API challenge endpoints.

## 📌 Progress Dashboard

| Date | Day | Target Site | Core Focus Areas | Status |
| --- | --- | --- | --- | --- |
| September 17, 2026 | Day 17 | EvilTester API Challenges (apichallenges.eviltester.com) | Multi-Layered API Testing: Postman Collections, DevTools HAR Traces & Node.js Execution Simulation | ✅ Completed |
| September 18, 2026 | Day 18 | Restful Booker (restful-booker.herokuapp.com) | End-to-End Restful Booker API Workflows, Environment State Binding, DevTools Tracing & Performance Profiling | ✅ Completed |
| September 19, 2026 | Day 19 | Practice Software Testing (api.practicesoftwaretesting.com) | AI-Assisted Postman Automation, Bearer Token Auth, Cart/Invoice Workflows & DevTools Tracing | ✅ Completed |
| September 20, 2026 | Day 20 | GoREST API (gorest.co.in) | API Bearer Token Negative Auth Testing, Newman/Postman CLI Execution & GitHub Actions CI/CD Integration | ✅ Completed |
| September 21, 2026 | Day 21 | ServeRest API (serverest.dev) | End-to-End E-Commerce Auth & User Management, Dynamic Password Mutation, Server Crash Edge-Cases & English Log Assertions | ✅ Completed |
| September 22, 2026 | Day 22 | JSONPlaceholder (jsonplaceholder.typicode.com) | E2E REST Workflows, Comment Moderation (DELETE), Photo PATCHing, Identity PUT Replacement & Scale Edge Cases | ✅ Completed |
| September 23, 2026 | Day 23 | ReqRes API (reqres.in) | Functional API Testing, Postman/Newman CI Integration, Collection-Level Authentication, Dynamic Variables & Request Chaining | ✅ Completed |
| September 24, 2026 | Day 24 | HTTPBin API (httpbin.org) | HTTP Methods, Status Codes, Headers, Query Parameters, Cookies, Redirects, Delays, Streaming, Bytes, UUIDs & Response Inspection | ✅ Completed |
| September 25, 2026 | Day 25 | DummyJSON | GET Requests, HTTP Status Validation, JSON Response Validation & Basic Response-Structure Checks | ✅ Completed |
| September 26, 2026 | Day 26 | Rick and Morty GraphQL API | GraphQL Queries, Nested Relationships, Multiple Records, Pagination & Automated Response Assertions | ✅ Completed |
| September 27, 2026 | Day 27 | SWAPI DevTools (swapi.dev) | Browser Console Logs, Network Traffic, HAR Analysis, XHR Breakpoints, Storage & Performance Evidence | ✅ Completed |
| September 29, 2026 | Day 29 | ParaBank Administration (admin.htm) | DOM Inspection, Network Investigation, HAR Evidence & Web Performance Analysis | ✅ Completed |
| September 30, 2026 | Day 30 | Random User (randomuser.me) | Console Fetch Scripts, Network Local Overrides & Module 2 Wrap-Up | ✅ Completed |

**API Testing Status: ✅ Complete through Day 26**

**Module 2 Status: ✅ Complete — DevTools work finished on Day 30.**

🎉 **Module 2: API Testing & Browser DevTools Integration — Complete!**

---

## 📅 Daily Execution Log

### 🗓️ September 17, 2026 — Day 17: Multi-Layered API Testing & Audit Logging (/day-17-apichallenges-practice)

**Core Focus:** Establishing a 3-layer QA verification process across Postman, Chrome DevTools, and automated Node.js simulation scripts while persisting session audit logs.

#### Multi-Tool Architecture Breakdown

**Postman Integration:** Configured session token retrieval (POST /challenger), stored dynamic X-Challenger header parameters inside environment variables (day-17-apichallenges-env.postman_environment.json), and verified GET /todos / POST /todos end-to-end endpoints.

**Browser DevTools HAR Trace:** Monitored HTTP request/response lifecycles during live web interactions and exported raw network activity as a HAR log (apichallenges.com.har) to Logs/.

**Node.js Simulation Script (simulation.js):** Developed an asynchronous script using native fetch to programmatically execute session creation, query item lists, create new TODO entities, and automatically write execution audit logs to disk.

---

### 🗓️ September 18, 2026 — Day 18: Restful Booker API Testing & Performance Analysis (/day-18-restfulbooker)

**Core Focus:** Automating dynamic REST workflows across authentication, booking retrieval, full/partial updates, and deletions while generating DevTools trace profiles.

#### Multi-Tool Architecture Breakdown

**Postman Integration:** Dynamic token extraction (POST /auth), environment binding (baseUrl, token, bookingId), Cookie header authentication (Cookie: token={{token}}), and complete CRUD request validations (POST, GET, PUT, PATCH, DELETE).

**DevTools Network & Performance Profiling:** Exported raw network request HAR traces (restful-booker_network_trace.har) and recorded performance profiles (Profile-restful-booker.json) capturing DOM shifts, network latency, and rendering benchmarks.

---

### 🗓️ September 19, 2026 — Day 19: Practice Software Testing API Workflows & DevTools (/day-19-practice-software-testing)

**Core Focus:** Building an end-to-end e-commerce REST API workflow using Postman AI, handling dynamic Bearer tokens, state preservation across cart/order requests, and capturing network/performance trace artifacts.

#### Multi-Tool Architecture Breakdown

**Postman AI Integration:** Prompt-engineered Postman AI Agent to create day-19-practice-software-testing collection and Day 19 - Practice Software Testing Environment. Managed dynamic variable extraction for bearerToken, productId, cartId, cart item insertion, and final checkout invoice creation.

**DevTools Tracing & Performance:** Intercepted browser request/response cascades as api.practicesoftwaretesting.com.har and recorded CPU main-thread rendering performance profiles as Trace-20260919T191850.json.

---

### 🗓️ September 20, 2026 — Day 20: GoREST Authentication Negative Testing & CI/CD Pipeline (/day-20-gorest)

**Core Focus:** Comprehensive negative authentication testing for Bearer Token APIs, collection run execution, and automated execution via GitHub Actions Postman CLI workflows.

#### Postman Collection & Environment

Built test suites for invalid, missing, malformed, empty, and expired tokens across GET, POST, PATCH, and DELETE methods.

Bound authentication state inside Day 20 - GoRest Environment.postman_environment.json.

#### CI/CD Automation (GitHub Actions)

Automated collection execution on push triggers using Postman CLI inside .github/workflows/postman.yml with secure secret variable injections (POSTMAN_API_KEY).

#### Run Artifacts

Exported local execution test summaries and terminal output screenshots.

---

### 🗓️ September 21, 2026 — Day 21: ServeRest End-to-End API Workflows & User Management (/day-21-serverest)

**Core Focus:** Automated user administration lifecycle, Bearer token extraction, dynamic password mutation, edge-case server failure assertions, and full Portuguese-to-English translation mapping.

#### Postman Collection (day-21-serverest.postman_collection.json)

Built a complete 15-request API testing collection covering authentication (POST /login), catalog queries (GET /usuarios), user registration (POST /usuarios), negative validation (400 Bad Request), deliberate server crashes (500 Internal Server Error), upsert updates (PUT /usuarios/{\_id}), and total data cleanup (DELETE /usuarios/{\_id}).

#### Environment Configuration (Day 21 - ServeRest Environment.postman_environment.json)

Managed dynamic variables for baseUrl, loginEmail, loginPassword, authToken, johnWickId, and johnWickEmail.

#### CI/CD Pipeline Integration

Exported test run summaries and execution screenshots under Screenshots/, triggering GitHub Actions workflow execution automatically via root .github/workflows/postman.yml.

---

### 🗓️ September 22, 2026 — Day 22: JSONPlaceholder Integration & Edge Testing (/day-22-jsonplaceholder)

**Core Focus:** End-to-end integration and edge-case testing against JSONPlaceholder. Executed full CRUD cycles, dynamic variable chaining, comment moderation, partial updates, full record replacement, and high-volume boundary stress testing.

#### Test Suite Breakdown & Assertion Results (28/28 Passed)

**01_GET_Posts_Catalog:** Asserts 200 OK and verifies the post catalog contains 100 items.

**02_POST_Create_New_Post:** Asserts 201 Created, creates a new post, and dynamically captures postId (ID 101).

**03_POST_Volume_Stress_Simulation:** Asserts 201 Created for volume item creation scaling bounds (#501).

**04_GET_Post_Comments_Moderation:** Fetches post comments, asserts 200 OK, and extracts target commentId.

**05_DELETE_Inappropriate_Comment:** Asserts 200 OK on deleting flagged comment resource.

**06_PATCH_Update_Photo_Title:** Asserts 200 OK and validates partial title update on target photo.

**07_PUT_Replace_User_Identity:** Asserts 200 OK and verifies total user record payload replacement.

**08_GET_Baseline_Users_Check:** Asserts 200 OK and confirms default 10-user record array.

**09_GET_Over_1k_Users_Scale_EdgeCase:** Tests out-of-bounds query (/users/1001), asserting 404 Not Found without server crash (500).

#### Root Cause Analysis (RCA) & Troubleshooting

**Initial Failure:** 6 tests failed across Requests 06 and 07 due to missing initial values for photoId and userId in the environment scope, causing URLs to send unparsed template strings (%7B%7BphotoId%7D%7D).

**Resolution:** Added default variable definitions to day 22 JSONPlaceholder environment context, driving test execution to a clean 28/28 passing state (100%).

---

### 🗓️ September 23, 2026 — Day 23: ReqRes API Functional Testing with Postman (/day-23-reqres)

#### 📌 Overview

This module covers automated functional API testing against the ReqRes API using Postman and Newman CI integration. It includes end-to-end test assertions, collection-level authentication headers, dynamic variable extraction, and request chaining.

#### 🔑 Environment Setup (day 23 reqres)

| Variable Key | Scope / Type | Description |
| --- | --- | --- |
| baseUrl | String | Target API host address ([https://reqres.in](https://reqres.in)) |
| api_key | Secret / Header | Authorization key passed via collection header |
| userId | Number | Target user ID for endpoint checks |
| createdUserId | Dynamic Variable | Extracted post POST /api/users execution |
| page | Number | Pagination query variable |

#### 🚀 Detailed Request & Test Assertions Breakdown

**Global Collection Setup**

**Header:** x-api-key: {{api_key}} applied automatically across all endpoints.

**1. Users Folder**

**1.1 GET /api/users?page={{page}} — List Users**

**Goal:** Verify user pagination data.

**Test Assertions:**

- Status code is 200 OK.
- Response time is less than 1000ms.
- page in response body equals 2.
- data array contains items and verifies data[0].id exists.

**1.2 GET /api/users/{{userId}} — Single User**

**Goal:** Verify retrieval of a specific user.

**Test Assertions:**

- Status code is 200 OK.
- Response contains data.id matching variable userId.
- Response contains data.email, data.first_name, and data.last_name.

**1.3 POST /api/users — Create User**

**Goal:** Create a new user resource and extract its ID dynamically.

**Payload:**

```json
{
  "name": "morpheus",
  "job": "leader"
}
```

**Dynamic Variable:** The created user's ID is extracted from the response and stored as createdUserId for subsequent request chaining.

---

### 🗓️ September 24, 2026 — Day 24: HTTPBin API Testing with Postman (/day-24-httpbin)

API functional testing with Postman using HTTPBin, covering HTTP status codes, methods, request/response inspection, query params, custom headers, JSON/form-data, cookies, redirects, delays, streaming, bytes, UUIDs, response headers, image/content-type, user-agent/IP, and environment variables.

#### 🎯 Objectives

- Validate different HTTP status codes.
- Test common HTTP methods.
- Validate cookies and redirects.
- Test query parameters and custom headers.
- Validate form-data requests.
- Test delayed and streaming responses.
- Validate UUID, range, link, image, IP, and user-agent endpoints.
- Inspect response headers and response characteristics.
- Use Postman environment variables for dynamic test data.

#### 🔧 Environment

**API:** HTTPBin

**Base URL:** [https://httpbin.org](https://httpbin.org)

**Tool:** Postman

**Collection:** day-24-httpbin

**Schema:** Postman Collection v2.1

**Base variable:** {{baseUrl}}

**Environment: day 24 httpbin**

| Variable | Value |
| --- | --- |
| baseUrl | [https://httpbin.org](https://httpbin.org) |
| statusCode | 200 |
| etag | abc123 |
| delay | 1 |
| redirectTarget | [https://httpbin.org/get](https://httpbin.org/get) |
| numRedirects | 3 |
| cookieName | testCookie |
| cookieValue | hello123 |
| byteCount | 100 |
| chunkSize | 10 |
| chunkDelay | 0.5 |
| streamCount | 5 |
| encodedValue | SFRUUEJJTiBpcyBhd2Vzb21l |
| contentType | application/json |
| userAgent | PostmanRuntime/7.0 |
| lastUUID | empty initially |

#### 📋 Collection Coverage

**1. Status Codes**

GET/POST/PUT /status/{{statusCode}}

Tests expected status and response time <3000ms.

**2. Cookies**

Set/get/delete/multiple cookies, with accepted 200/302 responses.

**3. Redirects**

Absolute/relative/redirect-to GET and 307 scenario, redirect n times, no follow, HTTPS, and history.

**4. Anything**

GET/POST/PUT/PATCH/DELETE/HEAD/OPTIONS using the corresponding /anything endpoints, request bodies, and assertions.

**5. Query Params**

/anything?foo=bar&baz=qux

**6. Custom Headers**

X-Custom-Header: PostmanTest

X-Day: 24

**7. Form Data**

URL encoded:

name=Postman

day=24

**8. Delay**

/delay/{{delay}}

Parses delay using parseInt and validates response-time behavior.

**9. Drip**

/drip?numbytes={{byteCount}}&duration={{delay}}&delay={{chunkDelay}}&code=200

**10. Streaming**

/stream/{{streamCount}}

/stream-bytes/{{byteCount}}

**11. UUID**

/uuid

Uses regex validation and stores the UUID using:

```javascript
pm.environment.set("lastUUID", pm.response.json().uuid)
```

**12. Range**

/range/{{byteCount}}

Checks Accept-Ranges or Content-Range.

**13. Links**

/links/5/0

Checks for `<a href`.

**14. Images**

/image/png

/image/svg

/image/webp

Validates expected content types.

**15. IP and User Agent**

/ip

/user-agent

**16. Response Inspection**

Validates cache control and Last-Modified response headers.

#### 🧪 Assertion Strategy

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

#### 🔄 Dynamic Variable Handling

Dynamic response values are captured from responses and stored in Postman environment variables for subsequent requests.

Example:

```javascript
pm.environment.set("lastUUID", pm.response.json().uuid);
```

#### 📊 Main Test Coverage

| Area | Coverage |
| --- | --- |
| Status Codes | GET, POST, PUT |
| Cookies | Set, Get, Delete, Multiple |
| Redirects | Absolute, Relative, Redirect-To, 307, N Redirects, No Follow, HTTPS, History |
| HTTP Methods | GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS |
| Query Parameters | Query parameter validation |
| Headers | Custom header validation |
| Form Data | URL encoded form validation |
| Delay | Delayed responses |
| Drip | Streaming byte delivery |
| Streaming | Stream and stream-bytes |
| UUID | UUID generation and regex validation |
| Range | Byte range headers |
| Links | Link generation |
| Images | PNG, SVG, WebP |
| IP/User Agent | Request environment inspection |
| Response Inspection | Cache-Control, Last-Modified |

#### 📚 Key QA Concepts

- HTTP status-code validation
- Request and response inspection
- Environment-driven test data
- Dynamic variable chaining
- Response header and payload validation

#### 📁 Suggested Project Structure

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

#### 🎯 Day 24 Outcome

HTTPBin was used to practice broad HTTP-level API testing through Postman, including status codes, HTTP methods, cookies, redirects, headers, delays, streaming, bytes, UUIDs, response headers, content types, and request environment inspection.

**Collection:** day-24-httpbin

**Base URL:** [https://httpbin.org](https://httpbin.org)

**Environment:** day 24 httpbin

---

### 🗓️ September 25, 2026 — Day 25: DummyJSON API Testing with Postman (/day-25-dummyjson)

API testing practice using Postman and the DummyJSON API, focusing on GET requests, HTTP status validation, JSON response validation, and basic response-structure checks.

#### 🎯 Objective

The objective of Day 25 was to practice basic API testing with Postman by validating multiple GET requests against the DummyJSON API.

The tests focused on:

- Verifying successful HTTP responses
- Confirming that responses are returned as JSON
- Validating the presence of expected response arrays
- Confirming that returned arrays contain at least one record
- Running multiple API requests together as a collection

#### 🔖 Day 25 Summary

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

#### 🔧 API Under Test

**API:** DummyJSON

**Base URL:** [https://dummyjson.com](https://dummyjson.com)

**Environment:** Postman day 25 dummyjson

#### 📋 Requests

**1. Get Products**

**Method:** GET

**Validation:**

- Status 200
- Response is JSON
- products is an array
- Array contains at least one record

**2. Get Carts**

**Method:** GET

**Validation:**

- Status 200
- Response is JSON
- carts is an array
- Array contains at least one record

**3. Get Comments**

**Method:** GET

**Validation:**

- Status 200
- Response is JSON
- comments is an array
- Array contains at least one record

#### 🧪 Test Strategy

| Validation Area | Products | Carts | Comments |
| --- | --- | --- | --- |
| HTTP 200 | ✅ | ✅ | ✅ |
| JSON Format | ✅ | ✅ | ✅ |
| Expected Top-Level Array | products | carts | comments |
| Data Presence | At least one record | At least one record | At least one record |

#### 📊 Test Execution Results

**Run Date:** 25 Sep 2026

**Run Time:** 10:50 UTC

**Run Status:** ALL PASSED

| Metric | Result |
| --- | --- |
| Requests | 3 |
| Tests Passed | 12 |
| Tests Failed | 0 |
| Total Time | 1363 ms |
| Test Pass Rate | 100% |
| Run ID | 6a1c5cae-604d-4dd3-999b-75a830672763 |

#### 📋 Request Results

| Request | Method | Status | Response Time | Tests |
| --- | --- | --- | --- | --- |
| Get Products | GET | 200 OK | ~450 ms | 4/4 passed |
| Get Carts | GET | 200 OK | ~460 ms | 4/4 passed |
| Get Comments | GET | 200 OK | ~453 ms | 4/4 passed |

#### 🔍 Detailed Results

**Get Products** — 4/4 tests passed

- HTTP status validation passed.
- JSON response validation passed.
- products array validation passed.
- Data presence validation passed.

**Get Carts** — 4/4 tests passed

- HTTP status validation passed.
- JSON response validation passed.
- carts array validation passed.
- Data presence validation passed.

**Get Comments** — 4/4 tests passed

- HTTP status validation passed.
- JSON response validation passed.
- comments array validation passed.
- Data presence validation passed.

#### 📚 QA Learning Outcomes

- HTTP status validation
- Response format validation
- Response schema/structure validation
- Basic data validation
- Collection-level execution

#### 📸 Run Evidence

**Day-25-DummyJSON-API-Testing-Run-Report.html**

The run evidence records:

- Collection execution status
- Individual request results
- Individual tests
- Response times
- Overall pass/fail status
- Run ID
- Environment information

#### 🎯 Outcome

Day 25 completed with 3 API requests and 12 total tests, with all tests passing.

**Pass Rate:** 100%

---

### 🗓️ September 26, 2026 — Day 26: Rick and Morty GraphQL API Testing (/day-26)

#### 🎯 Objective

Day 26 focused on GraphQL API testing using Postman against the Rick and Morty GraphQL API.

The goal was to move beyond basic REST GET validation and test GraphQL-specific response structures, nested relationships, multiple-record queries, and pagination while using environment-driven test data and automated JavaScript assertions.

This completes the API Testing portion of Module 2.

#### 🚀 Collection Overview

The collection contains 10 POST requests structured into two core folders:

**📁 Characters**

**GET SINGLE CHARACTER:** Validates scalar fields (id, name, status, species, type, gender) and single nested objects (origin, location).

**CHARACTER WITH EPISODES:** Tests nested array relationships (character → episode).

**MULTIPLE CHARACTERS:** Validates array queries using charactersByIds(ids: [...]).

**LIST CHARACTERS:** Tests paginated character queries along with metadata (info & results).

**CHARACTERS PAGE 2:** Validates page parameter arguments directly within GraphQL queries (page: 2).

**📁 Episodes**

**GET SINGLE EPISODE:** Validates single episode fetching and scalar assertions.

**EPISODE WITH CHARACTERS:** Tests reverse nested array relationships (episode → characters).

**MULTIPLE EPISODES:** Tests multi-record fetching using episodesByIds(ids: [...])

**LIST EPISODES:** Tests listing episodes with pagination details (count, pages, next, prev).

**EPISODES PAGE 2:** Verifies pagination transitions on page 2.

#### 📊 Automated Assertions & Quality Checks

Every request includes JavaScript tests checking:

**HTTP Status Code:** 200 OK

**Response Data Payload:** Presence of the data property

**Field Completeness:** Ensures requested fields are present and unrequested fields are omitted

**Data Types:** Validates arrays, objects, and string matches against environment variables

**Pagination Contracts:** Verifies page state changes, e.g. prev != null on page 2

#### 🛠️ Environment Configuration

The environment file:

**day 26 rick and morty graphql.postman_environment.json**

is pre-configured with the following variables stored in the Initial Value column:

| Variable | Value | Description |
| --- | --- | --- |
| baseUrl | [https://rickandmortyapi.com/graphql](https://rickandmortyapi.com/graphql) | Public GraphQL Endpoint |
| characterId1 | 1 | Primary character ID (Rick Sanchez) |
| characterId2 | 2 | Secondary character ID |
| characterId3 | 3 | Tertiary character ID |
| episodeId1 | 1 | Primary episode ID |
| episodeId2 | 2 | Secondary episode ID |
| episodeId3 | 3 | Tertiary episode ID |
| page | 1 | Pagination page number |

#### 📁 Project Structure

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

#### 🎯 Day 26 Outcome

Day 26 completes the API Testing track of the 90-day QA challenge.

The API portion progressed from REST API fundamentals through authentication, CRUD operations, negative testing, environment variables, request chaining, Newman/CI execution, HTTP-level testing, response validation, and finally GraphQL testing.

**API Testing Status: ✅ COMPLETE**

**Final API Testing Day: Day 26**

**API Type Covered:** REST + GraphQL

**Primary Tool:** Postman

**GraphQL API:** Rick and Morty API

**Day 26 Requests:** 10 POST requests

**Day 26 Focus:** GraphQL queries, nested relationships, multiple records, pagination, environment variables, and automated assertions.

---

### 🗓️ September 27, 2026 — Day 27: SWAPI DevTools (/day-27-swapi-devtools)

#### Browser Console Log & HTTP Archive Analysis

This day focuses on using browser DevTools to inspect JavaScript execution, console messages, API requests, network traffic, and HTTP Archive (HAR) data while working with the Star Wars API (SWAPI).

#### 1. Browser Console Log (swapi.dev-1790504306524.log)

This file records interactive session logs, JavaScript execution, API requests, and browser console warnings.

**Extension & Content Script Warnings**

Repeated messages: contentScript.js:201 This page is not reloaded.

**Network Blocking Errors (net::ERR_BLOCKED_BY_CLIENT)**

Failed GET requests to Twitter syndication endpoints: [https://syndication.twitter.com/i/jot/embeds](https://syndication.twitter.com/i/jot/embeds)...

These requests were blocked by ad blockers or privacy extensions blocking embedded Twitter widgets.

**Failed API Call (404 Not Found)**

An interactive call made via jquery-2.1.0.min.js:

GET [https://swapi.dev/api/vader](https://swapi.dev/api/vader)

Result: 404 Not Found.

**Asynchronous Message Channel Errors**

Multiple uncaught errors were recorded:

Error: A listener indicated an asynchronous response by returning true, but the message channel closed before a response was received

These occurred from embedded frames and scripts such as:

- github-btn.html
- platform.twitter.com
- Other embedded scripts

**JavaScript Fetch Requests & Executed Results**

**1. Luke Skywalker Query**

```javascript
fetch('https://swapi.dev/api/people/1/')
  .then(res => res.json())
  .then(data => console.log(data));
```

Result: The response returned Luke Skywalker's data, including:

- name: 'Luke Skywalker'
- height: '172'
- mass: '77'
- hair_color: 'blond'
- skin_color: 'fair'

**2. Tatooine Planet Query (getPlanet(1))**

An async function was executed and the result was logged using console.table().

Output Data:

- name: 'Tatooine'
- rotation_period: '23'
- orbital_period: '304'
- diameter: '10465'
- climate: 'arid'
- gravity: '1 standard'
- terrain: 'desert'
- population: '200000'

The response also contained links to associated:

- residents such as people/1/, people/2/, etc.
- films such as films/1/, films/3/, etc.

**CLI Command Copy-Paste Attempts**

curl commands were attempted directly inside the browser JavaScript console.

This produced:

Uncaught SyntaxError: Unexpected identifier 'url'

The error occurred because curl is a shell/CLI command and its Bash syntax is not valid JavaScript syntax in the browser console.

#### 2. HTTP Archive Log (chromewebdata.har)

This .har file records network traffic, page navigation, static assets, and header/response details.

**Page Navigation Timeline (pages)**

Multiple page views were recorded while navigating between:

- [https://swapi.dev/](https://swapi.dev/)
- [https://swapi.dev/about](https://swapi.dev/about)
- [https://swapi.dev/documentation](https://swapi.dev/documentation)

Outbound links were also accessed to third-party GitHub repositories such as:

- SharpTrooper
- xyz-angular-swapi
- swapi-elixir
- StarWarsAPI

**Network Entries & Responses (entries)**

**Main Page Request**

GET [https://swapi.dev/](https://swapi.dev/)

Response: 304 Not Modified

The response was cached through Amazon CloudFront / S3.

**HTML Content Structure**

The captured HTML included the full SWAPI landing-page structure, including:

- SWAPI title and description: "The Star Wars API"
- Interactive API runner: [https://swapi.dev/api/](https://swapi.dev/api/)
- Example endpoints:
  - people/1/
  - planets/3/
  - starships/9/
- Pre-populated JSON example for Luke Skywalker (people/1/)
- FAQ sections:
  - "What is this?"
  - "How can I use it?"
- Details regarding the transition from the legacy swapi.co domain

**Static Resources Loaded**

The HAR also captured static resources including:

- Bootstrap CSS:
  - bootstrap.min.css
  - bootstrap.css
- Custom stylesheet:
  - custom.css
- JavaScript dependencies:
  - jquery-2.1.0.min.js
  - bootstrap.min.js
- Google Tag Manager gtag.js
- Twitter widgets widgets.js
- GitHub follow widget: ghbtns.com/github-btn.html
- favicon.ico

#### 3. Evidence Collected

The DevTools session produced the following evidence artifacts:

| Artifact | Evidence |
| --- | --- |
| Browser Console Log | JavaScript execution, API requests, warnings, blocked requests, and errors |
| HTTP Archive (.har) | Network requests, navigation timeline, responses, headers, and static resources |
| Performance Evaluation | Performance-related DevTools observations |
| XHR Breakpoint Screenshot | Evidence of XHR breakpoint/pause behavior |
| Storage Screenshot | Browser storage inspection evidence |

#### 4. Project Structure

```text
day-27-swapi-devtools/
├── console-logs/
│   └── swapi.dev-1790504306524.log
├── network-logs/
│   └── chromewebdata.har
├── Performance logs/
│   └── Performance Evaluation.gz
├── scripts/
│   └── day-27/
│       └── screenshots/
│           └── day-27:screenshots:xhr-breakpoint-pause...
├── storage/
│   └── Storage.png
└── README.md
```

#### 5. DevTools Coverage

The collected evidence covers:

- Browser Console inspection
- JavaScript execution through the Console
- API request execution and response inspection
- HTTP status-code analysis
- Network request blocking
- JavaScript and asynchronous messaging errors
- XHR/API request investigation
- HAR network capture
- Page navigation analysis
- Static resource inspection
- Storage inspection
- XHR breakpoint evidence
- Performance evaluation evidence

#### 6. Outcome

Day 27 documents a practical DevTools investigation of SWAPI using browser Console and Network tooling, supported by captured logs, HAR data, screenshots, storage evidence, and performance evidence.

The work demonstrates how browser DevTools can be used to distinguish between:

- Application/API errors
- Browser or extension-related blocking
- JavaScript console errors
- Network responses
- Cached responses
- Static resource loading
- Client-side execution issues

---

### 🗓️ September 29, 2026 — Day 29: ParaBank DevTools — DOM, Network, HAR & Web Performance (/day-29-parabank-devtools)

#### Objective

Investigate the ParaBank Administration page using Chrome DevTools to understand the page structure, network activity, captured HAR evidence, and browser-side web performance characteristics.

The day combines DOM inspection, Network investigation, HAR evidence capture, and Web Performance analysis into one DevTools-focused QA exercise.

#### Application Under Test

**Application:** ParaBank

**Target Page:** Administration (admin.htm)

**Primary Tool:** Google Chrome DevTools

**DevTools Areas:** Elements / DOM, Network, Performance

#### Scope

This exercise focused on observable browser-side evidence rather than application-source changes or assumptions.

#### DOM / Elements Inspection

**Reviewed:**

- Overall HTML / DOM hierarchy
- Main page containers and navigation structure
- Administration, database, JMS, and login forms
- Form controls and their attributes
- IDs, names, classes, and other visible locator attributes
- DOM structure relevant to UI automation
- Accessibility-relevant markup
- Hidden or unexpected DOM elements

#### Network Investigation

**Reviewed:**

- Requests generated by the ParaBank Admin page
- HTTP methods and status codes
- Resource types
- Request duration and timing data where available
- Request initiators
- Redirects
- Errors and failed requests
- API / XHR / Fetch activity
- Caching and selected response headers
- Request-chain / waterfall relationships visible in Network

#### HAR Evidence

Captured the Network evidence in HAR 1.2 format so that the browser-level request data can be retained as a machine-readable artifact.

#### Web Performance Investigation

Used Chrome DevTools Performance to inspect browser execution and rendering behavior.

Performance evidence is retained separately from the Network evidence so that Network findings and Performance findings are not mixed together.

#### Key Network Findings

The captured Network investigation recorded 19 requests:

| Resource Type | Count |
| ------------- | ----: |
| Document | 1 |
| Stylesheets | 2 |
| Scripts | 1 |
| Images | 15 |
| Total | 19 |

All observed requests returned HTTP 200 OK.

No 4xx responses, 5xx responses, failed requests, blocked requests, or redirects were observed in the captured trace.

No API, XHR, or Fetch requests were visible in the captured network trace; the page relied on traditional document and static-resource loading for the observed page load.

#### Main Document Timing

The main document request for /parabank/admin.htm had:

**Total duration:** 419 ms

**Waiting for server response:** 327 ms

**Waiting portion:** 78% of the total document duration

#### Network Header Evidence

Observed response/request-related evidence included:

**cache-control:** no-store on admin.htm

**content-encoding:** br (Brotli)

**content-type:** text/html;charset=ISO-8859-1

**server:** cloudflare

**x-content-type-options:** nosniff

Caching behavior for the individual CSS, JavaScript, and image sub-resources was not determinable from the provided selected-header evidence.

#### Network Findings

- The main document spent a significant portion of its request time waiting for the server response.
- template.css participates in an initiator chain that subsequently triggers multiple image requests.
- Two separate CSS files (template.css and style.css) are loaded for the page.

#### Key DOM Findings

The ParaBank Administration page uses a traditional table-based layout with major sections organized under containers such as:

- `#mainPanel`
- `#topPanel`
- `#headerPanel`
- `#bodyPanel`
- `#leftPanel`
- `#rightPanel`
- `#footermainPanel`

The DOM contains multiple forms and controls relevant to administration and login workflows.

#### Important Automation Locators

Stable IDs identified during inspection include:

- `#soapEndpoint`
- `#restEndpoint`
- `#initialBalance`
- `#minimumBalance`
- `#loanProcessorThreshold`
- `#loanProvider`
- `#loanProcessor`
- `#accessMode1`
- `#accessMode2`
- `#accessMode3`
- `#accessMode4`

**Relevant form names observed include:**

- initializeDB
- toggleJms
- login

#### DOM / Accessibility Findings

Observed DOM-level findings included:

- Form descriptions use bold table-cell text in places where explicit `<label>` elements could be used.
- The interface relies heavily on tables for layout.
- Inline styles are used for some presentation-related properties.
- Many generic div and a elements do not have unique IDs.
- The inspected controls did not show duplicate IDs in the critical form controls reviewed.
- A div#fs_div_all element was present near the bottom of the body and was identified in the report as likely being injected by a browser extension or tool rather than being part of the core application logic.
- The inspected images/clear.gif element had alt=null, while the ParaBank logo image had alt="ParaBank".
- The page lacks modern semantic landmarks such as `<header>`, `<nav>`, `<main>`, and `<footer>` in the inspected structure.

#### Web Performance Investigation (Performance Panel)

The ParaBank Admin page was also investigated with Chrome DevTools → Performance.

The Performance investigation was kept separate from Network analysis so that:

- Network timings remain Network evidence.
- Browser execution/rendering observations remain Performance evidence.
- HAR data remains raw Network evidence.

#### Performance Artifact Format

**Format used for Day 29: JSON**

This is a deliberate change from the earlier workflow in which performance-related output was packaged/generated in ZIP format. For Day 29, the performance evidence/output is retained as JSON so that the captured data remains directly machine-readable and easier to inspect or process.

**Artifact-format note:** Previous ZIP-based packaging has not been rewritten or replaced in earlier days. The JSON format applies to today's Day 29 performance artifact.

#### Evidence Strategy

The evidence is separated by purpose:

| Evidence | Purpose |
| --- | --- |
| DOM / Elements findings | Page structure, forms, controls, attributes, automation and accessibility observations |
| Network findings | Request behavior, status codes, timings, initiators, redirects, headers and caching evidence |
| HAR 1.2 | Machine-readable Network capture |
| Performance recording / JSON | Browser execution, rendering and Performance-panel evidence |

#### Suggested Day 29 Project Structure

```text
Day-29-Parabank-DevTools/

├── dom-inspection

├── network/
│   └── parabank-admin-network.har

├── performance/
│   └── parabank-performance.json

├── README.md
```

#### Investigation Output

**DOM**

A standalone HTML report was created from the DOM investigation summary so the findings can be reviewed as a browser-readable document.

**Network**

The captured ParaBank Admin Network data was preserved as a HAR 1.2 artifact.

**Performance**

The Day 29 Performance evidence is retained in JSON format, replacing the ZIP packaging approach used in the earlier workflow for this day's artifact.

#### QA / Automation Relevance

Day 29 connects browser DevTools investigation with practical QA work:

- DOM inspection helps identify reliable automation locators and structural issues.
- Network investigation helps verify request behavior and detect HTTP-level problems.
- HAR capture provides reusable, machine-readable evidence for debugging and documentation.
- Performance analysis helps separate browser execution/rendering issues from pure network behavior.
- Evidence-based reporting reinforces the project rule: **No evidence → No assumption.**

#### Recommendations Identified From the Investigation

Based on the captured findings:

- Investigate the server-side processing contributing to the main document's 327 ms waiting time.
- Review whether the two CSS files can be consolidated where appropriate.
- Review the CSS-to-image initiator chain and whether critical assets can be loaded without unnecessary dependency on CSS parsing.
- Replace table-based layout patterns with more appropriate CSS layout techniques when modernization is feasible.
- Add explicit `<label>` associations for form controls.
- Adopt semantic HTML landmarks where appropriate.
- Review the caching policy for the administration document and determine whether any portion can safely use caching.

---

### 🗓️ September 30, 2026 — Day 30: Random User DevTools & Module 2 Completion (/day-30-randomuser-devtools)

#### Overview

Day 30 focuses on using Chrome DevTools Console and Network Overrides to work with live API data directly from the browser, without changing or creating any backend code.

This day also officially marks the **final completion and wrap-up of Module 2 (API Testing & DevTools)**. Across this module, we covered comprehensive API testing workflows, automated collection runs, real-time network interception, performance profiling, DOM automation, and live client-side data manipulation.

The Day 30 exercise uses Random User as the target application and demonstrates two practical DevTools workflows:

1. Fetching and displaying user data through a Console script.
2. Intercepting and modifying an API response using Chrome DevTools Local Overrides.

#### Objectives

- Practice working with API data directly from Chrome DevTools.
- Use the DevTools Console to fetch and process Random User API data.
- Inspect live network requests and identify the `/api/` endpoint.
- Use Local Overrides to replace a live API response with locally modified test data.
- Verify that manipulated response data renders properly on the frontend.
- Understand how frontend behavior can be tested with controlled network responses without backend changes.
- **Wrap up and finalize Module 2: API Testing & DevTools.**

#### Target Application

- **Website:** `https://randomuser.me/`
- **API:** Random User API
- The exercises use the live Random User application and its API response as the source of test data.

#### Final Module 2 Project Structure

```text
Module-2-API-Testing_DevTools/
└── day-30-randomuser-devtools/
    ├── console-scripts/
    │   └── fetch-user-table.js
    ├── network-overrides/
    │   └── mocked-user.json
    └── README.md
```

---

### ✅ Module 2 Completion — API Testing & DevTools

The API Testing portion was completed through Day 26, and the Browser DevTools portion was completed through Days 27, 29, and 30. Module 2 now receives its final ✅ Complete status.

Final Module 2 state:

| Module 2 Area | Status |
| --- | --- |
| REST API Testing | ✅ Complete |
| Postman Testing | ✅ Complete |
| Newman / CLI Execution | ✅ Complete |
| API Authentication | ✅ Complete |
| API Negative Testing | ✅ Complete |
| API Request Chaining | ✅ Complete |
| Environment Variables | ✅ Complete |
| GraphQL API Testing | ✅ Complete — Day 26 |
| DevTools Investigation | ✅ Complete — Days 27, 29 & 30 |
| Module 2 Overall | ✅ Complete |

Day 29 added a dedicated DevTools investigation covering DOM / Elements, Network, HAR 1.2, and Web Performance while preserving the separation between raw network evidence and browser-side performance evidence. Day 30 closed the module with Console fetch scripting and Network Local Overrides against the Random User API.

---

# 🐛 Module 3: Deliberately Buggy Sites — Exploratory Testing

Welcome to Module 3 - Deliberately Buggy Sites. This section tracks charter-based exploratory testing against deliberately buggy practice sites, looking for functional, UI, responsive, state-handling, and error-handling defects.

## 📌 Progress Dashboard

| Date | Day | Target Site | Core Focus Areas | Status |
| --- | --- | --- | --- | --- |
| October 1, 2026 | Day 31 | AcademyBugs E-Commerce (AcademyBugs.com) | Exploratory Charters, Duplicate Actions, Modal Defects, Responsive Layout & Offline Error Handling | ✅ Completed |
| October 2, 2026 | Day 32 | TestSheepNZ Basic Calculator (testsheepnz.github.io) | Session-Based Exploratory Testing, Type Coercion, Input Validation, Concatenation Mode, Integer Rounding & Differential Build Checks | ✅ Completed |
| October 3, 2026 | Day 33 | Parking Cost Calculator (shino.de/parkcalc) | Parking Rate Boundaries, Date/Time Validation, Form State & Empty-Input Handling | ✅ Completed |
| October 4, 2026 | Day 34 | QA Practice Bug Challenge (qa-practice.razvanvancea.ro) | Form State, Terms & Conditions Validation, Negative-Value Boundaries & Shopping Cart API Failure | ✅ Completed |
| October 5, 2026 | Day 35 | Sweet Shop (sweetshop.netlify.app) | Catalog Exploration, Broken Asset Detection & DevTools Network Evidence | ✅ Completed |
| October 6, 2026 | Day 36 | JamesM To-Do List (todolist.james.am) | UI State Logic, Task Completion Counter & Backend API 404 Investigation via DevTools Network | ✅ Completed |
| October 7, 2026 | Day 37 | BugEater (bugeater.web.app) | Micro-Loan Interest Calculation, Floating-Point Precision, Input Validation & Timezone Scheduling (Jetlag Bug) | ✅ Completed |
| October 8, 2026 | Day 38 | Ministry of Testing (ministryoftesting.com) | Fetch/XHR Network Traffic, Request Payloads, Response Status Codes & Response Bodies | ✅ Completed |
| October 9, 2026 | Day 39 | Evil Tester Console Driver (testpages.eviltester.com) | DevTools Console Execution, Game Loop Validation, Console Rendering & HAR Network Analysis | ✅ Completed |

---

## 📅 Daily Execution Log

### 🗓️ October 1, 2026 — Day 31: AcademyBugs E-Commerce Exploratory Testing (/Day-31-AcademyBugs-e-commerce)

#### Overview

Day 31 starts Module 3: Deliberately Buggy Sites — Exploratory Testing using AcademyBugs.com as the e-commerce practice target.

The goal of this session was to explore realistic user behavior and deliberately look for functional, UI, responsive, state-handling, and error-handling defects rather than following rigid step-by-step test cases.

The exploratory planning used high-level test charters, supported by focused heuristics such as Operations & Time, Data & Structure, Data Boundaries & Sanitization, Platform & Visual Layout, and error/crash resilience.

#### Exploratory Test Charters

| # | Charter | Focus | Result |
| --- | --- | --- | --- |
| 1 | Impatience Double-Submit | Rapid multi-clicking / duplicate actions | 🐛 BUG-01 |
| 2 | Cart State Mutation Across Tabs | Multi-tab state synchronization | ✅ Passed |
| 3 | Extreme Boundary Input | Invalid values, sanitization, layout | ✅ Passed |
| 4 | Mid-Checkout Interrupt & Back Navigation | Browser history / navigation state | ✅ Passed |
| 5 | Responsive Viewport Shrink & Dynamic Resize | Responsive layout during dynamic resize | 🐛 BUG-03 |
| 6 | Offline-to-Online Network Drop | Error handling / user feedback | 🐛 BUG-04 |

**Note:** BUG-02 was discovered independently during exploration and was not part of the original planned charters.

#### Bugs Discovered

**BUG-01 — Lack of Request Debouncing / Click Throttling**

**Title:** [UI / Network Defect] Action buttons lack click debouncing, triggering duplicate requests on rapid multi-click actions

**User Perspective:**

A user with a slow or unstable connection may click an action repeatedly while waiting for the first action to complete. If every click is processed independently, duplicate actions or entries can occur.

**Actual Result:**

Every rapid click triggers an individual network request or state increment, creating duplicate actions instead of treating the interaction as a single action.

**Expected Result:**

The application should prevent duplicate processing through debouncing, click throttling, or an immediate disabled/loading state until the initial action completes.

**Severity:** High

**Priority:** P1 — Urgent

**Evidence:** Loom recording provided during testing.

**BUG-02 — Intrusive Pop-Up Modal Cannot Be Dismissed**

**Title:** [UI / Modal Defect] Un-dismissable modal overlay traps pointer focus, ignoring close button triggers and form submissions

This defect was not part of the original planned exploratory charters. It was discovered independently during exploration.

**User Perspective:**

An un-dismissable pop-up modal prevents the user from accessing the underlying application when the close icon and form submission do not successfully dismiss the overlay.

**Actual Result:**

The pop-up modal remains visible after attempting to use the close icon or submit the modal form. The overlay effectively blocks interaction with the underlying application.

**Expected Result:**

The close action or successful form submission should dismiss the modal, restore interaction with the main page, and unblock the user's workflow.

**Severity:** Critical

**Priority:** P1 — Urgent

**Evidence:** Visual observation and DOM inspection of the modal state.

**BUG-03 — Responsive Layout Breakpoint Failure at 375px**

**Title:** [Responsive / CSS Defect] Page layout fails to adapt to mobile viewport dimensions (375px), retaining desktop multi-column grid

This defect corresponds to Charter 5 — Responsive Viewport Shrink & Dynamic Resize.

**User Perspective:**

As a responsiveness tester, reducing the viewport to a mobile width should cause the application layout to adapt to the smaller screen.

**Actual Result:**

At a 375px viewport, the desktop multi-column layout remains instead of adapting to the smaller viewport. This produces layout overflow and degraded mobile usability.

**Expected Result:**

The page should reflow appropriately for the mobile viewport and maintain usable content without broken horizontal layout.

**Severity:** High

**Priority:** P1 — Urgent

**Evidence:** DevTools responsive-mode screenshot.

**BUG-04 — Offline Network Drop Without User Feedback**

**Title:** [Network / Error Handling Defect] Application fails silently during offline network drops without displaying user-facing connectivity alerts

This defect corresponds to Charter 6 — Offline-to-Online Network Drop.

**User Perspective:**

When an internet connection suddenly drops or becomes unavailable, the user should receive clear feedback instead of being left with a frozen, silent, or apparently broken interface.

**Actual Result:**

When the application is used while offline, the UI can fail silently, hang, or leave the user without clear feedback about the connectivity problem.

**Expected Result:**

The application should provide clear, accessible feedback when network connectivity is lost or a network-dependent action fails.

**Severity:** Medium

**Priority:** P2 — Normal

#### Passed Exploratory Checks

**Charter 2 — Cart State Mutation Across Tabs**

The planned multi-tab exploration was performed to check for inconsistent cart state, quantity changes, removals, and checkout state between tabs.

**Result:** Passed — no defect was added to the defect reports for this charter.

**Charter 3 — Extreme Boundary Input**

The planned boundary-input exploration was performed using extreme and invalid input conditions.

**Result:** Passed — no defect was added to the defect reports for this charter.

**Charter 4 — Mid-Checkout Interrupt & Back Navigation**

The planned browser Back/Forward navigation exploration was performed to investigate checkout state retention and navigation behavior.

**Result:** Passed — no defect was added to the defect reports for this charter.

#### Testing Approach

The session focused on exploratory testing, using realistic and unexpected user behavior instead of relying only on predefined test cases.

**Key Heuristics Used**

- **Operations & Time** — rapid repeated actions and timing-related behavior
- **Data & Structure** — consistency between application state and displayed UI
- **Data Boundaries & Sanitization** — extreme and invalid input conditions
- **Platform & Visual Layout** — viewport and responsive behavior
- **Performance & Crash Resilience** — network interruption and failure handling

#### Evidence

The Defects_&_Bugreports directory contains the documented findings and supporting evidence.

**Screenshots**

- Screenshots/03-responsive-375px.png

**Defect Reports**

- 01-Duplicate-items.md
- 02-Intrusive-Pop-Up-Modal-Un-dismissable-via-Close-Icon-or-Form-Submission.md
- 03-responsive-375px.md
- 04-Error-Handling-&-User-Feedback.md

#### Folder Structure

```text
Day-31-AcademyBugs-e-commerce/
├── Defects_&_Bugreports/
│   ├── Screenshots/
│   │   └── 03-responsive-375px.png
│   ├── 01-Duplicate-items.md
│   ├── 02-Intrusive-Pop-Up-Modal-Un-dismissable-via-Close-Icon-or-Form-Submission.md
│   ├── 03-responsive-375px.md
│   └── 04-Error-Handling-&-User-Feedback.md
└── README.md
```

#### Day 31 Outcome

Day 31 resulted in four documented defects:

- BUG-01 — Duplicate actions caused by rapid multi-clicking
- BUG-02 — An unplanned un-dismissable pop-up modal
- BUG-03 — Responsive layout failure at a 375px viewport
- BUG-04 — Missing user feedback during offline network conditions

Three planned exploratory charters were recorded as passed:

- Charter 2 — Cart State Mutation Across Tabs
- Charter 3 — Extreme Boundary Input
- Charter 4 — Mid-Checkout Interrupt & Back Navigation

The responsive defect came from Charter 5, while the offline/error-handling defect came from Charter 6.

BUG-02 was an additional defect discovered independently during exploration.

This day demonstrates exploratory QA skills including charter-based testing, unexpected user behavior analysis, defect discovery, severity/priority classification, responsive testing, state validation, and error-handling investigation.

---

### 🗓️ October 2, 2026 — Day 32: Exploratory Testing on TestSheepNZ Basic Calculator (/Day-32-Basic-calculator)

#### Executive Summary

This session continues **Module 3: Deliberately Buggy Sites & Exploratory Testing** using **Session-Based Test Management (SBTM)** on the [TestSheepNZ Basic Calculator](https://testsheepnz.github.io/BasicCalculator.html). The primary goal is to apply heuristic exploratory testing across multiple application builds (Prototype vs. Builds 1–8) to expose type-coercion bugs, state boundary failures, input validation flaws, and integer rounding defects.

Unlike static test suites, testing was executed via session charters targeting mathematical operations, string concatenation modes, and differential build checks.

#### Target Site & Architecture Overview

- **Target URL:** `https://testsheepnz.github.io/BasicCalculator.html`
- **Baseline Target (Prototype):** Serves as ground truth (operates cleanly according to spec).
- **Defect Targets (Builds 1–8):** Contain deliberate logic, arithmetic, and validation defects.
- **Supported Operations:** `Add`, `Subtract`, `Multiply`, `Divide`, and `Concatenate`.
- **Special Controls:** `Integers only` checkbox (rounds/truncates decimal outputs).

#### Exploratory Session Charters

**Charter 1: Type & Input Boundaries (Mathematical Operations)**

- **Heuristic:** Input stress & data types.
- **Scope:** Test string inputs, negative numbers, decimals, zero denominators ($x / 0$), extremely large numbers, and empty inputs across Builds 1–8 to verify numerical validation triggers.

**Charter 2: String Concatenation Mode**

- **Heuristic:** Mode switching & state disabling.
- **Scope:** Select "Concatenate", verify that inputs are treated strictly as strings, check that non-numeric characters are preserved, and confirm that the integer checkbox is disabled/ignored.

**Charter 3: Integer Toggle & Rounding Precision**

- **Heuristic:** Data truncation & rounding algorithms.
- **Scope:** Perform operations resulting in floating-point values (e.g., $5 / 2 = 2.5$) with the `Integers only` checkbox enabled and disabled to evaluate truncation/rounding mechanics.

**Charter 4: Build Comparison (Builds 1–8 vs. Prototype Baseline)**

- **Heuristic:** Differential build testing.
- **Scope:** Execute identical calculation sets against the Prototype baseline versus Builds 1–8 to uncover build-specific regressions and logic bugs.

#### Defect Inventory & Key Findings

| Bug ID | Title | Build | Category | Severity | Priority | File |
| --- | --- | --- | --- | --- | --- | --- |
| **BUG-01** | Addition performs string concatenation ($16 + 4 = 164$) | Build 2 | Calculation / Type Coercion | High | P1 | `01-Outputting Incorrect Calculation...md` |
| **BUG-02** | Incomplete field validation & spurious error during Concatenate | Build 3 | Validation / UX Logic | Medium | P2 | `02-Incomplete Field Validation.md` |

#### Detailed Bug Reports

**1. [Calculation / Logic Defect] Addition Operation Performs String Concatenation**

- **Build:** Build 2
- **File:** `Defects_&_Bugreports/01-Outputting Incorrect Calculation...md`
- **Severity / Priority:** High / P1
- **User Perspective:** As a user running functional arithmetic tests, selecting `Add` for inputs `16` and `4` should yield `20`. Outputting `164` demonstrates a fundamental type-coercion defect where strings are concatenated instead of added numerically.
- **Actual Result:** The `Answer` field displays `164` ("16" + "4").
- **Expected Result:** Inputs should be parsed as numbers (`parseFloat()`) to output `20`.
- **Evidence:** Screenshot in `Defects_&_Bugreports/Screenshots/01-Outputting Incorrect Calculation...png`

**2. [Validation / Logic Defect] Spurious Error & Incomplete Field Validation During Concatenate**

- **Build:** Build 3
- **File:** `Defects_&_Bugreports/02-Incomplete Field Validation.md`
- **Severity / Priority:** Medium / P2
- **User Perspective:** Entering special characters into both fields under `Concatenate` should either suppress numerical checks or validate both fields properly. Instead, Build 3 flags `Number 1 is not a number` while evaluating `4` as the answer and ignoring field 2 (`+$@`).
- **Actual Result:** Inline red error `Number 1 is not a number` appears, suppressing field 2 validation while simultaneously printing `4` into the `Answer` field.
- **Expected Result:** `Concatenate` should bypass numeric validation entirely, OR validate both fields without printing partial calculation results alongside active error states.

#### Project Structure

```text
Module-3-Deliberately-Buggy Sites_Exploratory-Testing
Day-32-Basic-calculator/
├── README.md
└── Defects_&_Bugreports/
    ├── 01-Outputting Incorrect Calculation...md
    ├── 02-Incomplete Field Validation.md
    └── Screenshots/
        └── 01-Outputting Incorrect Calculation...png
```

---

### 🗓️ October 3, 2026 — Day 33: Exploratory Testing on Parking Cost Calculator (/Day-33-Parking-Tax)

#### Executive Summary

Day 33 continues **Module 3: Deliberately Buggy Sites & Exploratory Testing** with exploratory testing of the [Parking Cost Calculator](https://www.shino.de/parkcalc/). The session focused on parking-rate boundaries, entry/exit chronology, form state after calculation, and incomplete input handling.

Four reproducible defects were documented. The checks used the rates displayed on the page as the expected behavior and ordinary date/time values unless the charter specifically tested invalid input.

#### Target Site & Rates

- **Target URL:** https://www.shino.de/parkcalc/
- **Application:** Parking Cost Calculator
- **Lots tested:** Valet, Short-Term, Economy, Long-Term Garage, and Long-Term Surface.
- **Relevant published rates:** Economy Parking is $2.00 per hour with a $9.00 daily maximum; other lots also publish daily caps. The page states that entry and leaving dates and times are required.

#### Exploratory Session Charters

| Charter | Focus | Result |
| --- | --- | --- |
| Rate Cap Boundary | Compare accrued hourly charges against the Economy daily maximum | 🐛 BUG-01 |
| Entry/Exit Chronology | Submit an exit timestamp earlier than the entry timestamp | 🐛 BUG-02 |
| Post-Calculation State | Check whether the selected lot remains visible with its quote | 🐛 BUG-03 |
| Required Date Inputs | Submit the calculator with its default date values unchanged | 🐛 BUG-04 |
| Rate and Duration Sampling | Check listed lots at short, daily, and weekly durations | Findings recorded above |

#### Defect Inventory

| Bug ID | Title | Category | Severity | Priority | Report |
| --- | --- | --- | --- | --- | --- |
| **BUG-01** | Economy hourly charge exceeds the published daily maximum | Pricing / Calculation | High | P1 | [01-Economy-Lot-Exceeds-Daily-Maximum.md](Defects_&_Bugreports/01-Economy-Lot-Exceeds-Daily-Maximum.md) |
| **BUG-02** | Departure before entry produces a zero-cost negative-duration quote | Input Validation / Calculation | Medium | P2 | [02-Departure-Before-Entry-Accepted.md](Defects_&_Bugreports/02-Departure-Before-Entry-Accepted.md) |
| **BUG-03** | Selected parking lot reverts to Valet after calculation | UI State / Usability | Medium | P2 | [03-Parking-Lot-Selection-Resets-After-Calculation.md](Defects_&_Bugreports/03-Parking-Lot-Selection-Resets-After-Calculation.md) |
| **BUG-04** | Submitting default dates returns a blank page without validation | Input Validation / Error Handling | Medium | P2 | [04-Blank-Dates-Return-Empty-Page.md](Defects_&_Bugreports/04-Blank-Dates-Return-Empty-Page.md) |

#### Detailed Findings

**BUG-01 — Economy Lot Exceeds Published Daily Maximum**

- **Severity / Priority:** High / P1
- **Steps:** Select Economy Parking; enter 10/03/2026 08:00 AM as entry and 10/03/2026 12:30 PM as exit; calculate.
- **Actual:** The calculator reports $10.00 for 4 hours and 30 minutes.
- **Expected:** Economy is listed at $2.00 per hour with a $9.00 daily maximum. Since the hourly charge reaches $10.00 at five billable hours, the quote should be capped at $9.00.
- **Report:** [BUG-01 full report](Defects_&_Bugreports/01-Economy-Lot-Exceeds-Daily-Maximum.md)

**BUG-02 — Departure Before Entry Is Accepted**

- **Severity / Priority:** Medium / P2
- **Steps:** Select Valet Parking; enter 10/03/2026 08:00 AM as entry and 10/03/2026 07:00 AM as exit; calculate.
- **Actual:** The calculator returns $0.00 and displays a duration of -1 day, 23 hours.
- **Expected:** Reject the invalid interval with a clear validation message; do not present a fare for negative parking duration.
- **Report:** [BUG-02 full report](Defects_&_Bugreports/02-Departure-Before-Entry-Accepted.md)

**BUG-03 — Parking Lot Selection Resets After Calculation**

- **Severity / Priority:** Medium / P2
- **Steps:** Select Economy Parking; enter 10/03/2026 08:00 AM as entry and 10/03/2026 08:00 PM as exit; calculate.
- **Actual:** The result is $9.00 for Economy Parking, but the dropdown resets to Valet Parking.
- **Expected:** Preserve the selected lot after calculation, or clearly identify the lot used for the quote.
- **Report:** [BUG-03 full report](Defects_&_Bugreports/03-Parking-Lot-Selection-Resets-After-Calculation.md)

**BUG-04 — Default Dates Return a Blank Page**

- **Severity / Priority:** Medium / P2
- **Steps:** Open the calculator and click Calculate without replacing the default MM/DD/YYYY date values.
- **Actual:** The submit request returns HTTP 200 with an empty document; no form or validation message is displayed.
- **Expected:** Keep the form available and explain that valid entry and leaving dates and times are required.
- **Report:** [BUG-04 full report](Defects_&_Bugreports/04-Blank-Dates-Return-Empty-Page.md)

#### Testing Approach

The session used charter-based exploratory testing and boundary analysis. Each finding was reproduced in the live calculator using its visible controls, and the resulting fare, duration, selected lot, or response state was compared with the page's rate information and the expected form behavior.

#### Project Structure

```text
Day-33-Parking-Tax/
├── README.md
└── Defects_&_Bugreports/
    ├── 01-Economy-Lot-Exceeds-Daily-Maximum.md
    ├── 02-Departure-Before-Entry-Accepted.md
    ├── 03-Parking-Lot-Selection-Resets-After-Calculation.md
    └── 04-Blank-Dates-Return-Empty-Page.md
```

#### Day 33 Outcome

Day 33 resulted in four documented defects covering fare calculation, chronology validation, post-submit selection state, and empty-input handling. This session applies exploratory QA techniques to financial calculations and the user-visible consistency of form results.

---

### 🗓️ October 4, 2026 — Day 34: QA Practice Bug Challenge (/Day-34-Qa_practice-Bug-challenge)

#### Overview

Day 34 focuses on deliberately buggy web application testing using the QA Practice application.

The session focused on identifying functional, UI/form-state, validation, boundary, and backend/integration defects through direct application behavior and DevTools investigation.

The documented findings cover registration workflow failures and a persistent shopping-cart product-loading failure.

#### Bugs Discovered

| # | Bug | Area | Severity | Priority |
| --- | --- | --- | --- | --- |
| BUG-01 | "Terms and Conditions" checkbox permanently disabled | UI / Form State | Critical | P1 — Urgent |
| BUG-02 | Registration submits without Terms & Conditions agreement | Validation / Logic | High | P1 — Urgent |
| BUG-03 | Negative numeric values accepted without validation feedback | Validation / Boundary | Medium | P2 — Normal |
| BUG-04 | Shopping cart fails to load products | API / Integration | High | P1 — Urgent |

**BUG-01 — "Terms and Conditions" Checkbox Permanently Disabled**

**Title:** [UI / Form Defect] "I agree with the terms and conditions" checkbox is permanently disabled, preventing form submission

**User Perspective:**

As a user registering for an account, the "I agree with the terms and conditions" checkbox must be interactable so that the terms can be accepted.

When the checkbox is permanently disabled without a clear unlock condition, users are blocked from completing registration.

**Environment:**

- **OS:** macOS / Windows / Linux / Android
- **Browser/App:** Google Chrome / Modern Web Browser
- **Device:** Desktop / Mobile
- **Build/URL:** qa-practice.razvanvancea.ro/bugs-form.html

**Steps to Reproduce:**

1. Navigate to the registration form page.
2. Fill out the required registration fields, such as Phone number, Country, Email address, and Password.
3. Attempt to click/check the "I agree with the terms and conditions" checkbox above the Register button.
4. Inspect the checkbox using the DevTools Console.
5. Evaluate:

```javascript
document.querySelector('input[type="checkbox"]').disabled
```

**Actual Result:**

The checkbox is visually greyed out and non-interactable.

The DevTools Console confirms that the checkbox's .disabled property returns true.

This prevents the user from accepting the terms and completing the intended registration workflow.

**Expected Result:**

The Terms and Conditions checkbox should be enabled by default or become enabled when any legitimate prerequisite condition is satisfied, allowing the user to toggle agreement and continue registration.

**Severity:** Critical — Completely blocks the registration workflow and user onboarding.

**Priority:** P1 — Urgent

**Evidence:** Screenshot capturing the registration form together with DevTools Console output verifying that the checkbox .disabled property returns true.

**BUG-02 — Terms & Conditions Checkbox Bypass Allows Unauthorized Form Submission**

**Title:** [Validation / Logic Defect] Registration form submits successfully without requiring agreement to "Terms and Conditions"

**User Perspective:**

As a user registering for an account, mandatory Terms and Conditions agreement should be enforced before the registration form can be submitted.

**Environment:**

- **OS:** macOS / Windows / Linux / Android
- **Browser/App:** Google Chrome / Modern Web Browser
- **Device:** Desktop / Mobile
- **Build/URL:** qa-practice.razvanvancea.ro/bugs-form.html

**Steps to Reproduce:**

1. Navigate to the registration form page.
2. Populate all required text fields, such as Phone number, Country, Email, and Password.
3. Leave the "I agree with the terms and conditions" checkbox unchecked or unselected.
4. Click the Register button.
5. Observe the form submission behavior and response.

**Actual Result:**

The form bypasses the expected agreement validation and accepts the registration attempt without enforcing Terms and Conditions agreement.

**Expected Result:**

Form submission should be blocked until the Terms and Conditions checkbox is explicitly checked.

The application should provide appropriate validation feedback, such as an inline message explaining that the user must accept the Terms and Conditions before proceeding.

**Severity:** High — Creates a serious validation and business-logic defect because registration can proceed without the expected agreement.

**Priority:** P1 — Urgent

**Evidence:** Recorded video evidence demonstrating form submission while the Terms and Conditions checkbox remains unchecked.

**BUG-03 — Negative Numeric Inputs Accepted Without Validation**

**Title:** [Validation / Boundary Defect] Registration fields accept negative numeric values without triggering validation warning messages

**User Perspective:**

As a software tester evaluating registration-form boundaries and data validation, negative numeric values should be rejected when a field expects a positive value.

**Environment:**

- **OS:** macOS / Windows / Linux / Android
- **Browser/App:** Google Chrome / Modern Web Browser
- **Device:** Desktop / Mobile
- **Build/URL:** qa-practice.razvanvancea.ro/bugs-form.html

**Steps to Reproduce:**

1. Navigate to the registration form page.
2. Enter negative numeric values such as -1 or -10 into fields expecting positive integers, such as Phone number / Age / Amount.
3. Fill out the remaining required fields.
4. Click Register.
5. Observe the validation state and application response.

**Actual Result:**

The application accepts negative input values without displaying validation warnings or error prompts.

**Expected Result:**

Fields that expect positive numeric values should reject negative numbers and provide clear validation feedback.

The invalid value should prevent successful form submission until it is corrected.

**Severity:** Medium — Can compromise data integrity and create downstream processing problems.

**Priority:** P2 — Normal

**Evidence:** Recorded video evidence demonstrating the negative-value input behavior.

**BUG-04 — Persistent Backend Request Failure Prevents Shopping Cart Product Loading**

**Title:** [API / Integration Defect] Shopping cart fails to load products with error "Failed to load products. Please try again later" across stable network environments

**User Perspective:**

As a user navigating to the e-commerce shopping cart, attempting to view cart items should display the products that have been added.

Instead, the shopping cart displays an inline red error:

"Failed to load products. Please try again later."

Testing across multiple independent networks indicates that the issue is not caused by a local connection drop or client-side Wi-Fi problem.

**Environment:**

- **OS:** macOS / Windows / Linux / Android
- **Browser/App:** Google Chrome / Modern Web Browser
- **Device:** Desktop / Mobile
- **Build/URL:** QA Practice E-Commerce Module — Ecommerce - Login, Add to Cart, Submit order, Logout

**Steps to Reproduce:**

1. Navigate to the QA Practice e-commerce module.
2. Access the SHOPPING CART section.
3. Ensure active internet connectivity.
4. Observe the content area beneath the ITEM, PRICE, and QUANTITY headers.
5. Repeat the observation across independent network environments if necessary.

**Actual Result:**

The shopping cart fails to fetch product data from the server.

A red error message is displayed:

"Failed to load products. Please try again later."

The cart remains empty and displays a Total of $0.

**Expected Result:**

The shopping cart should successfully retrieve the required product/cart data from the backend, process the response, and render the populated line items together with the correct total price.

**Severity:** High — Blocks the core shopping-cart and checkout pipeline, preventing users from reviewing cart items or proceeding with the purchase workflow.

**Priority:** P1 — Urgent

**Investigation Area:**

The observed behavior indicates a persistent backend/integration failure. Possible areas for investigation include:

- Backend API response
- Server-side application errors
- Database connectivity
- API request/response handling
- Cross-origin resource sharing (CORS)
- Network response status and payload

These are investigation areas rather than confirmed root causes.

**Evidence:** Screenshot capturing the SHOPPING CART section with the red inline error message and the empty cart state.

#### Testing Focus

Day 34 concentrated on several important QA areas:

**UI & Form State**

- Checking whether required controls are actually interactable
- Inspecting disabled DOM properties
- Verifying form controls against their expected workflow state

**Form Validation & Business Logic**

- Testing whether mandatory Terms and Conditions agreement is enforced
- Checking whether form submission can bypass expected validation
- Verifying that invalid values are rejected before submission

**Boundary Testing**

- Testing negative numeric values
- Observing whether invalid boundary values trigger appropriate validation feedback

**API & Integration Testing**

- Investigating persistent product-loading failures
- Verifying behavior across independent network environments
- Observing user-facing API failure feedback in the shopping-cart workflow

#### Evidence

The Defects_&_Bugreports directory contains the documented defects and supporting evidence.

**Screenshots**

```text
Screenshots/
├── 01-Checkbox Permanently Disabled...
├── 04-Persistent Backend Request Failure...
└── 04{2}-Persistent Backend Request...
```

**Defect Reports**

```text
Defects_&_Bugreports/
├── 01-Checkbox Permanently Disabled....
├── 02&03-Unauthorized Form Submission...
├── 04-Persistent Backend Request Failure...
└── Screenshots/
```

The exact filenames may vary from the shortened names displayed in the project explorer.

#### Folder Structure

```text
Day-34-Qa_practice-Bug-challenge/
├── Defects_&_Bugreports/
│   ├── Screenshots/
│   │   ├── 01-Checkbox Permanently Disabled...
│   │   ├── 04-Persistent Backend Request Failure...
│   │   └── 04{2}-Persistent Backend Request...
│   ├── 01-Checkbox Permanently Disabled....
│   ├── 02&03-Unauthorized Form Submission...
│   └── 04-Persistent Backend Request Failure...
└── README.md
```

#### Day 34 Outcome

Day 34 produced four documented defects across registration and e-commerce workflows:

- BUG-01 — Terms and Conditions checkbox permanently disabled
- BUG-02 — Registration submission bypasses Terms and Conditions agreement
- BUG-03 — Negative numeric inputs accepted without validation feedback
- BUG-04 — Persistent backend request failure prevents shopping-cart product loading

The session demonstrates practical QA skills in:

- Form-state investigation
- DevTools-based DOM inspection
- Functional and business-rule validation
- Boundary-value testing
- Negative-input testing
- API/integration failure investigation
- Cross-network issue verification
- Severity and priority classification
- Evidence-based defect reporting

**Key QA Takeaway**

Day 34 demonstrates that a bug can exist at several layers of the same workflow: UI state, client-side validation, business logic, and backend integration.

Rather than assuming the root cause, the investigation records the observed behavior and supporting evidence, while backend/API possibilities remain investigation areas until directly verified.

---

### 🗓️ October 5, 2026 — Day 35: Exploratory Testing on Sweet Shop (/Day-35-Sweet_Shop)

#### Overview

Day 35 uses exploratory testing and browser DevTools on the [Sweet Shop](https://sweetshop.netlify.app/) storefront. One reproducible defect was found in the catalog: the Wham Bars product image does not load.

#### Defect Inventory

| Bug ID | Title | Category | Severity | Priority | Report |
| --- | --- | --- | --- | --- | --- |
| BUG-01 | Wham Bars product image fails to load | UI / Broken Asset | Low | P3 — Low | [01-Wham-Bars-Product-Image-Fails-to-Load.md](Module-3-Deliberately-Buggy%20Sites_Exploratory-Testing/Day-35-Sweet_Shop/Defects_&_Bugreports/01-Wham-Bars-Product-Image-Fails-to-Load.md) |

**BUG-01 — Wham Bars Product Image Fails to Load**

- **Steps:** Open the catalog at `/sweets` and scroll to the Wham Bars product card.
- **Actual:** The product image is broken. DevTools shows its request to `/img/whan.jpg` returns HTTP 404; the image element has `naturalWidth` 0.
- **Expected:** The Wham Bars image should load in the catalog card.
- **Evidence:** [DevTools evidence](Module-3-Deliberately-Buggy%20Sites_Exploratory-Testing/Day-35-Sweet_Shop/Defects_&_Bugreports/Evidence/01-Wham-Bars-Image-DevTools-Evidence.md) and [screenshot](Module-3-Deliberately-Buggy%20Sites_Exploratory-Testing/Day-35-Sweet_Shop/Defects_&_Bugreports/Evidence/01-Wham-Bars-Image-Broken.jpg).

#### Project Structure

```text
Day-35-Sweet_Shop/
├── README.md
└── Defects_&_Bugreports/
    ├── 01-Wham-Bars-Product-Image-Fails-to-Load.md
    └── Evidence/
        ├── 01-Wham-Bars-Image-DevTools-Evidence.md
        └── 01-Wham-Bars-Image-Broken.jpg
```

---

### 🗓️ October 6, 2026 — Day 36: To-Do List Defects & Bug Reports (/Day-36-TodoList)

#### Overview & Project Under Test

| Field | Details |
| --- | --- |
| Application | JamesM To-Do List |
| URL | http://todolist.james.am/#/ |
| Testing Focus | UI state logic, task completion behavior, and client-server/API communication |
| Tools | Google Chrome DevTools, Network tab |

#### Defect Inventory

| ID | Defect Summary | Category | Severity | Priority | Status |
| --- | --- | --- | --- | --- | --- |
| BUG-001 | Active "Items Left" counter miscalculates remaining tasks | UI / State Logic | Medium | P3 — Low | Open |
| BUG-002 | Backend API endpoints (learn.json, api) return HTTP 404 | API / Routing | High | P1 — Urgent | Open |

**BUG-001 — Active "Items Left" Counter Miscalculates Remaining Tasks**

**Summary:**

The To-Do List footer incorrectly calculates the number of uncompleted tasks after users mark tasks as completed.

With 4 active tasks:

- Completing 1 task displays "2 items left" instead of "3 items left".
- Completing 2 tasks displays "1 item left" instead of "2 items left".

This indicates an off-by-one counter/state-logic defect.

**User Perspective:**

As a user managing a to-do list with four active items, marking an item as completed should immediately and accurately decrement the "items left" counter. An inaccurate counter gives the user an incorrect representation of the current task state.

**Environment:**

| Category | Details |
| --- | --- |
| OS | macOS / Windows / Linux / Android |
| Browser/App | Google Chrome / Modern Web Browser |
| Device | Desktop / Mobile |
| Build / URL | todolist.james.am/#/ |

**Steps to Reproduce:**

1. Navigate to todolist.james.am/#/.
2. Add four tasks:
   - Consume a podcast
   - Go on a date
   - Play games
   - Horse around
3. Mark one task as completed by clicking its checkmark.
4. Observe the footer counter.
5. Mark a second task as completed.
6. Observe the footer counter again.

**Actual vs Expected Result:**

| Completed | Total | Expected Counter | Actual Result |
| --- | --- | --- | --- |
| 0 | 4 | 4 items left | 4 items left |
| 1 | 4 | 3 items left | 2 items left |
| 2 | 4 | 2 items left | 1 item left |

**Expected Calculation:**

```text
itemsLeft = totalItems - completedItems
```

Expected state transitions:

```text
0 / 4 completed → 4 items left
1 / 4 completed → 3 items left
2 / 4 completed → 2 items left
3 / 4 completed → 1 item left
4 / 4 completed → 0 items left
```

The UI should also handle singular/plural wording correctly:

- 1 item left
- 2 items left
- 3 items left

**Impact, Severity & Priority:**

**Severity:** Medium — Does not block task creation or completion, but displays inaccurate state information.

**Priority:** P3 — Low — Appears isolated to the footer calculation and does not corrupt underlying task data.

**Suspected Area:**

Potential causes include incorrect array indexing, incorrect filtering of completed-task state, an off-by-one calculation, or incorrect state recalculation after checkbox toggling.

**Evidence:**

```text
Evidence/
├── 01-Counter-Miscalculates-1.png
└── 01-Counter-Miscalculates-2.png
```

**BUG-002 — Backend API Endpoints Return 404 Not Found**

**Summary:**

XHR/Fetch requests to the application's learn.json and api endpoints return HTTP 404 Not Found responses.

The browser successfully initiates the requests, but the server fails to resolve the requested resources.

**User Perspective:**

As a software tester analyzing web-network traffic, observing client-side requests followed by 404 Not Found responses indicates a failure in server-side routing, endpoint configuration, or static-resource mapping.

If these resources are required for application initialization or dynamic behavior, the failures can interfere with expected data retrieval or synchronization.

**Environment:**

| Category | Details |
| --- | --- |
| OS | macOS / Windows / Linux / Android |
| Browser | Google Chrome |
| Testing Tool | Chrome DevTools → Network |
| Network Filter | Fetch/XHR |
| Application Layer | Web application backend / API layer |

**Steps to Reproduce:**

1. Open the application in Google Chrome.
2. Launch Developer Tools using F12.
3. Select the Network tab.
4. Filter requests by Fetch/XHR.
5. Load the application or trigger actions that initiate backend requests.
6. Inspect requests for learn.json and api.
7. Verify their HTTP status codes.

**Actual Result:**

The server returns HTTP 404 Not Found for requests to:

- learn.json
- api

The requests are initiated by client-side JavaScript, including:

- base.js:137
- angular.js:10514

**Expected Result:**

The backend server should resolve the requested routes and return successful responses:

```text
HTTP 200 OK
Content-Type: application/json
```

along with valid JSON payloads where applicable.

**Impact, Severity & Priority:**

**Impact & Severity:** High — Affects server-side data retrieval/synchronization and may interfere with application initialization or dynamic rendering.

**Priority:** P1 — Urgent — Requires immediate server-side routing investigation if these endpoints are required for core operations.

**Suspected Areas:**

Potential causes include:

- Missing backend endpoints.
- Broken static-file path mapping.
- Incorrect API base URL.
- Incorrect server rewrite rules.
- Missing learn.json resource.
- Deployment or environment configuration problems.

**Evidence:**

```text
Evidence/
├── 02-API-Endpoints-Return-404-Not-Found.png
└── 02-API-Endpoints-Return-404-Not-Found.md
```

#### Recommended Validation After Fix

**BUG-001 — UI Counter Fix**

Verify the complete counter matrix:

| Completed | Total | Expected |
| --- | --- | --- |
| 0 | 4 | 4 items left |
| 1 | 4 | 3 items left |
| 2 | 4 | 2 items left |
| 3 | 4 | 1 item left |
| 4 | 4 | 0 items left |

Also verify toggling completion state, deleting completed tasks, adding new tasks, page refreshes, filtering, and singular/plural wording.

**BUG-002 — API Endpoint Fix**

Verify that:

- learn.json returns 200 OK.
- api returns the expected successful status.
- Response bodies contain valid JSON where applicable.
- Related Fetch/XHR requests no longer return 404.
- The application behaves correctly after a hard refresh.
- Relevant console errors are cleared.
- Graceful fallbacks exist when an endpoint is unavailable.

#### Conclusion

Two separate defects were identified during exploratory testing:

- **BUG-001 — UI State Calculation:** The footer under-reports the number of remaining tasks because the active-item counter is calculated incorrectly.
- **BUG-002 — Server/API Routing:** Requests to learn.json and api return 404 Not Found, indicating a server-side routing, resource-path, or configuration problem.

Both defects should be retested after remediation, with particular attention to state transitions for BUG-001 and endpoint availability/error handling for BUG-002.

#### Project Structure

```text
Day-36-TodoList/
├── README.md
└── Defects_&_Bugreports/
    ├── 01-Active-Items-Counter-Miscalculates-Remaining-Tasks.md
    ├── 02-Backend-API-Endpoints-Return-404-Not-Found.md
    └── Evidence/
        ├── 01-Counter-Miscalculates-1.png
        ├── 01-Counter-Miscalculates-2.png
        ├── 02-API-Endpoints-Return-404-Not-Found.png
        └── 02-API-Endpoints-Return-404-Not-Found.md
```

---

### 🗓️ October 7, 2026 — Day 37: BugEater Exploratory Testing (/Day-37-bugeater.web.app)

#### Overview

This session documents exploratory testing performed against BugEater's web-based challenges, covering:

- **Micro-Loan Interest** — financial calculation, precision, boundary-value, and input-validation testing.
- **The Jetlag Bug** — timezone parsing and task-scheduling validation.

---

#### 1. Micro-Loan Interest Calculation Defects

**Project Under Test**

| Field | Details |
| --- | --- |
| Target Application | bugeater.web.app |
| Challenge | Exploratory Testing Challenge: Micro-loan Interest |
| Module | Micro-interest calculation engine |
| Rate | 0.1% per period |
| URL | bugeater.web.app/exploratory/microloan-interest |
| Primary Browser | Google Chrome / Modern Web Browser |
| Coverage | 4 test cases |

**Test-Case Inventory**

| ID | Scenario | Category | Severity | Priority | Result |
| --- | --- | --- | --- | --- | --- |
| TC-01 | Clean nominal calculation | Functional Baseline | Low | P3 — Low | Verified |
| TC-02 / BUG-001 | Floating-point imprecision | Calculation / Precision | Medium | P2 — Normal | Defect |
| TC-03 | Zero amount boundary | Validation / Boundary | Low | P3 — Low | Verified |
| TC-04 / BUG-002 | Empty / non-numeric input | Validation | Medium | P2 — Normal | Defect |

**TC-01 — Nominal Clean Calculation Baseline**

**User Perspective:**

As a user entering a standard positive integer such as $1000, the calculated micro-interest should produce the expected decimal result without noise or miscalculation.

**Title:** [Functional Baseline] Nominal micro-interest calculation for standard integer inputs

**Environment:**

- **OS:** macOS / Windows / Linux / Android
- **Browser/App:** Google Chrome / Modern Web Browser
- **Device:** Desktop / Mobile
- **Build / URL:** bugeater.web.app/exploratory/microloan-interest

**Steps to Reproduce:**

1. Navigate to bugeater.web.app/exploratory/microloan-interest.
2. Enter a standard positive integer amount, for example 100.
3. Click Calculate.

**Actual Result:**

The calculator computes the baseline nominal 0.1% rate accurately.

```text
100 × 0.001 = 0.1
```

**Expected Result:**

The output should match the expected mathematical result:

```text
$100 → $0.10 interest
```

**Severity:** Low — Functional benchmark validation.

**Priority:** P3 — Low — Baseline happy-path confirmation.

**Evidence:** BugEater challenge completion screen verifying Test Case 1 — Clean calculation.

**BUG-001 / TC-02 — Floating-Point Imprecision / Binary Rounding Noise**

**User Perspective:**

As a user calculating loan interest, entering certain floating-point loan amounts should not display raw binary floating-point artifacts such as 0.00010000000000000002 instead of 0.0001. Such output damages visual polish and user trust in financial calculations.

**Title:** [Calculation / Precision Defect] Micro-loan interest calculation outputs raw floating-point binary rounding noise

**Environment:**

- **OS:** macOS / Windows / Linux / Android
- **Browser/App:** Google Chrome / Modern Web Browser
- **Device:** Desktop / Mobile
- **Build / URL:** bugeater.web.app/exploratory/microloan-interest

**Steps to Reproduce:**

1. Navigate to the Micro-loan Interest challenge on BugEater.
2. Enter a floating-point amount that can expose JavaScript binary-fraction representation quirks, such as:
   - 0.1
   - 0.2
   - 0.0001
3. Click Calculate.
4. Observe the calculated interest.

**Actual Result:**

The system renders unformatted floating-point numbers containing extended decimal noise.

Example:

```text
0.30000000000000004
```

**Expected Result:**

The application should apply explicit currency/decimal rounding before presenting the result.

The supplied test notes identify approaches such as:

```javascript
value.toFixed(4)
```

or an appropriate Math.round() strategy.

The exact precision should match the application's intended financial display rules.

**Severity:** Medium — Degrades financial-interface accuracy and visual credibility.

**Priority:** P2 — Normal — Requires string formatting or decimal-rounding logic in the calculation module.

**Evidence:** BugEater challenge completion screen verifying Test Case 2 — Floating-point imprecision.

**TC-03 — Zero Amount Boundary Handling ($0)**

**User Perspective:**

As a borrower entering $0, submitting zero should gracefully handle the boundary calculation and output $0 interest without internal errors or unexpected NaN responses.

**Title:** [Validation / Boundary Defect] Zero amount input validation and zero-interest output handling

**Environment:**

- **OS:** macOS / Windows / Linux / Android
- **Browser/App:** Google Chrome / Modern Web Browser
- **Device:** Desktop / Mobile
- **Build / URL:** bugeater.web.app/exploratory/microloan-interest

**Steps to Reproduce:**

1. Navigate to the Micro-loan Interest challenge.
2. Enter 0 into the loan amount field.
3. Submit the calculation.

**Actual Result:**

The application evaluates $0 and handles the edge-case calculation of 0.1% of zero.

**Expected Result:**

The system should output $0 interest without runtime errors.

**Severity:** Low — Edge-case boundary testing.

**Priority:** P3 — Low — Sanity check for zero-value arithmetic handling.

**Evidence:** BugEater challenge completion screen verifying Test Case 3 — Zero amount.

**BUG-002 / TC-04 — Empty or Non-Numeric Input Validation**

**User Perspective:**

As a user who accidentally leaves the amount field blank or enters non-numeric text such as abc or $%#, submitting the form should immediately show a clear validation message rather than allowing an invalid calculation path.

**Title:** [Validation Defect] Empty or non-numeric input accepts invalid string payloads instead of enforcing numeric validation

**Environment:**

- **OS:** macOS / Windows / Linux / Android
- **Browser/App:** Google Chrome / Modern Web Browser
- **Device:** Desktop / Mobile
- **Build / URL:** bugeater.web.app/exploratory/microloan-interest

**Steps to Reproduce:**

1. Navigate to the Micro-loan Interest challenge.
2. Leave the amount field empty or enter non-numeric characters such as:
   - abc
   - $%#
3. Click Calculate.

**Actual Result:**

The form attempts calculation on empty or invalid string input without upfront field validation.

**Expected Result:**

The input should be validated before calculation and display a clear validation message such as:

```text
The amount field must contain a number.
```

The supplied test notes suggest enforcing an appropriate numeric input rule, for example:

```html
<input type="number">
```

with additional validation for empty or otherwise invalid values.

**Severity:** Medium — Breaks input handling and allows invalid payload processing.

**Priority:** P2 — Normal — Requires explicit numeric/input validation.

**Evidence:** BugEater challenge completion screen verifying Test Case 4 — Empty or non-numeric input.

---

#### 2. The Jetlag Bug Challenge

**Project Under Test**

| Field | Details |
| --- | --- |
| Target Application | bugeater.web.app |
| Challenge | Exploratory Testing Challenge: The Jetlag Bug |
| Module | Timezone Parsing & Task Scheduling Engine |
| URL | bugeater.web.app/exploratory/jetlag-bug |
| Primary Browser | Google Chrome / Modern Web Browser |
| Coverage | 5 test cases + 3 bugs |

**Test-Case Inventory**

| ID | Scenario | Category | Severity | Priority | Result |
| --- | --- | --- | --- | --- | --- |
| TC-01 | Empty required field validation | Validation | Low | P3 — Low | Verified |
| TC-02 | Date-time format validation | Validation | Low | P3 — Low | Verified |
| TC-03 | Positive UTC offset baseline (UTC+3) | Functional Baseline | Low | P3 — Low | Verified |
| TC-04 | European IANA timezone baseline (Europe/Paris) | Functional Baseline | Low | P3 — Low | Verified |
| TC-05 | Timezone selection parsing | UI / Functional | Low | P3 — Low | Verified |
| BUG-003 | Incorrect server offset applied to UTC | Timezone Engine | High | P1 — High | Defect |
| BUG-004 | UTC-5 offset sign inverted | Timezone Engine | High | P1 — High | Defect |
| BUG-005 | Asia/Tokyo mapped to UTC+8 instead of UTC+9 | Timezone Engine | Medium | P2 — Normal | Defect |

**TC-01 — Empty Required Field Validation**

**User Perspective:**

As a user attempting to schedule a task without selecting a timezone or entering a scheduled time, I expect clear validation preventing form submission so I know which required inputs are missing.

**Title:** [Validation] Enforce required validation when Timezone or Scheduled Time is empty

**Steps to Reproduce:**

1. Navigate to The Jetlag Bug challenge on BugEater.
2. Leave the Timezone or Scheduled Time field blank.
3. Click Schedule.

**Actual Result:**

The form evaluates the input and displays:

```text
Result: Invalid Input
```

**Expected Result:**

The form should prevent submission until both Timezone and Scheduled Time are populated.

**Severity:** Low — Validation baseline confirmation.

**Priority:** P3 — Low — Expected behavior verification.

**Evidence:** Refer to the consolidated evidence for the challenge.

**TC-02 — Date-Time Format Validation**

**User Perspective:**

As a user entering an improperly formatted timestamp, I expect the system to validate the required date-time format and reject malformed strings gracefully.

**Title:** [Validation] Validate scheduled time string against standard format (YYYY-MM-DD HH)

**Steps to Reproduce:**

1. Navigate to The Jetlag Bug challenge.
2. Enter a value that does not match YYYY-MM-DD HH:mm.
3. Click Schedule.

**Actual Result:**

The system flags the malformed entry with:

```text
Result: Invalid Input
```

**Expected Result:**

The application should strictly validate the scheduled-time value against:

```text
YYYY-MM-DD HH:mm
```

**Severity:** Low — Format validation baseline.

**Priority:** P3 — Low — Expected behavior verification.

**Evidence:** Refer to the consolidated evidence for the challenge.

**TC-03 — Positive UTC Offset Baseline (UTC+3)**

**User Perspective:**

As a user in a positive UTC-offset timezone such as UTC+3, scheduling a task should correctly apply the +3-hour offset without errors.

**Title:** [Functional Baseline] Task scheduled correctly using positive offset (UTC+3)

**Steps to Reproduce:**

1. Navigate to The Jetlag Bug challenge.
2. Select UTC+3 from the Timezone dropdown.
3. Enter a valid timestamp in YYYY-MM-DD HH:mm format.
4. Click Schedule.

**Actual Result:**

The task is successfully scheduled using the +3-hour offset.

**Expected Result:**

The scheduled time should shift +3 hours relative to the UTC base time.

**Severity:** Low — Functional baseline.

**Priority:** P3 — Low — Expected behavior verification.

**Evidence:** Refer to the consolidated evidence for the challenge.

**TC-04 — European IANA Timezone Baseline (Europe/Paris)**

**User Perspective:**

As a user selecting Europe/Paris, I expect the named timezone to map correctly to its regional offset rules and schedule the task without failure.

**Title:** [Functional Baseline] Task scheduled correctly using IANA timezone (Europe/Paris)

**Steps to Reproduce:**

1. Navigate to The Jetlag Bug.
2. Select Europe/Paris from the Timezone dropdown.
3. Enter a valid timestamp.
4. Click Schedule.

**Actual Result:**

The task is scheduled accurately using the Europe/Paris timezone rules.

**Expected Result:**

The system should apply the applicable Paris regional timezone rules correctly.

**Severity:** Low — Functional baseline.

**Priority:** P3 — Low — Expected behavior verification.

**Evidence:** Refer to the consolidated evidence for the challenge.

**TC-05 — Timezone Selection Parsing**

**User Perspective:**

As a user selecting an available timezone from the dropdown, the chosen option should be registered and used by the scheduling engine.

**Title:** [Functional Baseline] Timezone selector properly registers user dropdown choices

**Steps to Reproduce:**

1. Open the Timezone dropdown.
2. Select a valid option, such as:
   - UTC
   - UTC+3
   - UTC-5
   - Europe/Paris
   - Asia/Tokyo
3. Enter valid scheduled time.
4. Submit.

**Actual Result:**

The dropdown choice is correctly parsed and submitted to the backend engine.

**Expected Result:**

The system should register the selected timezone state for downstream calculations.

**Severity:** Low — UI/functional verification.

**Priority:** P3 — Low — Expected behavior verification.

**Evidence:** Refer to the consolidated evidence for the challenge.

**BUG-003 — Incorrect Server Offset Applied to UTC**

**User Perspective:**

As a user scheduling a task using standard UTC, I expect my scheduled time to be processed exactly as requested. An unexpected one-hour shift can cause missed deadlines or delayed execution.

**Title:** [Timezone Engine Defect] UTC timezone selection causes task to be scheduled 1 hour later than requested

**Steps to Reproduce:**

1. Navigate to The Jetlag Bug.
2. Select UTC from the Timezone dropdown.
3. Enter a valid scheduled time in YYYY-MM-DD HH:mm, for example: 2026-10-07 18:00
4. Click Schedule.

**Actual Result:**

The server processes the request with an incorrect offset:

```text
Scheduled 1 hour late — UTC offset applied incorrectly.
```

**Expected Result:**

Tasks scheduled under UTC should use a 0-hour offset and match the requested time exactly.

**Severity:** High — Directly corrupts scheduling accuracy for UTC users.

**Priority:** P1 — High — Requires immediate investigation of backend timezone parsing.

**Evidence:** Refer to the consolidated evidence for the challenge.

**BUG-004 — Server Inverts Offset Sign for UTC-5**

**User Perspective:**

As a user in a negative-offset timezone such as UTC-5, scheduling a task should preserve the correct local-time relationship. Treating UTC-5 as UTC+5 creates a 10-hour scheduling drift.

**Title:** [Timezone Engine Defect] UTC-5 offset sign is inverted by backend server and processed as UTC+5

**Steps to Reproduce:**

1. Navigate to The Jetlag Bug.
2. Select UTC-5 from the Timezone dropdown.
3. Enter a valid scheduled time in YYYY-MM-DD HH:mm.
4. Click Schedule.

**Actual Result:**

The server inverts the negative offset calculation and evaluates the task as though it were in UTC+5 rather than UTC-5.

**Expected Result:**

The server should apply the UTC-5 offset correctly, maintaining the requested local-time alignment.

**Severity:** High — Inverts negative timezone offsets and creates multi-hour schedule drift.

**Priority:** P1 — High — Backend arithmetic/parsing defect.

**Evidence:** Refer to the consolidated evidence for the challenge.

**BUG-005 — Asia/Tokyo Processed with Incorrect UTC Offset**

**User Perspective:**

As a user selecting Asia/Tokyo (JST), I expect the task to use the correct Japan Standard Time offset of UTC+9. An incorrect UTC+8 mapping causes tasks to be scheduled one hour early.

**Title:** [Timezone Engine Defect] Asia/Tokyo timezone mapped to UTC+8 instead of correct UTC+9 offset

**Steps to Reproduce:**

1. Navigate to The Jetlag Bug.
2. Select Asia/Tokyo from the Timezone dropdown.
3. Enter a valid scheduled time.
4. Click Schedule.

**Actual Result:**

The system reports that Asia/Tokyo is interpreted as UTC+8 instead of UTC+9.

**Expected Result:**

Asia/Tokyo should be mapped to the correct timezone rules and use UTC+9 for the tested scenario.

**Severity:** Medium — Affects regional users relying on the named IANA timezone.

**Priority:** P2 — Normal — Requires correction of timezone mapping/configuration.

**Evidence:** Refer to the consolidated evidence for the challenge.

---

#### Recommended Validation After Fix

**Micro-Loan Interest**

**BUG-001 — Precision**

Retest:

- 0.1
- 0.2
- 0.0001
- Other decimal values
- Standard positive integers

Confirm that no binary floating-point artifacts are visible and that the application's intended decimal precision is consistently applied.

**BUG-002 — Validation**

Retest:

- Blank input
- Alphabetic input such as abc
- Symbol-only input such as $%#
- Mixed invalid strings
- Valid numeric values

Confirm that invalid input is rejected before calculation and that users receive a clear error message.

**Boundary / Baseline Regression**

Confirm:

- 0 → $0 interest
- 100 → 0.1% interest

without runtime errors or precision artifacts.

**The Jetlag Bug**

Retest:

- Empty timezone / scheduled time.
- Invalid date-time formats.
- UTC+3.
- Europe/Paris.
- UTC.
- UTC-5.
- Asia/Tokyo.
- Dropdown timezone parsing.

Pay particular attention to offset direction and exact scheduling output.

#### Evidence & Artifacts

The supplied testing material references evidence screenshots and a consolidated recording.

**Video Recording — All 5 Test Cases & 3 Bugs:** [Loom recording](https://www.loom.com/share/fc150ecbdad64543b4bb63be2658af8a)

#### Project Structure

```text
Day-37-bugeater.web.app/
├── README.md
└── Defects_&_Bugreports/
    ├── Screenshots/
    │   └── 01-Micro-Loan-Interest.png
    ├── 01-Micro-Loan-Interest.md
    └── 02-The-Jetlag-Bug.md
```

#### Conclusion

Day 37 covers two BugEater exploratory-testing challenges.

The Micro-Loan Interest challenge confirms nominal and zero-value calculations while exposing two areas for improvement: raw floating-point precision artifacts and insufficient validation for empty/non-numeric input.

The Jetlag Bug challenge confirms baseline validation and timezone-selection behavior while identifying three timezone-engine defects: an incorrect UTC offset, an inverted UTC-5 sign, and an incorrect Asia/Tokyo offset mapping.

The recommended next step is regression testing after fixes, using the same baseline, boundary, invalid-input, and timezone-transition scenarios documented above.

---

### 🗓️ October 8, 2026 — Day 38: Ministry of Testing Exploratory Testing (/Day-38-Ministry-Of-Testing)

#### Overview

**Target:** [Ministry of Testing](https://www.ministryoftesting.com/)

**Focus:** Network traffic, especially Fetch/XHR request payloads and response status codes/bodies

**Session date:** October 8, 2026

#### Outcome

The public homepage's observed Fetch/XHR traffic did not provide evidence of a product API defect. The application search page was also checked with the query `testing`; it returned HTTP 200 and displayed “Must be logged in to use global search.” That is consistent with an access gate, and no requirement was available to establish that it is defective.

The associated report preserves the request/response evidence and records why this session did **not** confirm a bug. It does not label expected access control or unrelated third-party telemetry as a Ministry of Testing defect. An authenticated session or a reproducible product API failure is needed to file a substantiated defect with a JSON API response.

#### Contents

- [Network finding and evidence](Module-3-Deliberately-Buggy%20Sites_Exploratory-Testing/Day-38-Ministry-Of-Testing/Defects_&_Bugreports/01-API-Log-Defect.md)

#### Reproducing the observation

1. Open the public homepage and inspect Fetch/XHR traffic in the browser Network panel.
2. Submit the search query `testing`.
3. Observe the search response and the page message about needing to be logged in.

#### Network Finding and Evidence

##### Session

| Field | Value |
| --- | --- |
| Application | Ministry of Testing — `https://www.ministryoftesting.com/` |
| Date | October 8, 2026 |
| Browser | Chromium-based browser in VS Code |
| Test data | Search term `testing` |
| Finding status | Inconclusive; no product API defect confirmed |

##### Request and response evidence

###### Search request (Fetch)

The following same-origin Fetch request was made without signing in. No request body was sent.

```http
GET https://www.ministryoftesting.com/search?q=testing
Accept: text/html
```

```http
HTTP/1.1 200
Content-Type: text/html; charset=utf-8
```

Response body excerpt:

```html
<!DOCTYPE html>
<html lang="en">
<head>
<title>A global community of practice for software testing, quality engineering, QA and | MoTaverse</title>
```

Rendered response content:

```text
Search
Must be logged in to use global search
```

###### Public homepage Fetch/XHR traffic

The homepage reload produced these Fetch/XHR exchanges (no application API failure was observed):

| Method | Endpoint | Status | Payload / response |
| --- | --- | ---: | --- |
| `GET` | `https://cdn.getgist.com/widget/settings/project_zui7pcpe.txt` | `200` | Widget settings request; no request payload |
| `POST` | `https://events.getgist.com/event_data` | `200` | Third-party page-view telemetry; not an application API |
| `GET` | `https://cdn.getgist.com/translation_files/en_translation.json` | `200` | Translation resource; no request payload |

The telemetry request contains third-party tracking identifiers and is intentionally not reproduced here. None of these responses establishes a defect in Ministry of Testing's product API.

##### Actual vs. expected

**Actual:** The unauthenticated search request returned an HTML page with HTTP 200. The page told the user that login is required to use global search.

**Expected:** No API contract or product requirement was available to determine whether this route should return an HTML access-gate page, redirect to sign-in, or respond with an authorization status. Since the observed result may be intentional access control, no incorrect expected response can be asserted.

##### Severity / priority

**Not assigned.** Severity and priority apply to a confirmed defect; this evidence does not confirm one.

##### Follow-up needed to file a defect

Repeat the session with an authorized test account or provide a reproducible application API failure and its captured request/response. Compare that evidence with the intended API contract before assigning severity and priority.

---

### 🗓️ October 9, 2026 — Day 39: Evil Tester Console Driver Game (/Day-39-EvilTester)

#### Overview

This session documents exploratory testing performed on Evil Tester's practice platform, specifically focusing on the **Console Driver** game. Testing evaluated the core JavaScript game loop, console UI rendering, event handling, and network requests via DevTools and HAR exports.

- **Target Application:** `testpages.eviltester.com`
- **Challenge:** Console Driver (`/fun-and-games/console-driver/`)
- **Primary Browser:** Google Chrome / Brave Browser
- **Session Focus:** DevTools Console Execution, Game Loop Validation & HAR Network Traffic Analysis

#### Summary of Defects & Findings

| Bug ID | Title | Severity | Priority | Status |
| --- | --- | --- | --- | --- |
| BUG-001 | Console Driver game fails to render or execute game state in DevTools console | High | P1 — High | Defect Logged |
| BUG-002 | Console output formatting continuously expands canvas/text state without boundary clearing | Medium | P2 — Normal | Defect Logged |

#### Key Defect Highlights

**1. Console Driver Game Execution Failure (`01-Execution Failure.md`)**

- **Issue:** Pressing Space as instructed fails to initialize the active game loop or render track output (`V`, `*`, `X`) inside the browser DevTools console panel.
- **Network Observation:** Page assets return HTTP 304 Not Modified / HTTP 200 OK, confirming that network delivery is functional, but the client-side JavaScript execution or console output binding fails.
- **Evidence:** Captured in raw `01-Execution Failure.har` log.

**2. Console Rendering Expansion Issue (`02-Continuously Expands.md`)**

- **Issue:** When console logs trigger, output buffers repeatedly expand without clearing previous game state lines.
- **Evidence:** Documented under `Evidence/02-Continuously Expands`.

#### Reproduction Commands (cURL Baseline)

```bash
curl --url 'https://testpages.eviltester.com/fun-and-games/console-driver/' \
  -H 'accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'
```

#### Project Structure

```text
Day-39-EvilTester/
├── README.md
├── Defects_&_Bugreports/
│   ├── 01-Execution Failure.md
│   └── 02-Continuously Expands.md
└── Evidence/
    ├── 01-Execution Failure.har
    └── 02-Continuously Expands
```

#### Conclusion

Day 39 exploratory testing on Evil Tester identified key execution failures in the Console Driver game logic. Despite valid static asset responses over HTTP, the client-side rendering script fails to execute in modern browser console environments.

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
├── day-26/
│   ├── Collections/
│   │   └── day-26-rick-and-morty-graphql.postman_collection.json
│   ├── Environment/
│   │   └── day 26 rick and morty graphql.postman_environment.json
│   ├── HTML Report/
│   │   └── Day-26-Rick-and-Morty-GraphQL-Test-Report.html
│   └── README.md
│
├── day-29-parabank-devtools/
│   ├── dom-inspection
│   ├── network/
│   │   └── parabank-admin-network.har
│   ├── performance/
│   │   └── parabank-performance.json
│   └── README.md
│
└── day-30-randomuser-devtools/
    ├── console-scripts/
    │   └── fetch-user-table.js
    ├── network-overrides/
    │   └── mocked-user.json
    └── README.md
```

## Module-3-Deliberately-Buggy Sites_Exploratory-Testing/

```text
Module-3-Deliberately-Buggy Sites_Exploratory-Testing/

├── Day-31-AcademyBugs-e-commerce/
│   ├── Defects_&_Bugreports/
│   │   ├── Screenshots/
│   │   │   └── 03-responsive-375px.png
│   │   ├── 01-Duplicate-items.md
│   │   ├── 02-Intrusive-Pop-Up-Modal-Un-dismissable-via-Close-Icon-or-Form-Submission.md
│   │   ├── 03-responsive-375px.md
│   │   └── 04-Error-Handling-&-User-Feedback.md
│   └── README.md
│
├── Day-32-Basic-calculator/
│   ├── Defects_&_Bugreports/
│   │   ├── 01-Outputting Incorrect Calculation...md
│   │   ├── 02-Incomplete Field Validation.md
│   │   └── Screenshots/
│   │       ├── 01-Outputting Incorrect Calculation...
│   │       └── 02-Incomplete Field Validation
│   └── README.md
│
├── Day-33-Parking-Tax/
│   ├── Defects_&_Bugreports/
│   │   ├── 01-Economy-Lot-Exceeds-Daily-Maximum.md
│   │   ├── 02-Departure-Before-Entry-Accepted.md
│   │   ├── 03-Parking-Lot-Selection-Resets-After-Calculation.md
│   │   └── 04-Blank-Dates-Return-Empty-Page.md
│   └── README.md
│
├── Day-34-Qa_practice-Bug-challenge/
│   ├── Defects_&_Bugreports/
│   │   ├── Screenshots/
│   │   │   ├── 01-Checkbox Permanently Disabled...
│   │   │   ├── 04-Persistent Backend Request Failure...
│   │   │   └── 04{2}-Persistent Backend Request...
│   │   ├── 01-Checkbox Permanently Disabled....
│   │   ├── 02&03-Unauthorized Form Submission...
│   │   └── 04-Persistent Backend Request Failure...
│   └── README.md
│
├── Day-35-Sweet_Shop/
│   ├── Defects_&_Bugreports/
│   │   ├── Evidence/
│   │   │   ├── 01-Wham-Bars-Image-DevTools-Evidence.md
│   │   │   └── 01-Wham-Bars-Image-Broken.jpg
│   │   └── 01-Wham-Bars-Product-Image-Fails-to-Load.md
│   └── README.md
│
├── Day-36-TodoList/
│   ├── Defects_&_Bugreports/
│   │   ├── Evidence/
│   │   │   ├── 01-Counter-Miscalculates-1.png
│   │   │   ├── 01-Counter-Miscalculates-2.png
│   │   │   ├── 02-API-Endpoints-Return-404-Not-Found.png
│   │   │   └── 02-API-Endpoints-Return-404-Not-Found.md
│   │   ├── 01-Active-Items-Counter-Miscalculates-Remaining-Tasks.md
│   │   └── 02-Backend-API-Endpoints-Return-404-Not-Found.md
│   └── README.md
│
├── Day-37-bugeater.web.app/
│   ├── Defects_&_Bugreports/
│   │   ├── Screenshots/
│   │   │   └── 01-Micro-Loan-Interest.png
│   │   ├── 01-Micro-Loan-Interest.md
│   │   └── 02-The-Jetlag-Bug.md
│   └── README.md
│
├── Day-38-Ministry-Of-Testing/
│   ├── Defects_&_Bugreports/
│   │   └── 01-API-Log-Defect.md
│   └── README.md
│
└── Day-39-EvilTester/
    ├── Defects_&_Bugreports/
    │   ├── 01-Execution Failure.md
    │   └── 02-Continuously Expands.md
    ├── Evidence/
    │   ├── 01-Execution Failure.har
    │   └── 02-Continuously Expands
    └── README.md
```

---

# 🏁 Current Portfolio Milestone

## Module 1 — UI Automation

**Status:** ✅ Complete

**Days:** 01–16

**Primary Technology:** Playwright + TypeScript

## Module 2 — API Testing & DevTools

**API Testing:** ✅ Complete through Day 26

**DevTools:** ✅ Complete

**Latest DevTools Milestone:** Day 30 — Random User DevTools

**Overall Module 2:** ✅ Complete

Day 26 represents the final planned API-testing exercise, expanding the portfolio from REST API testing into GraphQL testing with nested data, multiple-record queries, pagination, environment variables, and automated assertions.

Day 27 expanded the DevTools track through SWAPI browser Console inspection, Network/HAR analysis, XHR breakpoint investigation, storage inspection, and Performance evidence.

Day 29 expanded the dedicated DevTools track through ParaBank DOM / Elements inspection, Network investigation, HAR 1.2 capture, and Web Performance analysis, while keeping DOM, Network, HAR, and Performance evidence separated by purpose.

Day 30 closed the DevTools track and Module 2 through Random User Console fetch scripting and Network Local Overrides for controlled response manipulation.

## Module 3 — Deliberately Buggy Sites / Exploratory Testing

**Status:** 🔄 In Progress

**Latest Milestone:** Day 39 — Evil Tester Console Driver exploratory testing

**Primary Approach:** Charter-based and Session-Based Test Management (SBTM) exploratory testing

Day 31 started Module 3 with four documented defects (BUG-01 to BUG-04) and three planned exploratory charters recorded as passed.

Day 32 continued Module 3 with SBTM on the TestSheepNZ Basic Calculator, documenting two defects (BUG-01 and BUG-02) across Builds 2 and 3.

Day 33 continued Module 3 with exploratory testing of the Parking Cost Calculator, documenting four defects across rate-cap behavior, date/time validation, post-calculation state, and empty-input handling.

Day 34 continued Module 3 with the QA Practice Bug Challenge, documenting four defects across registration form state, validation logic, boundary handling, and shopping-cart product loading.

Day 35 continued Module 3 with exploratory testing of the Sweet Shop storefront, documenting one broken Wham Bars product image confirmed through DevTools. See the [Day 35 report](Module-3-Deliberately-Buggy%20Sites_Exploratory-Testing/Day-35-Sweet_Shop/README.md).

Day 36 continued Module 3 with exploratory testing of the JamesM To-Do List, documenting two defects: an off-by-one "items left" counter (UI state logic) and Fetch/XHR requests to learn.json and api returning HTTP 404 (backend/API routing), investigated through Chrome DevTools Network. See the [Day 36 report](Module-3-Deliberately-Buggy%20Sites_Exploratory-Testing/Day-36-TodoList/README.md).

Day 37 continued Module 3 with two BugEater exploratory challenges. Micro-Loan Interest documented two defects (floating-point precision noise and missing empty/non-numeric input validation), and The Jetlag Bug documented three timezone-engine defects (incorrect UTC offset, inverted UTC-5 sign, and Asia/Tokyo mapped to UTC+8). See the [Day 37 report](Module-3-Deliberately-Buggy%20Sites_Exploratory-Testing/Day-37-bugeater.web.app/README.md).

Day 38 continued Module 3 with exploratory testing of Ministry of Testing Fetch/XHR traffic. The unauthenticated search returned HTTP 200 and displayed a login-required message; no product API defect was confirmed. See the [Day 38 report](Module-3-Deliberately-Buggy%20Sites_Exploratory-Testing/Day-38-Ministry-Of-Testing/README.md).

Day 39 continued Module 3 with exploratory testing of the Evil Tester Console Driver game, documenting two defects: the game failing to initialize or render track output in the DevTools console, and console output continuously expanding without clearing previous state. HTTP asset delivery was functional, so the failures were isolated to client-side execution. See the [Day 39 report](Module-3-Deliberately-Buggy%20Sites_Exploratory-Testing/Day-39-EvilTester/README.md).

---

# 🚀 Current Progress

**Completed Days:** 01–27, Day 29, Day 30, Day 31, Day 32, Day 33, Day 34, Day 35, Day 36, Day 37, Day 38, Day 39

**Completed Modules:** Module 1, Module 2

**Completed API Track:** Module 2 — API Testing

**Completed DevTools Track:** Module 2 — DevTools

**Latest DevTools Milestone:** Day 30 — Random User DevTools

**Latest Milestone:** Day 39 — Evil Tester Console Driver exploratory testing

**Next Milestone:** Module 3 — Buggy Sites / Exploratory Testing