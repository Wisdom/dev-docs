---
title: Overview
sidebar_label: Overview
---


import Code from '../../src/common/code/'


:::caution Private Alpha

Extensions are in private Alpha. Get in touch if you'd like early access.

:::



<!-- ## Component and Data Library
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
    - Markdown -->


## Architecture
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


## Library

<Code language='javascript' title='Initializing Web Report Manager SDK' code={`
import WisdomAppManager from 'XXXXXXXXX/../library/dist/index.js' // S3 Bucket Reference
const manager = new WisdomAppManager(/* For Development, pass JWT here */);
`}/>


## Publishing & Approval Guidelines
- Manual upload of ZIP folder containing static web assets, with `index.html` as the entry point. Please do not link to external dependencies- download them locally.
- Sensible Query Limits
- Disallowed Features:
    - Direct browser storage (Local/Session/Cookie)
    - Message Passing (to parent Wisdom frames)


## Proposed Access
- Puppeteer/Playwright Access


## Security + Defense in Depth

- SQL queries are run with a ReadOnly PostgreSQL user.
- Community Web Reports are undergo manual code reviews.
- Data Exfiltration is prevented at a few different levels using CSPs and other techniques. While a few possible data exfiltration methods could exist, we think they have been balanced (or mitigated) with manual code reviews for community apps (and community SQL reports).


## Wisdom Manager SDK


:::note Library Note
Note the following patterns:
    1. Naming methods "Get" is local, "Fetch" is across network
    2. All methods use promises
    3. Helper methods are prefixed with an underscore\n
Initializing the Library:
```
const appManager = AppManager(jwt, orgId, options);
await appManager.init();
```
:::

<br/>
<br/>


<Code language='javascript' title='Web Report Library' code={`
class WisdomAppManager {
    async init () {}\n
    getOrg(orgId){}
    getProject(projectId){}
    getAppManifest(){}
    getAppReadme(){}
    getUserSelf(){}
    getTeam(){}\n\n
    // --------  Misc Management  --------
    devLog(level: DevLogLevel, ...args: any) {}\n
    notify(level: string, title: string, detail: string) {}\n\n
    // --------  Helpers  --------
    _getSearchParam(paramName) {}\n
    sanitizeTemplate = (strObj, ...substitutions) => {
        // Use: this.stripHtml\`hello <b>my</b> name is \${'<b>XSS</b>.'}\`
    }\n\n
    // --------  Configs  --------
    // Transparently applies AppId, OrgId, UserId to each.
    @requirePermissions(['storage'])
    async getLocalStorage(name: string) {}\n
    @requirePermissions(['storage'])
    async getSessionStorage(name: string) {}\n
    @todo
    @requirePermissions(['storage'])
    async fetchRemoteStorage(confName: string) {}\n
    @requirePermissions(['storage'])
    async setLocalStorage(name: string, json): Promise<any> {}\n
    @requirePermissions(['storage'])
    async setSessionStorage(name: string, json): Promise<any> {}\n
    @requirePermissions(['storage'])
    async setRemoteStorage(confName: string, confVal: object): Promise<any> {}\n\n
    // --------  Direct Queries  --------
    knexSqlBuilder() {}\n
    @requirePermissions(['sqlProjectRead'])
    async querySql(query) {}\n
    @requirePermissions(['sqlProjectRead'])
    async queryCubeJs(query) {}\n\n
    // ------- Fetching General Records + Reports
    @requirePermissions(['s3ProjectRead'])
    async fetchSessionBlob(sessionId) {}\n
    @requirePermissions(['basic'])
    async fetchSessionRow(sessionId) {}\n
    @requirePermissions(['basic'])
    async fetchEventRow(sessionId, eventId) {}\n
    @requirePermissions(['basic'])
    async fetchPersonRow(identityId) {}\n\n
    @requirePermissions(['basic'])
    async fetchRecentSessionRows(limit=1000) {}\n\n
    // ------- MISC -------
    @requirePermissions(['basic'])
    async fetchCompressedUrlHierarchy() {}\n
    @requirePermissions(['basic'])
    async fetchDeminifiedStackFrames(frames: object[]) {}\n
    @requirePermissions(['basic'])
    async fetchDeminfiedErrorFrame(frame: object) {}
}
`}/>