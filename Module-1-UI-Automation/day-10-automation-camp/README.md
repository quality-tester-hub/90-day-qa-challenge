Day 10: Automation Camp (Play 2)
Overview
Automated end-to-end form controls and interactive UI components on Automation Camp (Play 2). Unlike complex SPAs with overlay masks and React state synchronization race conditions, this pure automation sandbox allows standard Playwright locators (getByRole, getByLabel, locator) to execute natively and deterministically.

Key Workflows & Single-Suite Test Execution
All test cases are consolidated inside a single spec file (play2-automation.spec.ts) without redundant folder breakdowns:

Basic Form Controls: Automated standard text inputs (First name, Last name), radio button toggles, and label-filtered option checkboxes.

Select & Multi-Select Dropdowns: Validated single-choice native select dropdowns (#owc) and datalist input auto-completes.

Custom Input Types: Interacted with native HTML color pickers (#f547d0), date selectors, and range sliders.

Popups & Dialog Interception:

Handled single-click form submissions opening new window popup contexts via page.waitForEvent('popup').

Intercepted native browser alert/dialog boxes asynchronously using page.once('dialog').

Dynamic Spinners: Validated numeric value entries using native spinbutton controls.

Technical Learnings: Dedicated Sandboxes vs. Flaky SPAs
Native Event Bubbling: Standard .fill() and .check() actions trigger expected browser events instantly without requiring synthetic dispatchEvent('input') overrides.

Clean DOM Hierarchy: Zero third-party tour overlays (tour-step-backdrop) or pointer interception masks, allowing native Playwright click actions to execute without timing out.

Relative File Path Handling: Identified that setInputFiles() requires valid local relative paths relative to the execution root, preventing runtime ENOENT filesystem exceptions