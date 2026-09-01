User Perspective: As a QA professional tracking and organizing issues directly inside my GitHub repository, it is satisfying to see the documentation workflow take shape. Having a structured DEFECT-002 screenshot and matching markdown notes in VS Code ensures that visual anomalies like broken image assets—which easily slip past automated DOM element checks—are clearly cataloged for developers with an acute manual eye.

Bug Report: Broken Image Assets Rendering Placeholder Icons
1. Title: [UI / Visual Defect] Image assets fail to load properly, displaying broken placeholder icons while passing automated DOM element checks

2. Environment:

OS: macOS / Windows

Browser/App: Google Chrome / Firefox / Modern Web Browser

Device: Desktop

Build/URL: [https://the-internet.herokuapp.com/broken_images](https://the-internet.herokuapp.com/broken_images)

3. Steps to Reproduce:

Navigate to the target page URL (/broken_images).

Inspect the rendered page content visually using a manual eye.

Inspect the underlying DOM structure or execute an automated Playwright check verifying element presence.

4. Actual Result:

Specific image files fail to load from the server, resulting in broken image placeholder icons visually on the page, even though structural tags are present in the DOM (causing automated test suites to incorrectly pass).

5. Expected Result:

All referenced image assets should load successfully from the server and render properly without displaying broken placeholders.

6. Severity: Low (Visual defect that does not block core site functionality).

7. Priority: P3 - Low (Routine cleanup for asset paths and visual presentation).

8. Evidence: DEFECT-002-broken-image.jpg capturing the [the-internet.herokuapp.com/broken_images](https://the-internet.herokuapp.com/broken_images) page showing multiple broken image placeholders alongside a successfully loaded asset icon.