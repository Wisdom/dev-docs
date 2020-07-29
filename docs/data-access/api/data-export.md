---
title: Data Export
preview: ''

createdAt: 2018-07-5 9:02:52
updatedAt: 2018-07-11 12:42:57

seo:
  title: ''
  desc: ''

tags:

author: ''
public: True
---





The Bulk *Analytics* Export API is designed to enable syncronization of Wisdom data to extenal sources on a nightly basis. Each record export type (Persons, Sessions, Events) takes an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) UTC date (eg. 2018-03-24) as the only query parameter.

**NOTE:** Calling these endpoints with the current date is not advised, as the day is not complete. Batching syncronization requests after midnight UTC is the recommended proceedure, for example, at 2am UTC each day.


### Get Person Records by Date

`GET https://api.getwisdom.io/v1/org/:orgId/project/:projectId/export?utcDate=XXXX-XX-XX`



### Get Session Records by Date

`GET https://api.getwisdom.io/v1/org/:orgId/project/:projectId/export?utcDate=XXXX-XX-XX`



### Get Event Records by Date

`GET https://api.getwisdom.io/v1/org/:orgId/project/:projectId/export?utcDate=XXXX-XX-XX`
