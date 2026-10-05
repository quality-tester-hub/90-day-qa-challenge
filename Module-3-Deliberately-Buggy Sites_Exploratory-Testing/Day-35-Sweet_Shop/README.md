# Day 35 — Exploratory Testing on Sweet Shop

## Overview

Day 35 uses exploratory testing and browser DevTools on the [Sweet Shop](https://sweetshop.netlify.app/) storefront. One reproducible defect was found in the catalog: the Wham Bars product image does not load.

## Defect Inventory

| Bug ID | Title | Category | Severity | Priority | Report |
| --- | --- | --- | --- | --- | --- |
| BUG-01 | Wham Bars product image fails to load | UI / Broken Asset | Low | P3 — Low | [01-Wham-Bars-Product-Image-Fails-to-Load.md](Defects_&_Bugreports/01-Wham-Bars-Product-Image-Fails-to-Load.md) |

## BUG-01 — Wham Bars Product Image Fails to Load

- **Steps:** Open the catalog at `/sweets` and scroll to the Wham Bars product card.
- **Actual:** The product image is broken. DevTools shows its request to `/img/whan.jpg` returns HTTP 404; the image element has `naturalWidth` 0.
- **Expected:** The Wham Bars image should load in the catalog card.
- **Evidence:** [DevTools evidence](Defects_&_Bugreports/Evidence/01-Wham-Bars-Image-DevTools-Evidence.md) and [screenshot](Defects_&_Bugreports/Evidence/01-Wham-Bars-Image-Broken.jpg).

## Project Structure

```text
Day-35-Sweet_Shop/
├── README.md
└── Defects_&_Bugreports/
    ├── 01-Wham-Bars-Product-Image-Fails-to-Load.md
    └── Evidence/
        ├── 01-Wham-Bars-Image-DevTools-Evidence.md
        └── 01-Wham-Bars-Image-Broken.jpg
```
