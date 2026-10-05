# BUG-01 — Wham Bars Product Image Fails to Load

**Title:** [UI / Broken Asset Defect] Wham Bars image is missing from the product catalog  
**Severity:** Low  
**Priority:** P3 — Low

## User Perspective

As a shopper browsing the catalog, I expect each product card to display its product image so I can visually identify the item before adding it to my basket.

## Environment

- **OS:** macOS
- **Browser:** Chromium-based browser (browser DevTools)
- **Device:** Desktop
- **URL:** https://sweetshop.netlify.app/sweets
- **Test date:** 2026-10-05

## Steps to Reproduce

1. Open https://sweetshop.netlify.app/sweets.
2. Scroll to the **Wham Bars** product card.
3. Observe the image area and inspect its image request in DevTools Network or Console.

## Actual Result

The Wham Bars card displays a broken-image icon and the image's `alt` text instead of the product image. The image request to `https://sweetshop.netlify.app/img/whan.jpg` returns HTTP 404. In DevTools, the image element reports `complete: true` and `naturalWidth: 0`.

## Expected Result

The Wham Bars product image should load and display in the catalog card.

## Impact

The missing image affects product recognition and makes the catalog visually inconsistent. The product name, description, price, and Add to Basket control remain visible, so the purchase flow is not blocked.

## Evidence

- [DevTools evidence](Evidence/01-Wham-Bars-Image-DevTools-Evidence.md)
- [Catalog screenshot](Evidence/01-Wham-Bars-Image-Broken.jpg)
