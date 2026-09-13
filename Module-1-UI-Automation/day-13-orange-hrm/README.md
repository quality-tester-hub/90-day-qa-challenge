# 🎭 Day 13: OrangeHRM Automated Test Suite (Playwright)

An end-to-end automated regression suite built with [Playwright](https://playwright.dev/) for testing key modules of the **OrangeHRM Open Source Demo** portal (`https://opensource-demo.orangehrmlive.com/`).

---

## 📌 Features & Coverage

This suite covers 12 core workflow specifications structured as single-file Playwright test components (SPCs):

| # | Test File | Target Module | Verified Actions |
|---|---|---|---|
| 1 | `login.spec.ts` | Auth | Authentication & Dashboard Redirect |
| 2 | `dashboard.spec.ts` | Dashboard | Main Navigation & UI Element Visibility |
| 3 | `admin.spec.ts` | Admin | User Role Filtering & Search Results Table |
| 4 | `pim.spec.ts` | PIM | Employee Record Filtering by Name |
| 5 | `leave.spec.ts` | Leave | Leave List Form & Date Picker Filters |
| 6 | `apply-leave.spec.ts` | Leave | Leave Application Form & Type Dropdown |
| 7 | `leave-requirements.spec.ts` | Leave | Leave Configuration & Types Management |
| 8 | `recruitment.spec.ts` | Recruitment | Candidate Search Grid Validation |
| 9 | `performance.spec.ts` | Performance | Key Results & Performance Trackers |
| 10 | `directory.spec.ts` | Directory | Employee Directory Search & Grid Cards |
| 11 | `maintenance.spec.ts` | Maintenance | Admin Password Re-auth & Purge Records |
| 12 | `claim.spec.ts` | Claim | Assign Claim / Search Request Table |

---