User Perspective: As a developer or tester diagnosing session instability, having the exact Playwright automation script attached directly alongside the error logs makes reproducing the overlay interception bug straightforward and fast.

Bug Report: Banking App Server Crash Under Multi-Tab Heavy Load
1. Title: [Backend / UI Interception Defect] UI portal overlays freeze and block pointer events under rapid multi-tab session interactions

2. Environment:

OS: macOS / Windows

Browser/App: Playwright / Chromium Headed

Device: Desktop

Build/URL: [https://qaplayground.com/bank/dashboard](https://qaplayground.com/bank/dashboard)

3. Steps to Reproduce:

Authenticate into the banking application (/bank/login).

Perform sequential quick-action transactions (transfers, bill payments, and loan applications) as automated.

Navigate to the loan application modal and rapidly trigger select controls ([data-testid="loan-type-select"]).

Attempt subsequent click interactions on form inputs or select triggers.

4. Actual Result:

Portal dropdown overlays (data-base-ui-portal) freeze on screen, intercepting pointer events and triggering a 30,000ms execution timeout failure in automated tests.

5. Expected Result:

Dropdown overlays should dismiss cleanly without blocking UI pointer events, allowing subsequent inputs to receive focus and click actions smoothly.

6. Severity: Critical (Blocks UI interaction across banking workflows and causes test execution failures).

7. Priority: P1 - Urgent (Requires immediate fix to overlay rendering and state cleanup logic).

8. Evidence:

Terminal Log:

Plaintext
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByTestId('loan-type-select')
  - element is visible, enabled and stable
  - <div class="flex flex-1 shrink-0 gap-2 whitespace-nowrap">Personal</div> 
    from <div id="_r_2h_" data-base-ui-portal="">…</div> subtree intercepts pointer events
  - retrying click action...