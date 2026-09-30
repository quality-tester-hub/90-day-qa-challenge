# Day 30 — Random User DevTools & Module 2 Completion

## Overview
Day 30 focuses on using Chrome DevTools Console and Network Overrides to work with live API data directly from the browser, without changing or creating any backend code. 

This day also officially marks the **final completion and wrap-up of Module 2 (API Testing & DevTools)**. Across this module, we covered comprehensive API testing workflows, automated collection runs, real-time network interception, performance profiling, DOM automation, and live client-side data manipulation.

The Day 30 exercise uses Random User as the target application and demonstrates two practical DevTools workflows:
1. Fetching and displaying user data through a Console script.
2. Intercepting and modifying an API response using Chrome DevTools Local Overrides.

---

## Objectives
* Practice working with API data directly from Chrome DevTools.
* Use the DevTools Console to fetch and process Random User API data.
* Inspect live network requests and identify the `/api/` endpoint.
* Use Local Overrides to replace a live API response with locally modified test data.
* Verify that manipulated response data renders properly on the frontend.
* Understand how frontend behavior can be tested with controlled network responses without backend changes.
* **Wrap up and finalize Module 2: API Testing & DevTools.**

---

## Target Application
* **Website:** `https://randomuser.me/`
* **API:** Random User API
* The exercises use the live Random User application and its API response as the source of test data.

---

## Final Module 2 Project Structure
```text
Module-2-API-Testing_DevTools/
└── day-30-randomuser-devtools/
    ├── console-scripts/
    │   └── fetch-user-table.js
    ├── network-overrides/
    │   └── mocked-user.json
    └── README.md