# Day 04 - UI Test Automation with Playwright

Focus on modular TypeScript automation scripts targeting user workflows on `practice.expandtesting.com`. Exercises emphasize robust locators, execution visibility via explicit console logging, and handling dynamic UI components.

## 🎯 Key Learning & Technical Takeaways

* **Console Logs & Execution Visibility**: Implemented explicit `console.log` statements at each critical action step to ensure complete transparency during headed and headless test runs.
* **HTTP Headers & Context**: Inspected browser context behavior, network headers, and device profiles using custom `test.use()` overrides.
* **Cookie Consent & Overlays**: Developed strategies for handling third-party overlays, modals, dynamic vignette popups (`#google_vignette`), and banners.
* **JavaScript Dialogs**: Managed native alert popups, confirmation dialogs, and prompt interactions natively within Playwright event listeners.
* **JavaScript Error Monitoring**: Handled page-level exception catching and verified error container alerts using Playwright assertions.
* **Dynamic & Asynchronous Elements**: Built resilient tests using user-facing locators (`getByRole`, `getByLabel`, `getByText`) and auto-waiting assertions (`expect().toBeVisible()`).

---

## 🛠️ Executed Test Specs

| Test Spec File | Target Scenario | Focus Area |
| :--- | :--- | :--- |
| `web-inputs.spec.ts` | Web Inputs | Input field validations |
| `dynamic-table.spec.ts` | Dynamic Table | Table data extraction & dynamic locators |
| `login.spec.ts` | Login Flow | Form submission & authentication |
| `register.spec.ts` | Registration | Account creation validation |
| `password-reset.spec.ts` | Forgot Password | Reset workflow & confirmation banners |
| `otp.spec.ts` | OTP Verification | 2FA / One-Time Password workflows |
| `my-browser.spec.ts` | My Browser Information | User-Agent & browser metadata checks |
| `form-validation.spec.ts` | Form Validation | Input criteria & error message assertions |
| `notification-message.spec.ts` | Notification Message | Flash alerts & variable text matching |
| `autocomplete.spec.ts` | Autocomplete | Dynamic dropdown selection |
| `spies-stubs-clocks.spec.ts` | Spies, Stubs & Clocks | Time manipulation using `page.clock` |
| `infinite-scroll.spec.ts` | Infinite Scroll | Dynamic DOM loading & page scrolling |
| `contact.spec.ts` | Contact Us | End-to-end contact form validation |

---

## 🚀 How to Run Tests

Run the full Day 04 test suite in headed mode:

```bash
npx playwright test Module-1-UI-Automation/day-04-practice-expandtesting/ --headeds