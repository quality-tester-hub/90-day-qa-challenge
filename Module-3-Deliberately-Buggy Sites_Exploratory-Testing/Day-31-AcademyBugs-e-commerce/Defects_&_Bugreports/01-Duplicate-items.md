User Perspective: As a user with a slow or unstable internet connection, clicking a button or link multiple times while waiting for the page to load is common behavior. When the application registers every single click as a separate event—such as repeatedly adding duplicate items, submitting duplicate forms, or triggering multiple navigation calls—it leads to accidental duplicate charges, duplicated records, and a broken experience.

Bug Report: Lack of Request Debouncing / Click Throttling Allows Duplicate Actions
1. Title: [UI / Network Defect] Action buttons lack click debouncing, triggering duplicate requests on rapid multi-click actions

2. Environment:

OS: macOS / Windows / Linux / Android

Browser/App: Google Chrome / Firefox / Modern Web Browser

Device: Desktop / Mobile

Build/URL: Product Detail Page / Action Trigger Endpoints

3. Steps to Reproduce:

Navigate to the product page or target feature interface.

Simulate or apply high network latency (e.g., using Chrome DevTools network throttling set to "Slow 3G").

Rapidly click the action button (e.g., "Add to Cart", "Submit", or product link) multiple times in quick succession before the initial request completes.

Inspect the outgoing network requests and resulting state.

4. Actual Result:

Every single click triggers an individual network request or state increment, creating duplicate actions/entries rather than treating the rapid clicks as a single action.

5. Expected Result:

The button should implement request debouncing, click throttling, or an immediate disabled state (disabled / loading spinner) on the first click until the network request completes, ensuring only a single action is processed.

6. Severity: High (Causes state duplication, potential multiple billing/item counts, and server strain).

7. Priority: P1 - Urgent (Requires immediate implementation of front-end debouncing and backend request idempotency).

8. Evidence: (https://www.loom.com/share/6f45163d19e54936bce148692c8e6ff3)