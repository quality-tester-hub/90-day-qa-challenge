# Module 3: Day 32 — Exploratory Testing on TestSheepNZ Basic Calculator

## Executive Summary
This session continues **Module 3: Deliberately Buggy Sites & Exploratory Testing** using **Session-Based Test Management (SBTM)** on the [TestSheepNZ Basic Calculator](https://testsheepnz.github.io/BasicCalculator.html)[cite: 2]. The primary goal is to apply heuristic exploratory testing across multiple application builds (Prototype vs. Builds 1–8) to expose type-coercion bugs, state boundary failures, input validation flaws, and integer rounding defects.

Unlike static test suites, testing was executed via session charters targeting mathematical operations, string concatenation modes, and differential build checks[cite: 2].

---

## Target Site & Architecture Overview

* **Target URL:** `https://testsheepnz.github.io/BasicCalculator.html`[cite: 2]
* **Baseline Target (Prototype):** Serves as ground truth (operates cleanly according to spec)[cite: 2].
* **Defect Targets (Builds 1–8):** Contain deliberate logic, arithmetic, and validation defects[cite: 2].
* **Supported Operations:** `Add`, `Subtract`, `Multiply`, `Divide`, and `Concatenate`[cite: 2].
* **Special Controls:** `Integers only` checkbox (rounds/truncates decimal outputs)[cite: 2].

---

## Exploratory Session Charters

### Charter 1: Type & Input Boundaries (Mathematical Operations)
* **Heuristic:** Input stress & data types[cite: 2].
* **Scope:** Test string inputs, negative numbers, decimals, zero denominators ($x / 0$), extremely large numbers, and empty inputs across Builds 1–8 to verify numerical validation triggers[cite: 2].

### Charter 2: String Concatenation Mode
* **Heuristic:** Mode switching & state disabling[cite: 2].
* **Scope:** Select "Concatenate", verify that inputs are treated strictly as strings, check that non-numeric characters are preserved, and confirm that the integer checkbox is disabled/ignored[cite: 2].

### Charter 3: Integer Toggle & Rounding Precision
* **Heuristic:** Data truncation & rounding algorithms[cite: 2].
* **Scope:** Perform operations resulting in floating-point values (e.g., $5 / 2 = 2.5$) with the `Integers only` checkbox enabled and disabled to evaluate truncation/rounding mechanics[cite: 2].

### Charter 4: Build Comparison (Builds 1–8 vs. Prototype Baseline)
* **Heuristic:** Differential build testing[cite: 2].
* **Scope:** Execute identical calculation sets against the Prototype baseline versus Builds 1–8 to uncover build-specific regressions and logic bugs[cite: 2].

---

## Defect Inventory & Key Findings

| Bug ID | Title | Build | Category | Severity | Priority | File |
|---|---|---|---|---|---|---|
| **BUG-01** | Addition performs string concatenation ($16 + 4 = 164$) | Build 2 | Calculation / Type Coercion | High | P1 | `01-Outputting Incorrect Calculation...md` |
| **BUG-02** | Incomplete field validation & spurious error during Concatenate | Build 3 | Validation / UX Logic | Medium | P2 | `02-Incomplete Field Validation.md` |

---

## Detailed Bug Reports

### 1. [Calculation / Logic Defect] Addition Operation Performs String Concatenation
* **Build:** Build 2[cite: 2]
* **File:** `Defects_&_Bugreports/01-Outputting Incorrect Calculation...md`
* **Severity / Priority:** High / P1[cite: 2]
* **User Perspective:** As a user running functional arithmetic tests, selecting `Add` for inputs `16` and `4` should yield `20`[cite: 2]. Outputting `164` demonstrates a fundamental type-coercion defect where strings are concatenated instead of added numerically[cite: 2].
* **Actual Result:** The `Answer` field displays `164` ("16" + "4")[cite: 2].
* **Expected Result:** Inputs should be parsed as numbers (`parseFloat()`) to output `20`[cite: 2].
* **Evidence:** Screenshot in `Defects_&_Bugreports/Screenshots/01-Outputting Incorrect Calculation...png`

### 2. [Validation / Logic Defect] Spurious Error & Incomplete Field Validation During Concatenate
* **Build:** Build 3[cite: 2]
* **File:** `Defects_&_Bugreports/02-Incomplete Field Validation.md`
* **Severity / Priority:** Medium / P2[cite: 2]
* **User Perspective:** Entering special characters into both fields under `Concatenate` should either suppress numerical checks or validate both fields properly[cite: 2]. Instead, Build 3 flags `Number 1 is not a number` while evaluating `4` as the answer and ignoring field 2 (`+$@`)[cite: 2].
* **Actual Result:** Inline red error `Number 1 is not a number` appears, suppressing field 2 validation while simultaneously printing `4` into the `Answer` field[cite: 2].
* **Expected Result:** `Concatenate` should bypass numeric validation entirely, OR validate both fields without printing partial calculation results alongside active error states[cite: 2].

---

## Project Structure

Module-3-Deliberately-Buggy Sites_Exploratory-Testing
Day-32-Basic-calculator/
├── README.md
└── Defects_&_Bugreports/
    ├── 01-Outputting Incorrect Calculation...md
    ├── 02-Incomplete Field Validation.md
    └── Screenshots/
        └── 01-Outputting Incorrect Calculation...png