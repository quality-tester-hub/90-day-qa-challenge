# Module 3: Day 33 — Exploratory Testing on Parking Cost Calculator

## Executive Summary

Day 33 continues **Module 3: Deliberately Buggy Sites & Exploratory Testing** with exploratory testing of the [Parking Cost Calculator](https://www.shino.de/parkcalc/). The session focused on parking-rate boundaries, entry/exit chronology, form state after calculation, and incomplete input handling.

Four reproducible defects were documented. The checks used the rates displayed on the page as the expected behavior and ordinary date/time values unless the charter specifically tested invalid input.

---

## Target Site & Rates

- **Target URL:** https://www.shino.de/parkcalc/
- **Application:** Parking Cost Calculator
- **Lots tested:** Valet, Short-Term, Economy, Long-Term Garage, and Long-Term Surface.
- **Relevant published rates:** Economy Parking is $2.00 per hour with a $9.00 daily maximum; other lots also publish daily caps. The page states that entry and leaving dates and times are required.

---

## Exploratory Session Charters

| Charter | Focus | Result |
| --- | --- | --- |
| Rate Cap Boundary | Compare accrued hourly charges against the Economy daily maximum | 🐛 BUG-01 |
| Entry/Exit Chronology | Submit an exit timestamp earlier than the entry timestamp | 🐛 BUG-02 |
| Post-Calculation State | Check whether the selected lot remains visible with its quote | 🐛 BUG-03 |
| Required Date Inputs | Submit the calculator with its default date values unchanged | 🐛 BUG-04 |
| Rate and Duration Sampling | Check listed lots at short, daily, and weekly durations | Findings recorded above |

---

## Defect Inventory

| Bug ID | Title | Category | Severity | Priority | Report |
| --- | --- | --- | --- | --- | --- |
| **BUG-01** | Economy hourly charge exceeds the published daily maximum | Pricing / Calculation | High | P1 | [01-Economy-Lot-Exceeds-Daily-Maximum.md](Defects_&_Bugreports/01-Economy-Lot-Exceeds-Daily-Maximum.md) |
| **BUG-02** | Departure before entry produces a zero-cost negative-duration quote | Input Validation / Calculation | Medium | P2 | [02-Departure-Before-Entry-Accepted.md](Defects_&_Bugreports/02-Departure-Before-Entry-Accepted.md) |
| **BUG-03** | Selected parking lot reverts to Valet after calculation | UI State / Usability | Medium | P2 | [03-Parking-Lot-Selection-Resets-After-Calculation.md](Defects_&_Bugreports/03-Parking-Lot-Selection-Resets-After-Calculation.md) |
| **BUG-04** | Submitting default dates returns a blank page without validation | Input Validation / Error Handling | Medium | P2 | [04-Blank-Dates-Return-Empty-Page.md](Defects_&_Bugreports/04-Blank-Dates-Return-Empty-Page.md) |

## Detailed Findings

### BUG-01 — Economy Lot Exceeds Published Daily Maximum

- **Severity / Priority:** High / P1
- **Steps:** Select Economy Parking; enter 10/03/2026 08:00 AM as entry and 10/03/2026 12:30 PM as exit; calculate.
- **Actual:** The calculator reports $10.00 for 4 hours and 30 minutes.
- **Expected:** Economy is listed at $2.00 per hour with a $9.00 daily maximum. Since the hourly charge reaches $10.00 at five billable hours, the quote should be capped at $9.00.
- **Report:** [BUG-01 full report](Defects_&_Bugreports/01-Economy-Lot-Exceeds-Daily-Maximum.md)

### BUG-02 — Departure Before Entry Is Accepted

- **Severity / Priority:** Medium / P2
- **Steps:** Select Valet Parking; enter 10/03/2026 08:00 AM as entry and 10/03/2026 07:00 AM as exit; calculate.
- **Actual:** The calculator returns $0.00 and displays a duration of -1 day, 23 hours.
- **Expected:** Reject the invalid interval with a clear validation message; do not present a fare for negative parking duration.
- **Report:** [BUG-02 full report](Defects_&_Bugreports/02-Departure-Before-Entry-Accepted.md)

### BUG-03 — Parking Lot Selection Resets After Calculation

- **Severity / Priority:** Medium / P2
- **Steps:** Select Economy Parking; enter 10/03/2026 08:00 AM as entry and 10/03/2026 08:00 PM as exit; calculate.
- **Actual:** The result is $9.00 for Economy Parking, but the dropdown resets to Valet Parking.
- **Expected:** Preserve the selected lot after calculation, or clearly identify the lot used for the quote.
- **Report:** [BUG-03 full report](Defects_&_Bugreports/03-Parking-Lot-Selection-Resets-After-Calculation.md)

### BUG-04 — Default Dates Return a Blank Page

- **Severity / Priority:** Medium / P2
- **Steps:** Open the calculator and click Calculate without replacing the default MM/DD/YYYY date values.
- **Actual:** The submit request returns HTTP 200 with an empty document; no form or validation message is displayed.
- **Expected:** Keep the form available and explain that valid entry and leaving dates and times are required.
- **Report:** [BUG-04 full report](Defects_&_Bugreports/04-Blank-Dates-Return-Empty-Page.md)

---

## Testing Approach

The session used charter-based exploratory testing and boundary analysis. Each finding was reproduced in the live calculator using its visible controls, and the resulting fare, duration, selected lot, or response state was compared with the page's rate information and the expected form behavior.

## Project Structure

```text
Day-33-Parking-Tax/
├── README.md
└── Defects_&_Bugreports/
    ├── 01-Economy-Lot-Exceeds-Daily-Maximum.md
    ├── 02-Departure-Before-Entry-Accepted.md
    ├── 03-Parking-Lot-Selection-Resets-After-Calculation.md
    └── 04-Blank-Dates-Return-Empty-Page.md
```

## Day 33 Outcome

Day 33 resulted in four documented defects covering fare calculation, chronology validation, post-submit selection state, and empty-input handling. This session applies exploratory QA techniques to financial calculations and the user-visible consistency of form results.
