# BUG-03 — Parking Lot Selection Resets After Calculation

**Title:** [UI State / Usability Defect] Selected parking lot reverts to Valet while the result belongs to another lot  
**Environment:** https://www.shino.de/parkcalc/  
**Severity:** Medium  
**Priority:** P2 — Normal

## User Perspective

After calculating a fare, users should be able to see which parking lot the quote applies to. Losing the selected lot makes the displayed result ambiguous and can lead to incorrect follow-up calculations.

## Steps to Reproduce

1. Open the Parking Cost Calculator.
2. Select **Economy Parking**.
3. Set the entry to **10/03/2026, 08:00 AM**.
4. Set the leaving time to **10/03/2026, 08:00 PM**.
5. Click **Calculate**.

## Actual Result

The calculator reports **$9.00** for 12 hours, but the parking-lot dropdown shows **Valet Parking** after the result loads.

## Expected Result

The dropdown should continue to show **Economy Parking** after calculation, or the result should otherwise clearly identify the lot used to produce the quote.
