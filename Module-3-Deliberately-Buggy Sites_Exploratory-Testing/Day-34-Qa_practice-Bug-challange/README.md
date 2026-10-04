Day 34 — QA Practice Bug Challenge

Overview

Day 34 focuses on deliberately buggy web application testing using the QA Practice application.

The session focused on identifying functional, UI/form-state, validation, boundary, and backend/integration defects through direct application behavior and DevTools investigation.

The documented findings cover registration workflow failures and a persistent shopping-cart product-loading failure.

Bugs Discovered

#

Bug

Area

Severity

Priority

BUG-01

"Terms and Conditions" checkbox permanently disabled

UI / Form State

Critical

P1 — Urgent

BUG-02

Registration submits without Terms & Conditions agreement

Validation / Logic

High

P1 — Urgent

BUG-03

Negative numeric values accepted without validation feedback

Validation / Boundary

Medium

P2 — Normal

BUG-04

Shopping cart fails to load products

API / Integration

High

P1 — Urgent

BUG-01 — "Terms and Conditions" Checkbox Permanently Disabled

Title: [UI / Form Defect] "I agree with the terms and conditions" checkbox is permanently disabled, preventing form submission

User Perspective

As a user registering for an account, the "I agree with the terms and conditions" checkbox must be interactable so that the terms can be accepted.

When the checkbox is permanently disabled without a clear unlock condition, users are blocked from completing registration.

Environment

OS: macOS / Windows / Linux / Android

Browser/App: Google Chrome / Modern Web Browser

Device: Desktop / Mobile

Build/URL: qa-practice.razvanvancea.ro/bugs-form.html

Steps to Reproduce

Navigate to the registration form page.

Fill out the required registration fields, such as Phone number, Country, Email address, and Password.

Attempt to click/check the "I agree with the terms and conditions" checkbox above the Register button.

Inspect the checkbox using the DevTools Console.

Evaluate:

document.querySelector('input[type="checkbox"]').disabled

Actual Result

The checkbox is visually greyed out and non-interactable.

The DevTools Console confirms that the checkbox's .disabled property returns true.

This prevents the user from accepting the terms and completing the intended registration workflow.

Expected Result

The Terms and Conditions checkbox should be enabled by default or become enabled when any legitimate prerequisite condition is satisfied, allowing the user to toggle agreement and continue registration.

Severity

Critical — Completely blocks the registration workflow and user onboarding.

Priority

P1 — Urgent

Evidence

Screenshot capturing the registration form together with DevTools Console output verifying that the checkbox .disabled property returns true.

BUG-02 — Terms & Conditions Checkbox Bypass Allows Unauthorized Form Submission

Title: [Validation / Logic Defect] Registration form submits successfully without requiring agreement to "Terms and Conditions"

User Perspective

As a user registering for an account, mandatory Terms and Conditions agreement should be enforced before the registration form can be submitted.

Environment

OS: macOS / Windows / Linux / Android

Browser/App: Google Chrome / Modern Web Browser

Device: Desktop / Mobile

Build/URL: qa-practice.razvanvancea.ro/bugs-form.html

Steps to Reproduce

Navigate to the registration form page.

Populate all required text fields, such as Phone number, Country, Email, and Password.

Leave the "I agree with the terms and conditions" checkbox unchecked or unselected.

Click the Register button.

Observe the form submission behavior and response.

Actual Result

The form bypasses the expected agreement validation and accepts the registration attempt without enforcing Terms and Conditions agreement.

Expected Result

Form submission should be blocked until the Terms and Conditions checkbox is explicitly checked.

The application should provide appropriate validation feedback, such as an inline message explaining that the user must accept the Terms and Conditions before proceeding.

Severity

High — Creates a serious validation and business-logic defect because registration can proceed without the expected agreement.

Priority

P1 — Urgent

Evidence

Recorded video evidence demonstrating form submission while the Terms and Conditions checkbox remains unchecked.

BUG-03 — Negative Numeric Inputs Accepted Without Validation

Title: [Validation / Boundary Defect] Registration fields accept negative numeric values without triggering validation warning messages

User Perspective

As a software tester evaluating registration-form boundaries and data validation, negative numeric values should be rejected when a field expects a positive value.

Environment

OS: macOS / Windows / Linux / Android

Browser/App: Google Chrome / Modern Web Browser

Device: Desktop / Mobile

Build/URL: qa-practice.razvanvancea.ro/bugs-form.html

Steps to Reproduce

Navigate to the registration form page.

Enter negative numeric values such as -1 or -10 into fields expecting positive integers, such as Phone number / Age / Amount.

