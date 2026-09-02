* **User Perspective:** As a tester trying to bypass a native basic auth prompt using embedded URL credentials, it is frustrating to run straight into a hard browser block (`ERR_TOO_MANY_RETRIES`). Instead of letting me access the page or failing gracefully, the browser gets trapped in an infinite redirection loop, completely locking me out of the site.

---

### **Bug Report: Infinite Redirection Loop on URL-Embedded Basic Auth**

* **1. Title:** [Network / Authentication Defect] URL-embedded credentials trigger `ERR_TOO_MANY_RETRIES` infinite redirection loop
* **2. Environment:**
* **OS:** macOS / Windows
* **Browser/App:** Google Chrome / Modern Web Browser
* **Device:** Desktop
* **Build/URL:** `[https://admin:admin@the-internet.herokuapp.com/basic_auth](https://admin:admin@the-internet.herokuapp.com/basic_auth)`


* **3. Steps to Reproduce:**
1. Construct a target URL with embedded basic authentication credentials (e.g., `[https://username:password@domain.com/path](https://username:password@domain.com/path)`).
2. Paste the URL directly into the browser address bar and press Enter.
3. Observe the browser behavior and network request routing.


* **4. Actual Result:**
* The browser enters an infinite redirect loop, ultimately failing with a `"This site can't be reached"` error displaying `ERR_TOO_MANY_RETRIES`.


* **5. Expected Result:**
* The browser or application should cleanly authenticate using the provided parameters or handle the credential string securely without cascading into an endless redirection loop.


* **6. Severity:** **Medium** (Blocks access to pages utilizing standard URL-based auth parsing).
* **7. Priority:** **P2 - Normal** (Standard browser/auth handling anomaly).
* **8. Evidence:** ![ERR_TOO_MANY_RETRIES Error](./screenshots/DEFECT-001-browser-error.png)