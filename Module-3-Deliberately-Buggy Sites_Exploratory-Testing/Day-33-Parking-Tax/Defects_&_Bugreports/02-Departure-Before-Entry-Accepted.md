# BUG-02 — Departure Before Entry Produces a Negative-Duration Quote

**Title:** [Input Validation / Calculation Defect] Calculator accepts a leaving time earlier than the entry time  
**Environment:** https://www.shino.de/parkcalc/  
**Severity:** Medium  
**Priority:** P2 — Normal

## User Perspective

A parking-cost estimate is meaningful only when the vehicle's leaving timestamp is at or after its entry timestamp. The calculator should identify and reject an invalid interval instead of presenting a fare.

## Steps to Reproduce

1. Open the Parking Cost Calculator.
2. Select **Valet Parking**.
3. Set the entry to **10/03/2026, 08:00 AM**.
4. Set the leaving time to **10/03/2026, 07:00 AM**.
5. Click **Calculate**.

## Actual Result

The result is **$0.00** and the duration is displayed as **(-1 Days, 23 Hours, 0 Minutes)**.

## Expected Result

The calculator should not return a quote for a negative duration. It should display a clear validation message asking the user to enter a leaving date and time that is not earlier than the entry timestamp.
