# Day 20: GoRest API Authentication Negative Testing & CI/CD Automation

## Overview
This module focuses on comprehensive **negative authentication testing** for REST APIs using [GoREST](https://gorest.co.in). Since GoREST utilizes Bearer Token authorization rather than a traditional username/password login endpoint, this test suite evaluates how the API handles invalid, missing, malformed, empty, and expired authentication credentials, as well as improper HTTP methods.

Additionally, this module integrates automated test execution into a **GitHub Actions CI/CD pipeline** via the Postman CLI.

---

## 🛠️ Repository Directory Structure

```text
day-20-gorest/
├── Collections/
│   └── day-20-gorest.postman_collection.json
├── Enviroment/
│   └── Day 20 - GoRest Environment.postman_environment.json
├── Run Collection/
│   └── day-20-gorest.postman_test_run.json
├── Screenshots/
│   └── Screenshot 2026-09-20 at 9.10.38 PM.png
├── github-workflows/
│   └── postman.yml
└── README.md