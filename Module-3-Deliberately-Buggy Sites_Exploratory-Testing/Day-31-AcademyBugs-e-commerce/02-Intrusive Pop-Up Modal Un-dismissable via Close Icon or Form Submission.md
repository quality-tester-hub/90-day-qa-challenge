User Perspective: As a user encountering an un-dismissable pop-up modal, being unable to close it via the close (X) icon or submit it successfully creates a completely game-breaking experience. When an intrusive modal gets stuck on screen and traps pointer focus, it acts as a UI wall that prevents access to the rest of the application.

Bug Report: Intrusive Pop-Up Modal Un-dismissable via Close Icon or Form Submission
1. Title: [UI / Modal Defect] Un-dismissable modal overlay traps pointer focus, ignoring close button triggers and form submissions

2. Environment:

OS: macOS / Windows / Linux / Android

Browser/App: Google Chrome / Firefox / Modern Web Browser

Device: Desktop / Mobile

Build/URL: Core Application Interface / Active Screen Overlay

3. Steps to Reproduce:

Navigate to the target page or trigger the workflow that invokes the pop-up modal.

Attempt to click the close (X) symbol in the upper corner of the modal overlay.

Enter input or select options within the modal form and click the submit button.

Observe whether the modal dismisses or clears from the DOM tree.

4. Actual Result:

The pop-up modal remains frozen on screen, ignoring close button event listeners and form submit triggers, effectively locking out access to the underlying UI.

5. Expected Result:

Clicking the close (X) icon or submitting valid form inputs should dismiss the modal overlay, restore pointer events to the main page, and unblock the user workflow.

6. Severity: Critical (Completely blocks user interaction and prevents navigation across the entire application).

7. Priority: P1 - Urgent (Requires immediate fix to modal state lifecycle, event listener bindings, and backdrop portal dismiss logic).

8. Evidence: Visual observation / DOM inspection capturing trapped modal state (aria-modal="true") failing to detach on click events.