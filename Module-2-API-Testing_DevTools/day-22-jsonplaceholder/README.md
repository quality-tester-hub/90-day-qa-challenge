## 📅 Day 22: JSONPlaceholder Integration & Edge Testing

### 🎯 Overview & Objectives
Executed an end-to-end integration and edge-case test suite against the open-source **JSONPlaceholder REST API** (`https://jsonplaceholder.typicode.com`). The suite validates key CRUD operations (GET, POST, PATCH, PUT, DELETE), handles dynamic runtime variable chaining, executes volume stress simulations, and verifies boundary error handling.

---

### 🧪 Test Execution Matrix (Final Summary)

* **Total Requests Executed:** 9
* **Total Assertions Executed:** 28 / 28 Passed (100%)
* **Execution Duration:** 3.3 seconds
* **Environment Name:** `day 22 JSONPlaceholder`

| # | Request Name | Method | Endpoint | HTTP Status | Test Results | Key Verification Objective |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **01** | `GET /posts` | `GET` | `/posts` | `200 OK` | ✅ 3/3 Passed | Asserts full catalog array return (100 items). |
| **02** | `POST /posts` | `POST` | `/posts` | `201 Created` | ✅ 3/3 Passed | Creates new record; extracts and sets dynamic `postId`. |
| **03** | `POST Volume Simulation` | `POST` | `/posts` | `201 Created` | ✅ 3/3 Passed | Simulates high-volume payload creation scaling bounds. |
| **04** | `GET Post Comments` | `GET` | `/posts/1/comments` | `200 OK` | ✅ 4/4 Passed | Parses comment thread; extracts dynamic `commentId`. |
| **05** | `DELETE Comment` | `DELETE` | `/comments/{{commentId}}` | `200 OK` | ✅ 2/2 Passed | Verifies successful deletion/moderation of target comment. |
| **06** | `PATCH Update Photo` | `PATCH` | `/photos/{{photoId}}` | `200 OK` | ✅ 3/3 Passed | Validates partial field modification on target photo entity. |
| **07** | `PUT Replace User` | `PUT` | `/users/{{userId}}` | `200 OK` | ✅ 5/5 Passed | Performs full record entity replacement. |
| **08** | `GET Baseline Users` | `GET` | `/users` | `200 OK` | ✅ 3/3 Passed | Asserts system baseline state (10 default user records). |
| **09** | `GET Non-Existent User` | `GET` | `/users/1001` | `404 Not Found` | ✅ 2/2 Passed | Boundary/stress check ensuring gracefully handled `404` (no server `500` crash). |

---

### 🔍 Root Cause Analysis (RCA): Initial Run Failures & Fixes

During the initial collection run, **6 tests failed across Requests 06 and 07**:
* **Request 06 (`PATCH /photos/{{photoId}}`):** Failed status and payload ID assertions.
* **Request 07 (`PUT /users/{{userId}}`):** Failed with a `500 Internal Server Error`.

#### **Root Cause:**
The environment scope lacked default definitions for `photoId` and `userId`. Consequently, Postman failed to substitute the variables at runtime, sending literal URL-encoded string templates (`%7B%7BphotoId%7D%7D` and `%7B%7BuserId%7D%7D`) to the remote backend. The server could not parse non-numeric primary keys, resulting in request malformation and server-side errors.

#### **Resolution Applied:**
1. Explicitly configured and saved `photoId` (set to `1`) and `userId` (set to `1`) inside the `day 22 JSONPlaceholder` Postman Environment.
2. Hardened test scripts to ensure all environment key-value pairs are properly resolved before executing subsequent workflow steps.
3. Re-ran the full collection runner suite, successfully achieving a **28/28 green assertion passing state**.

---

### 💡 Key Lessons Learned & QA Takeaways

1. **Unresolved Variable Safeguards:** Always verify initial and current variable scopes in Postman before running automated suites. A literal `{{variable}}` string sent over HTTP indicates environment context omission.
2. **Graceful Boundary Validation:** Request `09` returning a `404 Not Found` demonstrates proper API contract enforcement under boundary testing (>1,000 users query), verifying the backend degrades gracefully without throwing unhandled `500` crashes.
3. **Resilience Over Failure:** Test failures are diagnostic tools, not setbacks. Debugging runtime issues builds real-world automation capabilities far more effectively than flawless initial executions.