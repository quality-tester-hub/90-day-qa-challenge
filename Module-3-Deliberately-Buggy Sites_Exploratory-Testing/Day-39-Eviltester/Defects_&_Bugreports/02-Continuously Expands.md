* **User Perspective:** As a user navigating the interface, interactive elements should maintain consistent dimensions unless explicitly hovered or clicked. On this page, a specific button continuously grows in size over time without any user interaction or viewport zooming, pushing adjacent layout elements out of alignment and degrading page usability.

---

### **Bug Report: UI Button Continuously Expands without User Interaction**

* **1. Title:** [UI / Layout Defect] Dynamic button element continuously increases in scale/size automatically without user input
* **2. Environment:**
* **OS:** macOS / Windows / Linux
* **Browser/App:** Google Chrome / Modern Web Browser
* **Device:** Desktop / Mobile
* **Build/URL:** Practice Testing Website (Exploratory Testing Page)


* **3. Steps to Reproduce:**
1. Navigate to the practice testing page containing the unstable button element.
2. Observe the initial state and dimensions of the button.
3. Leave the page idle without hovering over or clicking the target button.
4. Monitor the button's scale and layout impact over several seconds.


* **4. Actual Result:**
* The target button continually expands in height and width automatically (driven by an unchecked inline script or timer loop), breaking the visual layout while the rest of the page remains static.


* **5. Expected Result:**
* Buttons should maintain fixed, stable CSS dimensions (`width`/`height`) and only animate predictably upon explicit CSS state triggers (`:hover`, `:active`) or intended user actions.


* **6. Severity:** **Medium** (Disrupts visual layout and usability, making surrounding elements difficult to click).
* **7. Priority:** **P2 - Normal** (Requires clearing unintended `setInterval`/CSS keyframe scaling loops).
* **8. Evidence:** Refer to Consolidated Evidence Section at end of document.

---

### **Evidence & Artifacts**

* **Loom Video Recording:** [https://www.loom.com/share/c98f14c4324d41f994146819f565dfab](https://www.loom.com/share/c98f14c4324d41f994146819f565dfab)