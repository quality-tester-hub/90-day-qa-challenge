User Perspective: As an automation engineer writing test suites for date-picker components, encountering a 60-second timeout on a gridcell locator makes tests unreliable and brittle. When calendar overlays fail to render target date cells properly after month navigation, automation scripts grind to a halt and falsely fail.

Bug Report: Date Picker Gridcell Locator Timeout Exceeded
1. Title: [Automation / Component Defect] Date picker gridcell locator times out due to unrendered target cell after month navigation

2. Environment:

OS: macOS / Windows

Browser/App: Playwright / Chromium Headed

Device: Desktop

Build/URL: [https://qaplayground.com/practice/date-picker](https://qaplayground.com/practice/date-picker)

3. Steps to Reproduce:

Navigate to [https://qaplayground.com/practice/date-picker](https://qaplayground.com/practice/date-picker).

Attempt to fill input field [data-testid="dp-basic-input"].

Click calendar trigger [data-testid="dp-calendar-trigger"].

Click next month control [data-testid="dp-next-month"].

Attempt to click target date cell via getByRole('gridcell', { name: '-11-28' }).

4. Actual Result:

Playwright runner hits a 60,000ms timeout while waiting for the target gridcell element to become visible or actionable because the calendar overlay fails to display or position the cell correctly.

5. Expected Result:

The target date cell element should render within the accessible DOM tree and complete the click action within standard execution thresholds (< 5000ms).

6. Severity: High (Blocks automated test execution pipelines and indicates component rendering instability).

7. Priority: P2 - Normal (Requires component fix for proper gridcell rendering and DOM attachment).

8. Evidence: Test execution log output showing Test timeout of 60000ms exceeded on date-picker.spec.ts:9 waiting for getByRole('gridcell', { name: '-11-28' }). [text](../Tests/date-picker.spec.ts)