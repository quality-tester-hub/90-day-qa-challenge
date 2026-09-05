# UI Testing Playground

Base URL: http://uitestingplayground.com/

## Record a test

From the repository root, open Playwright Codegen:

```bash
npx playwright codegen http://uitestingplayground.com/
```

To record directly into this day's test folder:

```bash
npx playwright codegen --target=playwright-test --output=Module-1-UI-Automation/day-05-ui-testing-playground/Tests/recorded.spec.ts http://uitestingplayground.com/
```

Review generated locators before keeping the recording. Prefer role, label, or text locators over generated IDs.

## Execute tests

Run the Dynamic ID test in headless mode:

```bash
npx playwright test Module-1-UI-Automation/day-05-ui-testing-playground/Tests/dynamic-id.spec.ts
```

Run it with the browser visible:

```bash
npx playwright test Module-1-UI-Automation/day-05-ui-testing-playground/Tests/dynamic-id.spec.ts --headed
```

Open the HTML report after a run:

```bash
npx playwright show-report
```
