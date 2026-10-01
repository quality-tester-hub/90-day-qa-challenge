User Perspective: As a responsiveness tester toggling device viewports in browser developer tools, setting a viewport width like 375px should immediately trigger the mobile breakpoint CSS rules. When the application fails to adapt its grid/flexbox layout and continues rendering desktop multi-column layouts on small screens, it creates broken horizontal scrolling and truncated UI elements on mobile devices.
Bug Report: Layout Breakpoint Failure / Desktop View Retained at Mobile Viewport Widths
1. Title: [Responsive / CSS Defect] Page layout fails to adapt to mobile viewport dimensions (375px), retaining desktop multi-column grid
2. Environment:
OS: macOS / Windows / Linux / Android
Browser/App: Google Chrome DevTools / Responsive Design Mode
Device: Simulated Mobile (375px Viewport Width)
Build/URL: Product Catalog / E-Commerce Grid View
3. Steps to Reproduce:
Navigate to the product catalog or target grid page.
Open Developer Tools (F12) and toggle the Device Toolbar (Responsive Design Mode).
Set the viewport width manually to 375px (or select standard mobile presets like iPhone SE / 12 Pro).
Observe the grid layout and element arrangement across the viewport.
4. Actual Result:
The application fails to collapse the grid into a single-column mobile layout. Desktop multi-column styling (2–3 items per row) persists, causing content overflow, unreadable text, and broken responsiveness.
5. Expected Result:
The application's CSS media queries should detect screens below standard tablet breakpoints ($\le 768\text{px}$) and reflow the product grid into a clean 1-column responsive layout optimized for mobile screens.
6. Severity: High (Breaks mobile usability and layout integrity for handheld device users).
7. Priority: P1 - Urgent (Requires immediate CSS @media breakpoint, flex-wrap, or grid-template-columns fix).
8. Evidence: DevTools responsive mode screenshot showing 3-column desktop layout rendered within a 375px width container.