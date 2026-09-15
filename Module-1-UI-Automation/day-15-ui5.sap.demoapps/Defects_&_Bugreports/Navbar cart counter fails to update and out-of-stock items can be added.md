User Perspective: As a shopper adding items to my cart, it is confusing when the top navbar cart counter fails to update, giving no visual feedback that items are being added. Furthermore, allowing out-of-stock items to be added to the cart without showing an error message leads to frustration during checkout when those items inevitably fail.

Bug Report: Shopping Cart Badge Counter Unresponsive & Out-Of-Stock Items Allowed
1. Title: [Cart / UI Defect] Cart counter fails to update on item addition and allows out-of-stock product additions without validation

2. Environment:

OS: macOS / Windows / Linux / Android

Browser/App: Google Chrome / Firefox / Modern Web Browser

Device: Desktop / Mobile

Build/URL: E-Commerce Shopping Cart & Header Component

3. Steps to Reproduce:

Navigate to the product catalog page.

Click "Add to Cart" on any available product and observe the top navigation bar cart icon/badge.

Locate an out-of-stock product item.

Attempt to add the out-of-stock item to the shopping cart.

4. Actual Result:

The top cart counter badge fails to reflect added items, and out-of-stock products are added to the cart without triggering an error or restriction notice.

5. Expected Result:

The top cart counter should dynamically update its badge count with every added item, and out-of-stock products should be disabled or trigger a clear error message preventing cart addition.

6. Severity: Medium (Degrades cart feedback and inventory validation UX).

7. Priority: P3 - Low (Can be scheduled for future sprint refinement).

8. Evidence: https://www.loom.com/share/6f288050fb1c4e09892a964e16cf6d1b