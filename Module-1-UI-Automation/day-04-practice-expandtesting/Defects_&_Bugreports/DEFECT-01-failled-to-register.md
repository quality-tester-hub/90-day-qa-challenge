* **User Perspective:** As a user registering for an account, it is frustrating when the signup process appears completely successful, but clicking the login button immediately triggers a failure or unexpected blocking issue. It is especially tricky because automated UI tests can falsely pass based on superficial elements, meaning human manual testing is essential to catch real post-registration authentication failures.

---

### **Bug Report: Post-Registration Login Failure Despite Passing Automation**

* **1. Title:** [Authentication / Flow Defect] Post-registration login action fails despite successful signup and passing automation tests
* **2. Environment:**
* **OS:** macOS / Windows
* **Browser/App:** Google Chrome / Modern Web Browser
* **Device:** Desktop
* **Build/URL:** User Registration & Login Module


* **3. Steps to Reproduce:**
1. Navigate to the registration page and complete a new user signup flow.
2. Confirm that registration completes successfully and navigate to the login interface.
3. Enter valid credentials and click the login button.
4. Observe the system response and execution flow (while running manual check or comparing against automated test outcomes).


* **4. Actual Result:**
* The login action fails or errors out immediately after registration, preventing access even though automated test scripts report a passing status for the flow.


* **5. Expected Result:**
* Newly registered users should be able to log in smoothly and successfully gain access to their dashboard without encountering authentication or session errors.


* **6. Severity:** **High** (Blocks user onboarding and core authentication entry point).
* **7. Priority:** **P1 - Urgent** (Requires immediate investigation to ensure new users can access the platform).
* **8. Evidence:** Screenshots