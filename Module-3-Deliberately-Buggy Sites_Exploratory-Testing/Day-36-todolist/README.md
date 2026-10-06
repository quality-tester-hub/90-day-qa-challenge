
Day 36 — To-Do List Defects & Bug Reports

Overview & Project Under Test

Field

Details

Application

JamesM To-Do List

URL

http://todolist.james.am/#/

Testing Focus

UI state logic, task completion behavior, and client-server/API communication

Tools

Google Chrome DevTools, Network tab

Defect Inventory

ID

Defect Summary

Category

Severity

Priority

Status

BUG-001

Active "Items Left" counter miscalculates remaining tasks

UI / State Logic

Medium

P3 — Low

Open

BUG-002

Backend API endpoints (learn.json, api) return HTTP 404

API / Routing

High

P1 — Urgent

Open

BUG-001 — Active "Items Left" Counter Miscalculates Remaining Tasks

Summary

The To-Do List footer incorrectly calculates the number of uncompleted tasks after users mark tasks as completed.

With 4 active tasks:

Completing 1 task displays "2 items left" instead of "3 items left".

Completing 2 tasks displays "1 item left" instead of "2 items left".

This indicates an off-by-one counter/state-logic defect.

User Perspective

As a user managing a to-do list with four active items, marking an item as completed should immediately and accurately decrement the "items left" counter. An inaccurate counter gives the user an incorrect representation of the current task state.

Environment

Category

Details

OS

macOS / Windows / Linux / Android

Browser/App

Google Chrome / Modern Web Browser

Device

Desktop / Mobile

Build / URL

todolist.james.am/#/

Steps to Reproduce

Navigate to todolist.james.am/#/.

Add four tasks:

Consume a podcast

Go on a date

Play games

Horse around

Mark one task as completed by clicking its checkmark.

Observe the footer counter.

Mark a second task as completed.

Observe the footer counter again.

Actual vs Expected Result

Completed

Total

Expected Counter

Actual Result

0

4

4 items left

4 items left

1

4

3 items left

2 items left

2

4

2 items left

1 item left

Expected Calculation

itemsLeft = totalItems - completedItems

Expected state transitions:

0 / 4 completed → 4 items left
1 / 4 completed → 3 items left
2 / 4 completed → 2 items left
3 / 4 completed → 1 item left
4 / 4 completed → 0 items left

The UI should also handle singular/plural wording correctly:

1 item left
2 items left
3 items left

Impact, Severity & Priority

Severity: Medium — Does not block task creation or completion, but displays inaccurate state information.

Priority: P3 — Low — Appears isolated to the footer calculation and does not corrupt underlying task data.

Suspected Area

Potential causes include incorrect array indexing, incorrect filtering of completed-task state, an off-by-one calculation, or incorrect state recalculation after checkbox toggling.

Evidence

Evidence/
├── 01-Counter-Miscalculates-1.png
└── 01-Counter-Miscalculates-2.png

BUG-002 — Backend API Endpoints Return 404 Not Found

Summary

XHR/Fetch requests to the application's learn.json and api endpoints return HTTP 404 Not Found responses.

The browser successfully initiates the requests, but the server fails to resolve the requested resources.

User Perspective

As a software tester analyzing web-network traffic, observing client-side requests followed by 404 Not Found responses indicates a failure in server-side routing, endpoint configuration, or static-resource mapping.

If these resources are required for application initialization or dynamic behavior, the failures can interfere with expected data retrieval or synchronization.

Environment

Category

Details

OS

macOS / Windows / Linux / Android

Browser

Google Chrome

Testing Tool

Chrome DevTools → Network

Network Filter

Fetch/XHR

Application Layer

Web application backend / API layer

Steps to Reproduce

Open the application in Google Chrome.

Launch Developer Tools using F12.

Select the Network tab.

Filter requests by Fetch/XHR.

Load the application or trigger actions that initiate backend requests.

Inspect requests for learn.json and api.

Verify their HTTP status codes.

Actual Result

The server returns:

HTTP 404 Not Found

for requests to:

learn.json

api

The requests are initiated by client-side JavaScript, including:

base.js:137
angular.js:10514

Expected Result

The backend server should resolve the requested routes and return successful responses:

HTTP 200 OK
Content-Type: application/json

along with valid JSON payloads where applicable.

Impact, Severity & Priority

Impact & Severity: High — Affects server-side data retrieval/synchronization and may interfere with application initialization or dynamic rendering.

Priority: P1 — Urgent — Requires immediate server-side routing investigation if these endpoints are required for core operations.

Suspected Areas

Potential causes include:

Missing backend endpoints.

Broken static-file path mapping.

Incorrect API base URL.

Incorrect server rewrite rules.

Missing learn.json resource.

Deployment or environment configuration problems.

Evidence

Evidence/
├── 02-API-Endpoints-Return-404-Not-Found.png
└── 02-API-Endpoints-Return-404-Not-Found.md

Recommended Validation After Fix

BUG-001 — UI Counter Fix

Verify the complete counter matrix:

Completed

Total

Expected

0

4

4 items left

1

4

3 items left

2

4

2 items left

3

4

1 item left

4

4

0 items left

Also verify toggling completion state, deleting completed tasks, adding new tasks, page refreshes, filtering, and singular/plural wording.

BUG-002 — API Endpoint Fix

Verify that:

learn.json returns 200 OK.

api returns the expected successful status.

Response bodies contain valid JSON where applicable.

Related Fetch/XHR requests no longer return 404.

The application behaves correctly after a hard refresh.

Relevant console errors are cleared.

Graceful fallbacks exist when an endpoint is unavailable.

Conclusion

Two separate defects were identified during exploratory testing:

BUG-001 — UI State Calculation: The footer under-reports the number of remaining tasks because the active-item counter is calculated incorrectly.

BUG-002 — Server/API Routing: Requests to learn.json and api return 404 Not Found, indicating a server-side routing, resource-path, or configuration problem.

Both defects should be retested after remediation, with particular attention to state transitions for BUG-001 and endpoint availability/error handling for BUG-002.

Project Structure

Module-3-Buggy-Exploratory/
└── Day-36-TodoList/
    ├── README.md
    └── Defects_&_Bugreports/
        ├── 01-Active-Items-Counter-Miscalculates-Remaining-Tasks.md
        ├── 02-Backend-API-Endpoints-Return-404-Not-Found.md
        └── Evidence/
            ├── 01-Counter-Miscalculates-1.png
            ├── 01-Counter-Miscalculates-2.png
            ├── 02-API-Endpoints-Return-404-Not-Found.png
            └── 02-API-Endpoints-Return-404-Not-Found.md