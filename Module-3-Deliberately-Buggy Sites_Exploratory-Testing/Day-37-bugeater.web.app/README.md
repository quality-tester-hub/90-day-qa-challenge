Day-37-Bugeater-README.md


Day 37 — BugEater Exploratory Testing
Overview
This project documents exploratory testing performed against BugEater's web-based challenges, covering:

Micro-Loan Interest — financial calculation, precision, boundary-value, and input-validation testing.

The Jetlag Bug — timezone parsing and task-scheduling validation.

1. Micro-Loan Interest Calculation Defects
Project Under Test
Field	Details
Target Application	bugeater.web.app
Challenge	Exploratory Testing Challenge: Micro-loan Interest
Module	Micro-interest calculation engine
Rate	0.1% per period
URL	bugeater.web.app/exploratory/microloan-interest
Primary Browser	Google Chrome / Modern Web Browser
Coverage	4 test cases
Test-Case Inventory
ID	Scenario	Category	Severity	Priority	Result
TC-01	Clean nominal calculation	Functional Baseline	Low	P3 — Low	Verified
TC-02 / BUG-001	Floating-point imprecision	Calculation / Precision	Medium	P2 — Normal	Defect
TC-03	Zero amount boundary	Validation / Boundary	Low	P3 — Low	Verified
TC-04 / BUG-002	Empty / non-numeric input	Validation	Medium	P2 — Normal	Defect
TC-01 — Nominal Clean Calculation Baseline
User Perspective
As a user entering a standard positive integer such as $1000, the calculated micro-interest should produce the expected decimal result without noise or miscalculation.

Title
[Functional Baseline] Nominal micro-interest calculation for standard integer inputs

Environment
OS: macOS / Windows / Linux / Android

Browser/App: Google Chrome / Modern Web Browser

Device: Desktop / Mobile

Build / URL: bugeater.web.app/exploratory/microloan-interest

Steps to Reproduce
Navigate to bugeater.web.app/exploratory/microloan-interest.

Enter a standard positive integer amount, for example 100.

Click Calculate.

Actual Result
The calculator computes the baseline nominal 0.1% rate accurately.

100 × 0.001 = 0.1
Expected Result
The output should match the expected mathematical result:

$100 → $0.10 interest
Severity
Low — Functional benchmark validation.

Priority
P3 — Low — Baseline happy-path confirmation.

Evidence
BugEater challenge completion screen verifying Test Case 1 — Clean calculation.

BUG-001 / TC-02 — Floating-Point Imprecision / Binary Rounding Noise
User Perspective
As a user calculating loan interest, entering certain floating-point loan amounts should not display raw binary floating-point artifacts such as 0.00010000000000000002 instead of 0.0001. Such output damages visual polish and user trust in financial calculations.

Title
[Calculation / Precision Defect] Micro-loan interest calculation outputs raw floating-point binary rounding noise

Environment
OS: macOS / Windows / Linux / Android

Browser/App: Google Chrome / Modern Web Browser

Device: Desktop / Mobile

Build / URL: bugeater.web.app/exploratory/microloan-interest

Steps to Reproduce
Navigate to the Micro-loan Interest challenge on BugEater.

Enter a floating-point amount that can expose JavaScript binary-fraction representation quirks, such as:

0.1

0.2

0.0001

Click Calculate.

Observe the calculated interest.

Actual Result
The system renders unformatted floating-point numbers containing extended decimal noise.

Example:

0.30000000000000004
Expected Result
The application should apply explicit currency/decimal rounding before presenting the result.

The supplied test notes identify approaches such as:

value.toFixed(4)
or an appropriate Math.round() strategy.

The exact precision should match the application's intended financial display rules.

Severity
Medium — Degrades financial-interface accuracy and visual credibility.

Priority
P2 — Normal — Requires string formatting or decimal-rounding logic in the calculation module.

Evidence
BugEater challenge completion screen verifying Test Case 2 — Floating-point imprecision.

TC-03 — Zero Amount Boundary Handling ($0)
User Perspective
As a borrower entering $0, submitting zero should gracefully handle the boundary calculation and output $0 interest without internal errors or unexpected NaN responses.

