import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ui5.sap.com/#/demoapps');
  await page.getByRole('button', { name: 'Accept All' }).click();
  await page.getByText('Calendar demo app for team and team members.Run Integration TestsOpen').click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('[id="__link1-sdk---demoApps--sapUiDemoKitDemoAppsMain-0-__cssgrid0-sdk---demoApps--sapUiDemoKitDemoAppsMain-0-2"]').click();
  const page1 = await page1Promise;
  await page1.getByText('Day', { exact: true }).click();
  await page1.getByText('Week').click();
  await page1.getByText('Month').click();
  await page1.locator('[id="__xmlview0--PlanningCalendarTeamSelector-arrow"]').click();
  await page1.getByRole('button', { name: 'Create' }).click();
  await page1.getByRole('button', { name: 'Create' }).click();
  await page1.getByRole('button', { name: 'Open Planning Calendar legend' }).click();
  await page1.locator('[id="__legend0-WorkingDay"] > .sapUiUnifiedLegendSquare > .sapUiUnifiedLegendSquareColor').click();
  await page1.locator('[id="__legend0-Selected"] > .sapUiUnifiedLegendSquare > .sapUiUnifiedLegendSquareColor').click();
  await page1.locator('[id="__legend0-WorkingDay"] > .sapUiUnifiedLegendSquare > .sapUiUnifiedLegendSquareColor').click();
  await page1.getByRole('listitem', { name: 'Discussions' }).click();
  await page1.locator('[id="__row0-__xmlview0--PlanningCalendar-1-CalRow-AppsInt8"]').click();
  await page1.getByRole('gridcell', { name: 'Start Time: Friday, September 6, 2019 Calendar Week' }).click();
  await page1.getByRole('button', { name: 'Create' }).click();
});