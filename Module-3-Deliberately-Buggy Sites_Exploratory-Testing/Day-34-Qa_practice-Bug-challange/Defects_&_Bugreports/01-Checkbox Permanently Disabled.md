User Perspective: As a user registering for an account, the "I agree with the terms and conditions" checkbox must be interactable so terms can be accepted. When the checkbox is permanently disabled (disabled="true") without any clear unlock condition (such as reading the terms modal or filling preceding fields), users are completely blocked from completing registration. Proving this via DevTools console (document.querySelector('input[type="checkbox"]').disabled -> true) confirms an unintentional element state attribute bug.   

Bug Report: "Terms and Conditions" Checkbox Permanently Disabled Blocking User Registration
1. Title: [UI / Form Defect] "I agree with the terms and conditions" checkbox is permanently disabled, preventing form submission

2. Environment:

OS: macOS / Windows / Linux / Android

Browser/App: Google Chrome / Modern Web Browser   

Device: Desktop / Mobile

Build/URL: qa-practice.razvanvancea.ro/bugs-form.html

   

3. Steps to Reproduce:

Navigate to [https://qa-practice.razvanvancea.ro/bugs-form.html](https://qa-practice.razvanvancea.ro/bugs-form.html).   

Fill out required registration fields (e.g., Phone number, Country, Email address, Password).   

Attempt to click/check the "I agree with the terms and conditions" checkbox above the Register button.   

Inspect the checkbox element using DevTools Console tab and evaluate document.querySelector('input[type="checkbox"]').disabled.   

4. Actual Result:

The checkbox is visually greyed out and non-interactable. Evaluating its state in DevTools Console returns true for .disabled, blocking users from accepting terms and submitting the registration form.   

5. Expected Result:

The terms and conditions checkbox should be enabled (disabled="false") by default or enabled dynamically upon completing required input fields, allowing users to toggle agreement and complete registration.

6. Severity: Critical (Completely blocks registration workflow and user onboarding).

7. Priority: P1 - Urgent (Requires immediate removal of premature disabled HTML attribute/DOM property binding).

8. Evidence: Screenshot capturing form interface alongside DevTools Console output verifying document.querySelector('input[type="checkbox"]').disabled returns true.   