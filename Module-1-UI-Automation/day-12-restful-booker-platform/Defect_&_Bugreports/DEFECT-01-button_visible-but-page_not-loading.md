User Perspective: As a user navigating through the application, clicking visible menu items like "Amenities" only to remain stuck on a frozen page creates a confusing experience. When the URL updates to reflect the new route but the underlying page content completely fails to load, it points to a routing failure or missing backend data signal.

Bug Report: Button Is Visible But Page Not Loading
1. Title: [Routing / Backend Defect] Navigation route updates URL but target page content fails to load

2. Environment:

OS: macOS / Windows / Linux / Android

Browser/App: Google Chrome / Firefox / Modern Web Browser

Device: Desktop / Mobile

Build/URL: Hotel / Property Management Portal (/amenities)

3. Steps to Reproduce:

Authenticate and navigate to the main dashboard menu.

Locate the navigation options (Rooms, Booking, Location, Contact, Admin, Amenities).

Click on the Amenities button/option.

Observe the address bar URL and page content response.

4. Actual Result:

The button is clearly visible and updates the browser URL, but the view remains stranded on a blank or unrendered state as if the backend server failed to send a response.

5. Expected Result:

Clicking the Amenities option should immediately fetch the required backend data and smoothly render the corresponding page content.

6. Severity: High (Blocks user navigation and functional access to key features).

7. Priority: P1 - Urgent (Requires frontend route inspection and backend response validation).

8. Evidence: https://www.loom.com/share/4dfd24ac9d5f4997b55058163aa649bb