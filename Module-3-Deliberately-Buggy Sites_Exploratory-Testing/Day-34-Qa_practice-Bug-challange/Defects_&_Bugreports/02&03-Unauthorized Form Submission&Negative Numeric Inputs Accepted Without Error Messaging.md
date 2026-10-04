* **User Perspective:** As a software tester evaluating registration form boundaries and data validation, two distinct defects are observed during form submission:

1. **Form Submission Bypass:** Clicking the **Register** button triggers a successful submission attempt even while the "I agree with the terms and conditions" checkbox remains unchecked (or disabled), bypassing mandatory agreement validation.
2. **Negative Value / Boundary Validation Bypass:** Entering negative numeric values (e.g., `-10`) into input fields (such as phone number or age/amount fields) bypasses client-side and server-side validation without displaying an error or warning message, leading to invalid data state persistence.

---

### **Bug Report 1: "Terms and Conditions" Checkbox Bypass Allows Unauthorized Form Submission**

* **1. Title:** [Validation / Logic Defect] Registration form submits successfully without requiring agreement to "Terms and Conditions"
* **2. Environment:**
* **OS:** macOS / Windows / Linux / Android
* **Browser/App:** Google Chrome / Modern Web Browser
* **Device:** Desktop / Mobile
* **Build/URL:** `qa-practice.razvanvancea.ro/bugs-form.html`


* **3. Steps to Reproduce:**
1. Navigate to the registration form page.
2. Populate all required text fields (e.g., Phone number, Country, Email, Password).
3. Leave the **"I agree with the terms and conditions"** checkbox unchecked (or unselected).
4. Click the **Register** button.
5. Observe the form submission behavior and response.


* **4. Actual Result:**
* The form bypasses validation, accepts the registration attempt, and submits successfully without enforcing terms agreement.


* **5. Expected Result:**
* Form submission should be blocked, displaying an inline validation message (e.g., *"You must accept the terms and conditions to proceed"*) or maintaining a disabled submit button state until the checkbox is explicitly checked.


* **6. Severity:** **High** (Legal and business logic vulnerability allowing users to register without agreeing to legal terms).
* **7. Priority:** **P1 - Urgent** (Requires immediate front-end form state check and back-end payload validation fix).
* **8. Evidence:** Recorded video evidence demonstrating form submission with unchecked terms checkbox.

---

### **Bug Report 2: Unvalidated Negative Numeric Inputs Accepted Without Error Messaging**

* **1. Title:** [Validation / Boundary Defect] Registration fields accept negative numeric values without triggering validation warning messages
* **2. Environment:**
* **OS:** macOS / Windows / Linux / Android
* **Browser/App:** Google Chrome / Modern Web Browser
* **Device:** Desktop / Mobile
* **Build/URL:** `qa-practice.razvanvancea.ro/bugs-form.html`


* **3. Steps to Reproduce:**
1. Navigate to the registration form page.
2. Enter negative numeric values (e.g., `-1`, `-10`) into fields expecting positive integers (e.g., Phone number / Age / Amount).
3. Fill out remaining fields and click **Register**.
4. Observe field validation state and application response.


* **4. Actual Result:**
* The application accepts negative input values without displaying any validation warnings or error prompts.


* **5. Expected Result:**
* Input fields should reject negative numbers, triggering an explicit validation alert (e.g., *"Please enter a valid positive number"*) and blocking form submission until corrected.


* **6. Severity:** **Medium** (Corrupts database data integrity and creates down-stream processing errors).
* **7. Priority:** **P2 - Normal** (Requires implementing HTML5 `min="0"` constraints, Regex validation, and backend numeric sanitation).
* **8. Evidence:** (https://www.loom.com/share/faf6891a82324c7298cadf5073153a91)