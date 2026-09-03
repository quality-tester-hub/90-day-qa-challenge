# Day 03: SauceDemo End-to-End Automation & Navigation Suite

## 📌 Overview
This module focuses on building a resilient, production-grade automated testing suite for [SauceDemo (Swag Labs)](https://www.saucedemo.com/). The suite validates critical e-commerce workflows, including session persistence, end-to-end checkout, catalog sorting, and side-drawer navigation.

## 🛠️ Key Testing Workflows Covered
* **Authentication (`auth.spec.ts`)**: Validates standard user login, handles locked-out user edge cases, and exports session cookies to `storageState.json`.
* **End-to-End Checkout (`cart_&_checkout.spec.ts`)**: Bypasses login using preserved storage state, adds items to the cart, completes user checkout details, and confirms order placement.
* **Filter & Sort (`filter-and-sort.spec.ts`)**: Tests product catalog sorting algorithms (`Name A-Z`, `Name Z-A`, `Price Low-High`, `Price High-Low`).
* **Menu Navigation (`menu-navigation.spec.ts`)**: Validates hamburger drawer interactions, app state reset, and clean user logout redirection.

## 🚀 Execution Commands

Run the entire Day 3 test suite in headed mode:
\`\`\`bash
npx playwright test day-03-sauce-demo/Tests --headed
\`\`\`

Run a specific test file:
\`\`\`bash
npx playwright test day-03-sauce-demo/Tests/filter-and-sort.spec.ts --headed
\`\`\`

Generate and view the HTML execution report:
\`\`\`bash
npx playwright show-report
\`\`\`