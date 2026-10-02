Day 31 — AcademyBugs E-Commerce Exploratory Testing
Overview

Day 31 starts Module 3: Deliberately Buggy Sites — Exploratory Testing using AcademyBugs.com as the e-commerce practice target.

The goal of this session was to explore realistic user behavior and deliberately look for functional, UI, responsive, state-handling, and error-handling defects rather than following rigid step-by-step test cases.

The exploratory planning used high-level test charters, supported by focused heuristics such as Operations & Time, Data & Structure, Data Boundaries & Sanitization, Platform & Visual Layout, and error/crash resilience.

Exploratory Test Charters
#	Charter	Focus	Result
1	Impatience Double-Submit	Rapid multi-clicking / duplicate actions	🐛 BUG-01
2	Cart State Mutation Across Tabs	Multi-tab state synchronization	✅ Passed
3	Extreme Boundary Input	Invalid values, sanitization, layout	✅ Passed
4	Mid-Checkout Interrupt & Back Navigation	Browser history / navigation state	✅ Passed
5	Responsive Viewport Shrink & Dynamic Resize	Responsive layout during dynamic resize	🐛 BUG-03
6	Offline-to-Online Network Drop	Error handling / user feedback	🐛 BUG-04

Note: BUG-02 was discovered independently during exploration and was not part of the original planned charters.

Bugs Discovered
BUG-01 — Lack of Request Debouncing / Click Throttling

Title: [UI / Network Defect] Action buttons lack click debouncing, triggering duplicate requests on rapid multi-click actions

User Perspective:

A user with a slow or unstable connection may click an action repeatedly while waiting for the first action to complete. If every click is processed independently, duplicate actions or entries can occur.

Actual Result:

Every rapid click triggers an individual network request or state increment, creating duplicate actions instead of treating the interaction as a single action.

Expected Result:

The application should prevent duplicate processing through debouncing, click throttling, or an immediate disabled/loading state until the initial action completes.

Severity: High

Priority: P1 — Urgent

Evidence: Loom recording provided during testing.

BUG-02 — Intrusive Pop-Up Modal Cannot Be Dismissed

Title: [UI / Modal Defect] Un-dismissable modal overlay traps pointer focus, ignoring close button triggers and form submissions

This defect was not part of the original planned exploratory charters. It was discovered independently during exploration.

User Perspective:

An un-dismissable pop-up modal prevents the user from accessing the underlying application when the close icon and form submission do not successfully dismiss the overlay.

Actual Result:

The pop-up modal remains visible after attempting to use the close icon or submit the modal form. The overlay effectively blocks interaction with the underlying application.

Expected Result:

The close action or successful form submission should dismiss the modal, restore interaction with the main page, and unblock the user's workflow.

Severity: Critical

Priority: P1 — Urgent

Evidence: Visual observation and DOM inspection of the modal state.

BUG-03 — Responsive Layout Breakpoint Failure at 375px

Title: [Responsive / CSS Defect] Page layout fails to adapt to mobile viewport dimensions (375px), retaining desktop multi-column grid

This defect corresponds to Charter 5 — Responsive Viewport Shrink & Dynamic Resize.

User Perspective:

As a responsiveness tester, reducing the viewport to a mobile width should cause the application layout to adapt to the smaller screen.

Actual Result:

At a 375px viewport, the desktop multi-column layout remains instead of adapting to the smaller viewport. This produces layout overflow and degraded mobile usability.

Expected Result:

The page should reflow appropriately for the mobile viewport and maintain usable content without broken horizontal layout.

Severity: High

Priority: P1 — Urgent

Evidence: DevTools responsive-mode screenshot.

BUG-04 — Offline Network Drop Without User Feedback

Title: [Network / Error Handling Defect] Application fails silently during offline network drops without displaying user-facing connectivity alerts

This defect corresponds to Charter 6 — Offline-to-Online Network Drop.

User Perspective:

When an internet connection suddenly drops or becomes unavailable, the user should receive clear feedback instead of being left with a frozen, silent, or apparently broken interface.

Actual Result:

When the application is used while offline, the UI can fail silently, hang, or leave the user without clear feedback about the connectivity problem.

Expected Result:

The application should provide clear, accessible feedback when network connectivity is lost or a network-dependent action fails.

Severity: Medium

Priority: P2 — Normal

Passed Exploratory Checks
Charter 2 — Cart State Mutation Across Tabs

The planned multi-tab exploration was performed to check for inconsistent cart state, quantity changes, removals, and checkout state between tabs.

Result: Passed — no defect was added to the defect reports for this charter.

Charter 3 — Extreme Boundary Input

The planned boundary-input exploration was performed using extreme and invalid input conditions.

Result: Passed — no defect was added to the defect reports for this charter.

Charter 4 — Mid-Checkout Interrupt & Back Navigation

The planned browser Back/Forward navigation exploration was performed to investigate checkout state retention and navigation behavior.

Result: Passed — no defect was added to the defect reports for this charter.

Testing Approach

The session focused on exploratory testing, using realistic and unexpected user behavior instead of relying only on predefined test cases.

Key Heuristics Used
Operations & Time — rapid repeated actions and timing-related behavior
Data & Structure — consistency between application state and displayed UI
Data Boundaries & Sanitization — extreme and invalid input conditions
Platform & Visual Layout — viewport and responsive behavior
Performance & Crash Resilience — network interruption and failure handling
Evidence

The Defects_&_Bugreports directory contains the documented findings and supporting evidence.

Screenshots
Screenshots/03-responsive-375px.png
Defect Reports
01-Duplicate-items.md
02-Intrusive-Pop-Up-Modal-Un-dismissable-via-Close-Icon-or-Form-Submission.md
03-responsive-375px.md
04-Error-Handling-&-User-Feedback.md
Folder Structure
Day-31-AcademyBugs-e-commerce/
├── Defects_&_Bugreports/
│   ├── Screenshots/
│   │   └── 03-responsive-375px.png
│   ├── 01-Duplicate-items.md
│   ├── 02-Intrusive-Pop-Up-Modal-Un-dismissable-via-Close-Icon-or-Form-Submission.md
│   ├── 03-responsive-375px.md
│   └── 04-Error-Handling-&-User-Feedback.md
└── README.md
Day 31 Outcome

Day 31 resulted in four documented defects:

BUG-01 — Duplicate actions caused by rapid multi-clicking
BUG-02 — An unplanned un-dismissable pop-up modal
BUG-03 — Responsive layout failure at a 375px viewport
BUG-04 — Missing user feedback during offline network conditions

Three planned exploratory charters were recorded as passed:

Charter 2 — Cart State Mutation Across Tabs
Charter 3 — Extreme Boundary Input
Charter 4 — Mid-Checkout Interrupt & Back Navigation

The responsive defect came from Charter 5, while the offline/error-handling defect came from Charter 6.

BUG-02 was an additional defect discovered independently during exploration.

This day demonstrates exploratory QA skills including charter-based testing, unexpected user behavior analysis, defect discovery, severity/priority classification, responsive testing, state validation, and error-handling investigation.