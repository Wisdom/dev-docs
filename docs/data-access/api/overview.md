---
title: 'HTTP REST API: Overview'
sidebar_label: Overview

createdAt: 2018-07-5 9:02:52
updatedAt: 2018-07-11 12:42:57

seo:
  title: ''
  desc: ''

tags:

author: ''
public: True
---



Wisdom's HTTP REST API is in early developer preview, however many APIs are stable for active development. Authentication is handled by one of two mthods: 1) short lived JSON Web Tokens (JWTs) that expire within one hour that provide authentication per user, and 2) API secret access tokens that provide authentication per project.

The Wisdom REST API was primarily setup to enable routine data export and the more recent GDPR compliance requirements. Some Wisdom analytics reports are available (bug tracking, recent users etc) in raw API form, but provide less value to clients and so documenting them has not been a priority. Generally, it makes sense to directly access data through direct connections to PostgreSQL and AWS S3.

<div class='spacer64'></div>

### Documented APIs
- [Authentication](./auth.md)
- [General Endpoints](./general.md)
- [Bulk Data Export Endpoints](./data-export.md)
- [GDPR Compliance Endpoints](./gdpr-darp.md)
- [HTTP API Spec](./reference-spec.md)