Title
[Validation / Boundary Defect] Zero amount input validation and zero-interest output handling

Environment
OS: macOS / Windows / Linux / Android

Browser/App: Google Chrome / Modern Web Browser

Device: Desktop / Mobile

Build / URL: bugeater.web.app/exploratory/microloan-interest

Steps to Reproduce
Navigate to the Micro-loan Interest challenge.

Enter 0 into the loan amount field.

Submit the calculation.

Actual Result
The application evaluates $0 and handles the edge-case calculation of 0.1% of zero.

Expected Result
The system should output:

$0 interest
without runtime errors.

Severity
Low — Edge-case boundary testing.

Priority
P3 — Low — Sanity check for zero-value arithmetic handling.

Evidence
BugEater challenge completion screen verifying Test Case 3 — Zero amount.

BUG-002 / TC-04 — Empty or Non-Numeric Input Validation
User Perspective
As a user who accidentally leaves the amount field blank or enters non-numeric text such as abc or $%#, submitting the form should immediately show a clear validation message rather than allowing an invalid calculation path.

Title
[Validation Defect] Empty or non-numeric input accepts invalid string payloads instead of enforcing numeric validation

Environment
OS: macOS / Windows / Linux / Android

Browser/App: Google Chrome / Modern Web Browser

Device: Desktop / Mobile

Build / URL: bugeater.web.app/exploratory/microloan-interest

Steps to Reproduce
Navigate to the Micro-loan Interest challenge.

Leave the amount field empty or enter non-numeric characters such as:

abc

$%#

Click Calculate.

Actual Result
The form attempts calculation on empty or invalid string input without upfront field validation.

Expected Result
The input should be validated before calculation and display a clear validation message such as:

The amount field must contain a number.

The supplied test notes suggest enforcing an appropriate numeric input rule, for example:

<input type="number">
with additional validation for empty or otherwise invalid values.

Severity
Medium — Breaks input handling and allows invalid payload processing.

Priority
P2 — Normal — Requires explicit numeric/input validation.

Evidence
BugEater challenge completion screen verifying Test Case 4 — Empty or non-numeric input.

2. The Jetlag Bug Challenge
Project Under Test
Field	Details
Target Application	bugeater.web.app
Challenge	Exploratory Testing Challenge: The Jetlag Bug
Module	Timezone Parsing & Task Scheduling Engine
URL	bugeater.web.app/exploratory/jetlag-bug
Primary Browser	Google Chrome / Modern Web Browser
Coverage	5 test cases + 3 bugs
Test-Case Inventory
ID	Scenario	Category	Severity	Priority	Result
TC-01	Empty required field validation	Validation	Low	P3 — Low	Verified
TC-02	Date-time format validation	Validation	Low	P3 — Low	Verified
TC-03	Positive UTC offset baseline (UTC+3)	Functional Baseline	Low	P3 — Low	Verified
TC-04	European IANA timezone baseline (Europe/Paris)	Functional Baseline	Low	P3 — Low	Verified
TC-05	Timezone selection parsing	UI / Functional	Low	P3 — Low	Verified
BUG-003	Incorrect server offset applied to UTC	Timezone Engine	High	P1 — High	Defect
BUG-004	UTC-5 offset sign inverted	Timezone Engine	High	P1 — High	Defect
BUG-005	Asia/Tokyo mapped to UTC+8 instead of UTC+9	Timezone Engine	Medium	P2 — Normal	Defect
TC-01 — Empty Required Field Validation
User Perspective
As a user attempting to schedule a task without selecting a timezone or entering a scheduled time, I expect clear validation preventing form submission so I know which required inputs are missing.

Title
[Validation] Enforce required validation when Timezone or Scheduled Time is empty

Steps to Reproduce
Navigate to The Jetlag Bug challenge on BugEater.

Leave the Timezone or Scheduled Time field blank.

Click Schedule.

Actual Result
The form evaluates the input and displays:

Result: Invalid Input
Expected Result
The form should prevent submission until both Timezone and Scheduled Time are populated.

Severity / Priority
Severity: Low — Validation baseline confirmation.

Priority: P3 — Low — Expected behavior verification.

