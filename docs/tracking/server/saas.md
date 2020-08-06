---
title: SaaS Data Sync
sidebar_label: SaaS Data Sync
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


:::info Work In Progress
<br/>
Coming soon mid August 2020
:::




### PostgreSQL Schemas For SaaS Integrations
Wisdom's core value is managing user engagement analytics- but analysis without full business context isn't sufficient for making business decisions. This is why Wisdom supports pulling in various data sources, including revenue, NPS feedback, CRM, marketing, live chat, and support ticket data. Wisdom's upcoming open report marketplace will allow out-of-the-box reporting, such as revenue-per-click and rage-clicks, and differentiate between features that are unused vs undiscovered.

To setup data syncing across various SaaS applications, for each provider you must input the relevant secret access token. You can follow the steps below for each vendor:

### Available Vendors
| Category | Vendor Name         | SQL Schema                    | Credential Collection Method
|----------|---------------------|-------------------------------|--|
| Support  | intercom            | `vendor_intercom`             | OAuth |
| NPS      | satismeter          | `vendor_satismeter`           | `ProjectId` + [API key](https://help.satismeter.com/en/articles/87961-export-responses-api) |
| Revenue  | stripe              | `vendor_stripe`               | [API Secret Key](https://dashboard.stripe.com/apikeys) |
| NPS      | wootric             | `vendor_wootric`              | `ClientId` + `ClientSecret` |


### Upcoming Vendors

| Category | Vendor Name         | SQL Schema                    | Credential Collection Method
|----------|---------------------|-------------------------------|--|
|          | chargebee           | `vendor_chargebee`            |  |
|          | closeio             | `vendor_closeio`              |  |
|          | google_analyics     | `vendor_google_analyics`      |  |
|          | google_analyics_360 | `vendor_google_analyics_360`  |  |
|          | hubspot             | `vendor_hubspot`              |  |
|          | jira                | `vendor_jira`                 |  |
|          | mailchimp           | `vendor_mailchimp`            |  |
|          | marketo             | `vendor_marketo`              |  |
|          | mixpanel            | `vendor_mixpanel`             |  |
|          | outreach            | `vendor_outreach`             |  |
|          | pagerduty           | `vendor_pagerduty`            |  |
|          | pardot              | `vendor_pardot`               |  |
|          | pipedrive           | `vendor_pipedrive`            |  |
|          | salesforce          | `vendor_salesforce`           |  |
|          | sendgrid            | `vendor_sendgrid`             |  |
|          | uservoice           | `vendor_uservoice`            |  |
|          | zendesk             | `vendor_zendesk`              |  |
|          | zendesk_chat        | `vendor_zendesk_chat`         |  |

