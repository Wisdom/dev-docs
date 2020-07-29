---
title: Overview
sidebar_label: Overview
---


:::caution Private Alpha

Extensions are in private Alpha. Get in touch if you'd like early access.

:::



### Component and Data Library
- **Data Access**
    - Basic Context (User, Team, Project, Organization)
    - SQL Access
    - Cubejs (analytics framework)
    - AWS S3 Objects
    - Wisdom HTTP API reports ex:
        - Email Inbox
        - Billing
        - Analytics Reports
- **React Components [Storybook](/extension-developers/storybook)**
    - User Selector
    - Page Selector
    - Session Rows
    - URL screenshot
    - Session GIF
    - Session Screenshot (Rendered)
    - Live Users List
    - Developer Tools
        - Console Logistics
        - Network Requests
        - JS Error deminification
- **Report Starter Kits**
    - React
    - ObserverHQ
    - Markdown


### Architecture
- Statically hosted on AWS S3
- HTML Iframe + CORS
- JWT Auth for data access (expires after one hour)

### Permissions
Permissions are requested by adding the text values to the `manifest.json` file under the `permissions` property. End users will accept all permissions before they will be able to open the Community Web Report.

|Permission Key| Permission Description
|---|---|
| `org.context` | Provides team members and a list of all projects (names and IDs).
| `project.basic` | Basic read access to recent sessions, and single row data access to Person, Session, Event table data when primary IDs are known (identityId + sessionId).
| `project.config` | Read Project tracking configs.
| `project.sql.select` | Enable custom `SELECT` SQL queries scoped to the active `projectId`.
| `project.sql.community` | Enable querying community SQL report- note that reports are limited to project data by "row level security" policies.
| `project.sql.cubejs` | Enables Cube.js query access.
| `project.s3.read` | Enable reading of S3 session recordings.
| `project.api.get` | GET API general methods.
| `project.api.all` | GET/POST/PUT/DELETE API general methods.
| <br/>`browser.storage` | Enable storage manager that safely sets browser storage (local/session/cookie storage).
| `browser.network` | Enables accessing external network requests across the internet. Fetch, XMLHttpRequest, and Websockets are by default disabled by CSPs.



### Publishing
- Manual upload of ZIP folder containing static web assets, with `index.html` as the entry point. Please do not link to external dependencies- download them locally.

### Publishing Approval Guidelines
- Sensible Query Limits
- Disallowed Features:
    - Direct browser storage (Local/Session/Cookie)
    - Message Passing (to parent Wisdom frames)


### Proposed Access
- Puppeteer/Playwright Access


### Security + Defense in Depth

- SQL queries are run on with a ReadOnly PostgreSQL user.
- Community Web Reports are undergo manual code reviews.
- Data Exfiltration is prevented at a few different levels using CSPs and others. While a few possible data exfiltration methods could exist, we think they have been balanced (or mitigated) with manual code reviews for community apps (and community SQL reports).