Fill out the remaining required fields.

Click Register.

Observe the validation state and application response.

Actual Result

The application accepts negative input values without displaying validation warnings or error prompts.

Expected Result

Fields that expect positive numeric values should reject negative numbers and provide clear validation feedback.

The invalid value should prevent successful form submission until it is corrected.

Severity

Medium — Can compromise data integrity and create downstream processing problems.

Priority

P2 — Normal

Evidence

Recorded video evidence demonstrating the negative-value input behavior.

BUG-04 — Persistent Backend Request Failure Prevents Shopping Cart Product Loading

Title: [API / Integration Defect] Shopping cart fails to load products with error "Failed to load products. Please try again later" across stable network environments

User Perspective

As a user navigating to the e-commerce shopping cart, attempting to view cart items should display the products that have been added.

Instead, the shopping cart displays an inline red error:

"Failed to load products. Please try again later."

Testing across multiple independent networks indicates that the issue is not caused by a local connection drop or client-side Wi-Fi problem.

Environment

OS: macOS / Windows / Linux / Android

Browser/App: Google Chrome / Modern Web Browser

Device: Desktop / Mobile

Build/URL: QA Practice E-Commerce Module — Ecommerce - Login, Add to Cart, Submit order, Logout

Steps to Reproduce

Navigate to the QA Practice e-commerce module.

Access the SHOPPING CART section.

Ensure active internet connectivity.

Observe the content area beneath the ITEM, PRICE, and QUANTITY headers.

Repeat the observation across independent network environments if necessary.

Actual Result

The shopping cart fails to fetch product data from the server.

A red error message is displayed:

"Failed to load products. Please try again later."

The cart remains empty and displays a Total of $0.

Expected Result

The shopping cart should successfully retrieve the required product/cart data from the backend, process the response, and render the populated line items together with the correct total price.

Severity

High — Blocks the core shopping-cart and checkout pipeline, preventing users from reviewing cart items or proceeding with the purchase workflow.

Priority

P1 — Urgent

Investigation Area

The observed behavior indicates a persistent backend/integration failure. Possible areas for investigation include:

Backend API response

Server-side application errors

Database connectivity

API request/response handling

Cross-origin resource sharing (CORS)

Network response status and payload

These are investigation areas rather than confirmed root causes.

Evidence

Screenshot capturing the SHOPPING CART section with the red inline error message and the empty cart state.

Testing Focus

Day 34 concentrated on several important QA areas:

UI & Form State

Checking whether required controls are actually interactable

Inspecting disabled DOM properties

Verifying form controls against their expected workflow state

Form Validation & Business Logic

Testing whether mandatory Terms and Conditions agreement is enforced

Checking whether form submission can bypass expected validation

Verifying that invalid values are rejected before submission

Boundary Testing

Testing negative numeric values

Observing whether invalid boundary values trigger appropriate validation feedback

API & Integration Testing

Investigating persistent product-loading failures

Verifying behavior across independent network environments

Observing user-facing API failure feedback in the shopping-cart workflow

Evidence

The Defects_&_Bugreports directory contains the documented defects and supporting evidence.

Screenshots

Screenshots/
├── 01-Checkbox Permanently Disabled...
├── 04-Persistent Backend Request Failure...
└── 04{2}-Persistent Backend Request...

Defect Reports

Defects_&_Bugreports/
├── 01-Checkbox Permanently Disabled....
├── 02&03-Unauthorized Form Submission...
├── 04-Persistent Backend Request Failure...
└── Screenshots/

The exact filenames may vary from the shortened names displayed in the project explorer.

Folder Structure

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

Day 34 Outcome

Day 34 produced four documented defects across registration and e-commerce workflows:

BUG-01 — Terms and Conditions checkbox permanently disabled

BUG-02 — Registration submission bypasses Terms and Conditions agreement

BUG-03 — Negative numeric inputs accepted without validation feedback

BUG-04 — Persistent backend request failure prevents shopping-cart product loading

The session demonstrates practical QA skills in:

Form-state investigation

DevTools-based DOM inspection

Functional and business-rule validation

Boundary-value testing

Negative-input testing

API/integration failure investigation

Cross-network issue verification

Severity and priority classification

Evidence-based defect reporting

Key QA Takeaway

Day 34 demonstrates that a bug can exist at several layers of the same workflow: UI state, client-side validation, business logic, and backend integration.

Rather than assuming the root cause, the investigation records the observed behavior and supporting evidence, while backend/API possibilities remain investigation areas until directly verified.