Evidence
Refer to the consolidated evidence for the challenge.

TC-02 — Date-Time Format Validation
User Perspective
As a user entering an improperly formatted timestamp, I expect the system to validate the required date-time format and reject malformed strings gracefully.

Title
[Validation] Validate scheduled time string against standard format (YYYY-MM-DD HH)

Steps to Reproduce
Navigate to The Jetlag Bug challenge.

Enter a value that does not match YYYY-MM-DD HH:mm.

Click Schedule.

Actual Result
The system flags the malformed entry with:

Result: Invalid Input
Expected Result
The application should strictly validate the scheduled-time value against:

YYYY-MM-DD HH:mm
Severity / Priority
Severity: Low — Format validation baseline.

Priority: P3 — Low — Expected behavior verification.

Evidence
Refer to the consolidated evidence for the challenge.

TC-03 — Positive UTC Offset Baseline (UTC+3)
User Perspective
As a user in a positive UTC-offset timezone such as UTC+3, scheduling a task should correctly apply the +3-hour offset without errors.

Title
[Functional Baseline] Task scheduled correctly using positive offset (UTC+3)

Steps to Reproduce
Navigate to The Jetlag Bug challenge.

Select UTC+3 from the Timezone dropdown.

Enter a valid timestamp in YYYY-MM-DD HH:mm format.

Click Schedule.

Actual Result
The task is successfully scheduled using the +3-hour offset.

Expected Result
The scheduled time should shift +3 hours relative to the UTC base time.

Severity / Priority
Severity: Low — Functional baseline.

Priority: P3 — Low — Expected behavior verification.

Evidence
Refer to the consolidated evidence for the challenge.

TC-04 — European IANA Timezone Baseline (Europe/Paris)
User Perspective
As a user selecting Europe/Paris, I expect the named timezone to map correctly to its regional offset rules and schedule the task without failure.

Title
[Functional Baseline] Task scheduled correctly using IANA timezone (Europe/Paris)

Steps to Reproduce
Navigate to The Jetlag Bug.

Select Europe/Paris from the Timezone dropdown.

Enter a valid timestamp.

Click Schedule.

Actual Result
The task is scheduled accurately using the Europe/Paris timezone rules.

Expected Result
The system should apply the applicable Paris regional timezone rules correctly.

Severity / Priority
Severity: Low — Functional baseline.

Priority: P3 — Low — Expected behavior verification.

Evidence
Refer to the consolidated evidence for the challenge.

TC-05 — Timezone Selection Parsing
User Perspective
As a user selecting an available timezone from the dropdown, the chosen option should be registered and used by the scheduling engine.

Title
[Functional Baseline] Timezone selector properly registers user dropdown choices

Steps to Reproduce
Open the Timezone dropdown.

Select a valid option, such as:

UTC

UTC+3

UTC-5

Europe/Paris

Asia/Tokyo

Enter valid scheduled time.

Submit.

Actual Result
The dropdown choice is correctly parsed and submitted to the backend engine.

Expected Result
The system should register the selected timezone state for downstream calculations.

Severity / Priority
Severity: Low — UI/functional verification.

Priority: P3 — Low — Expected behavior verification.

Evidence
Refer to the consolidated evidence for the challenge.

BUG-003 — Incorrect Server Offset Applied to UTC
User Perspective
As a user scheduling a task using standard UTC, I expect my scheduled time to be processed exactly as requested. An unexpected one-hour shift can cause missed deadlines or delayed execution.

Title
[Timezone Engine Defect] UTC timezone selection causes task to be scheduled 1 hour later than requested

Steps to Reproduce
Navigate to The Jetlag Bug.

Select UTC from the Timezone dropdown.

Enter a valid scheduled time in YYYY-MM-DD HH:mm, for example:
2026-10-07 18:00

Click Schedule.

Actual Result
The server processes the request with an incorrect offset:

Scheduled 1 hour late — UTC offset applied incorrectly.
Expected Result
Tasks scheduled under UTC should use a 0-hour offset and match the requested time exactly.

Severity
High — Directly corrupts scheduling accuracy for UTC users.

Priority
P1 — High — Requires immediate investigation of backend timezone parsing.

