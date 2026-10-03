# BUG-04 — Submitting Default Dates Returns a Blank Page

**Title:** [Input Validation / Error Handling Defect] Unfilled date fields submit and return an empty page  
**Environment:** https://www.shino.de/parkcalc/  
**Severity:** Medium  
**Priority:** P2 — Normal

## User Perspective

When required entry and leaving dates have not been supplied, the calculator should explain what the user needs to enter and keep the form usable.

## Steps to Reproduce

1. Open https://www.shino.de/parkcalc/.
2. Leave the entry and leaving date fields at their default **MM/DD/YYYY** values.
3. Click **Calculate**.

## Actual Result

The browser navigates to the calculation response, which returns HTTP 200 with an empty document. No validation message or calculator form is shown.

## Expected Result

The calculator should keep the user on a usable form and display a clear validation message requiring valid entry and leaving dates and times.
