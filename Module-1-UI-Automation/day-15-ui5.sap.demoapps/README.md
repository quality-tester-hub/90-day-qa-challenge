cat << 'EOF' > Module-1-UI-Automation/day-15-ui5.sap.demoapps/README.md
# Day 15: SAP UI5 Demo Applications Automation

## Overview
Automated testing suite for the SAP OpenUI5 Demo Applications ecosystem (`https://ui5.sap.com/#/demoapps`) and integrated UXC components (`https://sap-samples.github.io/uxc-integration/`). Covers enterprise UI controls, calendar planning components, theme configurations, database tools, AI integration views, and shopping cart workflows.

## Test Specs
* **brose.list.spec.ts**: Automates navigation and product catalog filtering in the SAP UI5 Browse List application.
* **calender.spec.ts**: Tests view switches (Day/Week/Month), team selector interactions, appointment creation, and legend toggles on the Planning Calendar.
* **shoping-cart.spec.ts**: Validates adding products to cart and checkout interactions in the Shopping Demo app.
* **SQL.spec.ts**: Automates interactive table grids and database query view controls.
* **testin-ai.spec.ts**: Validates AI component integrations and interactive prompt/result UI states.
* **Tools.spec.ts**: Handles popup events, administrative tool navigation links, and dynamic grid cell selections.
* **uxc-integration.spec.ts**: Verifies component integration under custom SAP themes (`sap_horizon_dark`).

## Defect Reports Tracked
* **Navbar cart counter fails to update and out-of-stock items allowed**: Documents missing dynamic badge incrementing upon adding items and improper inventory validation allowing out-of-stock items into the cart.

## Execution
```bash
# Run all Day 15 test specs
npx playwright test Module-1-UI-Automation/day-15-ui5.sap.demoapps/Tests

# Run a specific spec in headed mode
npx playwright test Module-1-UI-Automation/day-15-ui5.sap.demoapps/Tests/Tools.spec.ts --headed