Evidence
Refer to the consolidated evidence for the challenge.

BUG-004 — Server Inverts Offset Sign for UTC-5
User Perspective
As a user in a negative-offset timezone such as UTC-5, scheduling a task should preserve the correct local-time relationship. Treating UTC-5 as UTC+5 creates a 10-hour scheduling drift.

Title
[Timezone Engine Defect] UTC-5 offset sign is inverted by backend server and processed as UTC+5

Steps to Reproduce
Navigate to The Jetlag Bug.

Select UTC-5 from the Timezone dropdown.

Enter a valid scheduled time in YYYY-MM-DD HH:mm.

Click Schedule.

Actual Result
The server inverts the negative offset calculation and evaluates the task as though it were in UTC+5 rather than UTC-5.

Expected Result
The server should apply the UTC-5 offset correctly, maintaining the requested local-time alignment.

Severity
High — Inverts negative timezone offsets and creates multi-hour schedule drift.

Priority
P1 — High — Backend arithmetic/parsing defect.

Evidence
Refer to the consolidated evidence for the challenge.

BUG-005 — Asia/Tokyo Processed with Incorrect UTC Offset
User Perspective
As a user selecting Asia/Tokyo (JST), I expect the task to use the correct Japan Standard Time offset of UTC+9. An incorrect UTC+8 mapping causes tasks to be scheduled one hour early.

Title
[Timezone Engine Defect] Asia/Tokyo timezone mapped to UTC+8 instead of correct UTC+9 offset

Steps to Reproduce
Navigate to The Jetlag Bug.

Select Asia/Tokyo from the Timezone dropdown.

Enter a valid scheduled time.

Click Schedule.

Actual Result
The system reports that Asia/Tokyo is interpreted as UTC+8 instead of UTC+9.

Expected Result
Asia/Tokyo should be mapped to the correct timezone rules and use UTC+9 for the tested scenario.

Severity
Medium — Affects regional users relying on the named IANA timezone.

Priority
P2 — Normal — Requires correction of timezone mapping/configuration.

Evidence
Refer to the consolidated evidence for the challenge.

Recommended Validation After Fix
Micro-Loan Interest
BUG-001 — Precision
Retest:

0.1

0.2

0.0001

Other decimal values

Standard positive integers

Confirm that no binary floating-point artifacts are visible and that the application's intended decimal precision is consistently applied.

BUG-002 — Validation
Retest:

Blank input

Alphabetic input such as abc

Symbol-only input such as $%#

Mixed invalid strings

Valid numeric values

Confirm that invalid input is rejected before calculation and that users receive a clear error message.

Boundary / Baseline Regression
Confirm:

0 → $0 interest
100 → 0.1% interest
without runtime errors or precision artifacts.

The Jetlag Bug
Retest:

Empty timezone / scheduled time.

Invalid date-time formats.

UTC+3.

Europe/Paris.

UTC.

UTC-5.

Asia/Tokyo.

Dropdown timezone parsing.

Pay particular attention to offset direction and exact scheduling output.

Evidence & Artifacts
The supplied testing material references evidence screenshots and a consolidated recording.

Video Recording — All 5 Test Cases & 3 Bugs:

https://www.loom.com/share/fc150ecbdad64543b4bb63be2658af8a

Project Structure
Day-37-bugeater.web.app/
├── README.md
└── Defects_&_Bugreports/
    ├── Screenshots/
    │   └── 01-Micro-Loan-Interest.png
    ├── 01-Micro-Loan-Interest.md
    └── 02-The-Jetlag-Bug.md
Conclusion
Day 37 covers two BugEater exploratory-testing challenges.

The Micro-Loan Interest challenge confirms nominal and zero-value calculations while exposing two areas for improvement: raw floating-point precision artifacts and insufficient validation for empty/non-numeric input.

The Jetlag Bug challenge confirms baseline validation and timezone-selection behavior while identifying three timezone-engine defects: an incorrect UTC offset, an inverted UTC-5 sign, and an incorrect Asia/Tokyo offset mapping.

The recommended next step is regression testing after fixes, using the same baseline, boundary, invalid-input, and timezone-transition scenarios documented above.