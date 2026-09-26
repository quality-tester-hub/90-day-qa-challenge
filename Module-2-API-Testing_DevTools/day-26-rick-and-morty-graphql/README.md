# 🚀 Collection Overview

The collection contains **10 POST requests** structured into two core folders:

## 📁 Characters

* **GET SINGLE CHARACTER:** Validates scalar fields (`id`, `name`, `status`, `species`, `type`, `gender`) and single nested objects (`origin`, `location`).
* **CHARACTER WITH EPISODES:** Tests nested array relationships (`character → episode`).
* **MULTIPLE CHARACTERS:** Validates array queries using `charactersByIds(ids: [...])`.
* **LIST CHARACTERS:** Tests paginated character queries along with metadata (`info` & `results`).
* **CHARACTERS PAGE 2:** Validates `page` parameter arguments directly within GraphQL queries (`page: 2`).

## 📁 Episodes

* **GET SINGLE EPISODE:** Validates single episode fetching and scalar assertions.
* **EPISODE WITH CHARACTERS:** Tests reverse nested array relationships (`episode → characters`).
* **MULTIPLE EPISODES:** Validates multi-record fetching using `episodesByIds(ids: [...])`.
* **LIST EPISODES:** Tests listing episodes with pagination details (`count`, `pages`, `next`, `prev`).
* **EPISODES PAGE 2:** Verifies pagination transitions on page 2.

---

# 📊 Automated Assertions & Quality Checks

Every request includes JavaScript tests checking:

* **HTTP Status Code:** `200 OK`
* **Response Data Payload:** Presence of the `data` property
* **Field Completeness:** Ensures requested fields are present and unrequested fields are omitted
* **Data Types:** Validates arrays, objects, and string matches against environment variables
* **Pagination Contracts:** Verifies page state changes, e.g. `prev != null` on page 2

---

# 🛠️ Environment Configuration

The environment file:

`day 26 rick and morty graphql.postman_environment.json`

is pre-configured with the following variables stored in the **Initial Value** column:

| Variable       | Value                                 | Description                         |
| -------------- | ------------------------------------- | ----------------------------------- |
| `baseUrl`      | `https://rickandmortyapi.com/graphql` | Public GraphQL Endpoint             |
| `characterId1` | `1`                                   | Primary character ID (Rick Sanchez) |
| `characterId2` | `2`                                   | Secondary character ID              |
| `characterId3` | `3`                                   | Tertiary character ID               |
| `episodeId1`   | `1`                                   | Primary episode ID                  |
| `episodeId2`   | `2`                                   | Secondary episode ID                |
| `episodeId3`   | `3`                                   | Tertiary episode ID                 |
| `page`         | `1`                                   | Pagination page number              |

---

# 📁 Project Structure

```text
day-26/
│
├── Collections/
│   └── day-26-rick-and-morty-graphql.postman_collection.json
│
├── Environment/
│   └── day 26 rick and morty graphql.postman_environment.json
│
├── HTML Report/
│   └── Day-26-Rick-and-Morty-GraphQL-Test-Report.html
│
└── README.md
```
