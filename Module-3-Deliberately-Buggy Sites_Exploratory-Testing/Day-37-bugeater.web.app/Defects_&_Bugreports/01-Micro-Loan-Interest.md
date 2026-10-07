Overview: Micro-Loan Interest Calculation Defects
Target Application: bugeater.web.app (Exploratory Testing Challenge: Micro-loan Interest)   
JPG

Module: Micro-interest calculation engine (0.1% per period)   
JPG

Discovered Test Cases: 4 Test Cases (Clean calculation, Floating point imprecision, Zero amount, Empty/Non-numeric input)   
JPG

Sub-Bug 1: Floating Point Imprecision / Binary Rounding Noise
User Perspective: As a user calculating loan interest, entering certain floating-point loan amounts displays unrounded binary floating-point noise (e.g., 0.00010000000000000002 instead of 0.0001). This damages visual polish and user trust in financial calculations.

1. Title: [Calculation / Precision Defect] Micro-loan interest calculation outputs raw floating-point binary rounding noise

2. Environment:

OS: macOS / Windows / Linux / Android   
JPG

Browser/App: Google Chrome / Modern Web Browser   
JPG

Device: Desktop / Mobile   
JPG

Build/URL: bugeater.web.app/exploratory/microloan-interest

   
JPG

3. Steps to Reproduce:

Navigate to the Micro-loan Interest challenge on BugEater.   
JPG

Enter specific floating-point loan amounts that trigger JavaScript binary fraction representation quirks (e.g., 0.1, 0.2, or 0.0001).   
JPG

Click Calculate / observe the calculated interest output.   
JPG

4. Actual Result:

The system renders unformatted floating-point numbers containing extended binary decimal noise (e.g., 0.30000000000000004).   
JPG

5. Expected Result:

The application should apply explicit currency rounding (e.g., .toFixed(4) or Math.round()) to output clean numeric values without floating-point artifacts.   
JPG

6. Severity: Medium (Degrades financial interface accuracy and visual credibility).

7. Priority: P2 - Normal (Requires string formatting or decimal rounding logic in the calculation module).

8. Evidence: BugEater challenge completion screen verifying Test Case 2 (Floating point imprecision).   
JPG

Sub-Bug 2: Zero Amount Boundary Handling ($0)
User Perspective: As a borrower entering $0 into the loan amount field, submitting zero should gracefully handle boundary math and output $0 interest without throwing internal errors or triggering unexpected NaN responses.

1. Title: [Validation / Boundary Defect] Zero amount input validation and zero-interest output handling

2. Environment:

OS: macOS / Windows / Linux / Android   
JPG

Browser/App: Google Chrome / Modern Web Browser   
JPG

Device: Desktop / Mobile   
JPG

Build/URL: bugeater.web.app/exploratory/microloan-interest

   
JPG

3. Steps to Reproduce:

Navigate to the Micro-loan Interest challenge on BugEater.   
JPG

Enter 0 into the loan amount input field.   
JPG

Submit the calculation.   
JPG

4. Actual Result:

The application evaluates $0 input, verifying edge-case handling when calculating 0.1% of 0.   
JPG

5. Expected Result:

The system should output $0 interest calculated cleanly without runtime errors.   
JPG

6. Severity: Low (Edge-case boundary testing).

7. Priority: P3 - Low (Sanity check for zero-value arithmetic handling).

8. Evidence: BugEater challenge completion screen verifying Test Case 3 (Zero amount).   
JPG

Sub-Bug 3: Empty or Non-Numeric Input Validation
User Perspective: As a user accidentally leaving the input field blank or entering non-numeric text (such as letters or symbols), submitting the form should immediately present a clear error message requiring a valid numeric input, rather than outputting NaN or crashing.

1. Title: [Validation Defect] Empty or non-numeric input accepts invalid string payloads instead of enforcing numeric validation

2. Environment:

OS: macOS / Windows / Linux / Android   
JPG

Browser/App: Google Chrome / Modern Web Browser   
JPG

Device: Desktop / Mobile   
JPG

Build/URL: bugeater.web.app/exploratory/microloan-interest

   
JPG

3. Steps to Reproduce:

Navigate to the Micro-loan Interest challenge on BugEater.   
JPG

Leave the amount field empty OR type non-numeric characters (e.g., abc, $%#).   
JPG

Click Calculate.   
JPG

4. Actual Result:

The form attempts calculation on empty/invalid strings without upfront field validation.   
JPG

5. Expected Result:

The input field should enforce numeric-only rules and show an error prompt: "The amount field must contain a number."

   
JPG

6. Severity: Medium (Breaks input handling and leads to invalid payload processing).

7. Priority: P2 - Normal (Requires adding type="number" or Regex input validation).

8. Evidence: BugEater challenge completion screen verifying Test Case 4 (Empty or non-numeric input).   
JPG

Sub-Bug 4: Nominal Clean Calculation Baseline
User Perspective: As a user entering standard positive integers (e.g., $1000), the calculated micro-interest should produce exact decimal results without noise or miscalculation.

1. Title: [Functional Baseline] Nominal micro-interest calculation for standard integer inputs

2. Environment:

OS: macOS / Windows / Linux / Android   
JPG

Browser/App: Google Chrome / Modern Web Browser   
JPG

Device: Desktop / Mobile   
JPG

Build/URL: bugeater.web.app/exploratory/microloan-interest

   
JPG

3. Steps to Reproduce:

Navigate to bugeater.web.app/exploratory/microloan-interest.   
JPG

Enter a standard positive integer amount (e.g., 100).   
JPG

Click Calculate.   
JPG

4. Actual Result:

The calculator computes the baseline nominal 0.1% rate accurately.   
JPG

5. Expected Result:

Output matches expected math (100×0.001=0.1).   
JPG

6. Severity: Low (Functional benchmark validation).

7. Priority: P3 - Low (Baseline happy-path confirmation).

8. Evidence: BugEater challenge completion screen verifying Test Case 1 (Clean calculation).   
JPG