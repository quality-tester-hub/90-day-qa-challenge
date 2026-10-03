# BUG-01 — Economy Lot Hourly Charges Exceed the Published Daily Maximum

**Title:** [Pricing / Calculation Defect] Economy Parking returns a charge above its $9.00 daily maximum  
**Environment:** https://www.shino.de/parkcalc/  
**Severity:** High  
**Priority:** P1 — Urgent

## User Perspective

A driver choosing Economy Parking should not be charged more than the published $9.00 daily maximum for a stay within one day.

## Steps to Reproduce

1. Open the Parking Cost Calculator.
2. Select **Economy Parking**.
3. Enter an entry time of **10/03/2026, 08:00 AM**.
4. Enter a leaving time of **10/03/2026, 12:30 PM**.
5. Click **Calculate**.

## Actual Result

The calculator reports **$10.00** for a 4-hour, 30-minute stay.

## Expected Result

The displayed Economy Parking rate is **$2.00 per hour** with a **$9.00 daily maximum**. The hourly calculation reaches $10.00 at five billable hours, so the daily cap should limit the quote to **$9.00**.
