---
title: Server Side Tracking Overview
sidebar_label: Overview
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

import Image from '@theme/IdealImage';


## [Email Inbox](tracking/server/inbox.md)

Track emails you send to customers- helping your team build better empathy into their inbox, while analyzing an omnichannel customer journey. Just BCC Wisdom with your specially assigned email address.

:::note Data Access
1. Adds records to `atomic.mail_inbox` table, indexed by email address (requires email addresses tracking).
2. Sends email HTML content and attachments to your S3 Object Bucket at path `mail_inbox/{YYYY}/{MM}/{DD}/`.
:::

<Image img={require('./inbox.png')} className='noShadow'/>

## [Company Membership](tracking/server/company.md)


Part of understanding customer engagement and churn is understanding how users's work together as part of a larger team. team and corporate restructuring can be a challenge to understand from a product analyst's perspective. Understanding the greater team dynamics helps shed light why certain workflows benefit particular teams and not others.

:::note Data Access
1. Adds records to `atomic.company` and `atomic.employee` table.
2. Table `atomic.session` references `atomic.company` via `"companyId"` column.
:::

<Image img={require('./company.png')} className='noShadow'/>