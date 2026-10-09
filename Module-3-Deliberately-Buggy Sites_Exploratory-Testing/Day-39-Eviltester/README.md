Summary of Defects & Findings
Bug IDTitleSeverityPriorityStatusBUG-001Console Driver game fails to render or execute game state in DevTools consoleHighP1 - HighDefect LoggedBUG-002Console output formatting continuously expands canvas/text state without boundary clearingMediumP2 - NormalDefect Logged
Key Defect Highlights
1. Console Driver Game Execution Failure (
01-Execution Failure.md)
- Issue: Pressing Space as instructed fails to initialize the active game loop or render track output (V, *, X) inside the browser DevTools console panel.
- Network Observation: Page assets return HTTP 304 Not Modified / HTTP 200 OK, confirming that network delivery is functional, but the client-side JavaScript execution or console output binding fails.
- Evidence: Captured in raw 01-Execution Failure.har log.
2. Console Rendering Expansion Issue (02-Continuously Expands.md)
- Issue: When console logs trigger, output buffers repeatedly expand without clearing previous game state lines.
- Evidence: Documented under Evidence/02-Continuously Expands.
Reproduction Commands (cURL Baseline)
Bash

curl --url '[https://testpages.eviltester.com/fun-and-games/console-driver/](https://testpages.eviltester.com/fun-and-games/console-driver/)' \
  -H 'accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'
Conclusion
Day 39 exploratory testing on Evil Tester identified key execution failures in the Console Driver game logic. Despite valid static asset responses over HTTP, the client-side rendering script fails to execute in modern browser console environments.# Module 3 — Deliberately Buggy Sites & Exploratory Testing

## Day 39 — Evil Tester (Console Driver Game)

### Overview
This folder documents exploratory testing performed on Evil Tester's practice platform, specifically focusing on the **Console Driver** game. Testing evaluated the core JavaScript game loop, console UI rendering, event handling, and network requests via DevTools and HAR exports.

- **Target Application:** `testpages.eviltester.com`
- **Challenge:** Console Driver (`/fun-and-games/console-driver/`)
- **Primary Browser:** Google Chrome / Brave Browser
- **Session Focus:** DevTools Console Execution, Game Loop Validation & HAR Network Traffic Analysis

---

### Project & Folder Structure

```text
Module-3-Buggy-Exploratory/
└── Day-39-EvilTester/
    ├── README.md
    ├── Defects_&_Bugreports/
    │   ├
    │   ├── 01-Execution Failure.md
    │   └── 02-Continuously Expands.md
    └── Evidence/
        ├── 01-Execution Failure.har
        └── 02-Continuously Expands