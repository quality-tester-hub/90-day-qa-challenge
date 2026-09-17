# Day 17: Multi-Layered API Testing & Audit Logging (EvilTester API Challenges)

## Overview
This repository contains the Day 17 Quality Assurance project focusing on multi-layered API testing against the [EvilTester API Challenges](https://apichallenges.eviltester.com). 

The goal of this project is to validate RESTful endpoints across three distinct layers—Postman, Browser DevTools, and an automated Node.js simulation script—while establishing an execution audit trail in local environment files.

---

## Workspace Structure

```text
day-17-apichallenges-practice/
├── Collections/
│   └── day-17-apichallenges.postman_collection.json
├── Environments/
│   └── day-17-apichallenges-env.postman_environment.json
├── Logs/
│   ├── apichallenges.com.har
│   ├── 01_POST_Start_Challenger_Session.log
│   ├── 02_GET_Todos.log
│   └── 03_POST_Create_Todo.log
├── README.md
└── simulation.js