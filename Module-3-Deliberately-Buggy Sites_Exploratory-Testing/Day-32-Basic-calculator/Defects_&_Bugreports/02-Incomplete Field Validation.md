* **User Perspective:** As a user entering non-numeric characters into both calculator fields, submitting the form should either validate both invalid fields simultaneously or gracefully handle string concatenation. On Build 3, when entering `$4$` in field 1 and `+$@` in field 2 under the `Concatenate` operation, the system displays a conflicting error message (`Number 1 is not a number`) while simultaneously evaluating the input and printing `4` as the answer.

---

### **Bug Report: Incomplete Field Validation and Spurious Error Message During Concatenate Operation**

* **1. Title:** [Validation / Logic Defect] Form validation flags `Number 1 is not a number` while suppressing field 2 validation and outputting partial results during `Concatenate`
* **2. Environment:**
* **OS:** macOS / Windows / Linux / Android
* **Browser/App:** Google Chrome / Firefox / Modern Web Browser


* **Device:** Desktop / Mobile
* **Build/URL:** `testsheepnz.github.io/BasicCalculator.html` (Build 3)




* **3. Steps to Reproduce:**
1. Navigate to `[https://testsheepnz.github.io/BasicCalculator.html](https://testsheepnz.github.io/BasicCalculator.html)`.


2. Select **Build 3** from the Build dropdown menu.


3. Enter non-numeric special characters (e.g., `$4$`) into the **First number** input field.


4. Enter non-numeric special characters (e.g., `+$@`) into the **Second number** input field.


5. Select **Concatenate** from the **Operation** dropdown menu.


6. Click the **Calculate** button.




* **4. Actual Result:**
* The system displays an inline red error message reading `Number 1 is not a number`, failing to validate or report that **Second number** (`+$@`) is also non-numeric. Simultaneously, the system computes and prints `4` into the **Answer** field despite the active validation error.




* **5. Expected Result:**
* When `Concatenate` is selected, the application should either treat all inputs as raw strings without firing numerical validation errors, OR if numerical validation is enforced, it should evaluate both fields and present comprehensive error feedback (`Number 1 and Number 2 are not numbers`) without outputting partial results.


* **6. Severity:** **Medium** (Confusing error messaging and inconsistent validation handling).
* **7. Priority:** **P2 - Normal** (Requires aligning input validation rules with the selected operation type and aggregating form error messages).
* **8. Evidence:** Screenshot capturing **First number:** `$4$`, **Second number:** `+$@`, **Operation:** `Concatenate`, displaying error `Number 1 is not a number` alongside **Answer:** `4` on Build 3.