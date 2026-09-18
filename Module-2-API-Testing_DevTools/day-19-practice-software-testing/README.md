# Day 19: Practice Software Testing API Workflows & DevTools Analysis

## Overview
This module covers end-to-end e-commerce REST API automation targeting the [Practice Software Testing API](https://api.practicesoftwaretesting.com) using Postman AI, combined with browser DevTools network tracing and performance profiling.

The workflow automates a complete e-commerce transaction chain—from user authentication and product catalog querying to cart creation, item addition, and order checkout (invoicing).

---

## 🤖 Postman AI Collection & Environment Generation

The collection and environment were generated and configured using Postman AI Agent with the following prompt:

> **Prompt:**  
> *"Create a complete API collection named 0This is a clean, well-structured documentation overview for Day 19 of your software testing hands-on API and DevTools module. 

Here is a quick analysis and summary of your setup:

### Core Workflow Analysis

| Step | Endpoint | Purpose | Key Variable Extracted |
| :--- | :--- | :--- | :--- |
| **1. Auth** | `POST /users/login` | Authenticate and obtain session access | `bearerToken` |
| **2. Catalog** | `GET /products` | Fetch available items and select one | `productId` |
| **3. Cart Creation** | `POST /carts` | Initialize a new shopping session | `cartId` |
| **4. Add Item** | `POST /carts/{{cartId}}` | Attach `productId` to the active `cartId` | Cart payload update |
| **5. Checkout** | `POST /invoices` | Complete transaction using token & cart ID | Order invoice generated |

---

### Artifacts & Analysis Breakdown

* **Postman Integration:** Chaining through post-request scripts (`pm.environment.set(...)`) allows dynamic variable passing across all 5 steps without manual copying.
* **DevTools Network HAR Trace (`.har`):** Captures payload latency, response codes, CORS behavior, and ensures authorization headers (`Authorization: Bearer <token>`) are correctly passed down the chain.
* **DevTools Performance Trace (`.json`):** Tracks frontend main-thread scripting, layout shifts, rendering times, and network payload processing during the checkout UI interaction.

---

### Key Notes & Minor Recommendations

1. **Typo in Directory Name:** In your directory tree, `Screenshoots` is listed. You may want to rename this folder to `Screenshots` to maintain standard naming conventions.
2. **Environment Variable Security:** Ensure that your committed `Day 19 - Practice Software Testing Environment.postman_environment.json` file does not contain hardcoded active session tokens or sensitive credentials in the `value` field (keep them under `initialValue` as empty or generic placeholders if sharing publicly).