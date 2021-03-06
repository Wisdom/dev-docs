---
title: 'Overview: Tables Schemas'
sidebar_label: Overview
---

import Image from '@theme/IdealImage';


Wisdom collects terrabytes of data. We've found that frequently we cannot build reports fast enough- there is just too much information to explore. We wanted to expose functionality that our own team has been able to use for quite some time- that is direct SQL access. For paid enterprise accounts, you'll be able to batch run SQL queries for your own data across different 17 tables.


<Image img={require('../sql.png')}/>

<br/>

Here is a quick preview to some of the tables you'll have access to. We've got further details to provide when you receive access. Data export by way of SQL or HTTP API is also available for your own data science team to work with.

<br/>



Show Schemas:
`select nspname from pg_catalog.pg_namespace;`


Default database seach_path 
```sql
show search_path;
> atomic, public, rollup, team, enrichment, trained, normalized_vendor, admin, beta, alpha
```



### Schemas
Note that there is a proposal to make use of a `sandbox` schema for customer write access. To prevent future conflicts, this schema will not be added to the default search_path;




### List of Schemas


| Schemas                        |
|--------------------------------|
| atomic                         |
| rollup                         |
| team                           |
| enrichment                     |
| trained                        |
| alpha                          |
| beta                           |
| normalized_vendor              |
| app                            |
| sandbox                        |
| admin                          |
| community                      |
| community_types                |



### List of Tables


| Tables with Schema             |
|--------------------------------|
| [alpha.aggregate_mouse_position](./alpha.aggregate_mouse_position.md) |
| [alpha.aggregate_scroll_abandonment](./alpha.aggregate_scroll_abandonment.md) |
| [alpha.aggregate_scroll_position](./alpha.aggregate_scroll_position.md) |
| [alpha.url_category](./alpha.url_category.md) |
| [atomic.company](./atomic.company.md) |
| [atomic.employee](./atomic.employee.md) |
| [atomic.event](./atomic.event.md) |
| [atomic.mail_inbox](./atomic.mail_inbox.md) |
| [atomic.person](./atomic.person.md) |
| [atomic.session](./atomic.session.md) |
| [community.queries](./community.queries.md) |
| [enrichment.domain_rank](./enrichment.domain_rank.md) |
| [enrichment.person_enrichment](./enrichment.person_enrichment.md) |
| [enrichment.spam_email_service](./enrichment.spam_email_service.md) |
| [rollup.rollup_daily_project_metrics](./rollup.rollup_daily_project_metrics.md) |
| [rollup.rollup_weekly_project_metrics](./rollup.rollup_weekly_project_metrics.md) |
| [rollup.rollup_weekly_user_page_activity](./rollup.rollup_weekly_user_page_activity.md) |
| [team.gallery_session_view](./team.gallery_session_view.md) |
| [team.person_note](./team.person_note.md) |
| [team.social_share](./team.social_share.md) |
| [team.social_share_comment](./team.social_share_comment.md) |
| [team.social_share_like](./team.social_share_like.md) |
| [team.user_sync](./team.user_sync.md) |




### Data Syncing SaaS Vendors
Note: Requires setup of vendor secret API keys (auth tokens).

| Category | Vendor Name         | SQL Schema                 
|----------|---------------------|----------------------------
| Support  | intercom            | `vendor_intercom`          
| NPS      | satismeter          | `vendor_satismeter`        
| Revenue  | stripe              | `vendor_stripe`            
| NPS      | wootric             | `vendor_wootric`           
| revenue  | chargebee           | `vendor_chargebee`            
| sales CRM| closeio             | `vendor_closeio`              
| marketing| google_analyics     | `vendor_google_analyics`      
| marketing| google_analyics_360 | `vendor_google_analyics_360`  
| sales CRM| hubspot             | `vendor_hubspot`              
| tickets  | jira                | `vendor_jira`                 
| marketing| mailchimp           | `vendor_mailchimp`            
| marketing| marketo             | `vendor_marketo`              
| analytics| mixpanel            | `vendor_mixpanel`             
| sales CRM| outreach            | `vendor_outreach`             
| dev ops  | pagerduty           | `vendor_pagerduty`            
| sales CRM| pardot              | `vendor_pardot`               
| sales CRM| pipedrive           | `vendor_pipedrive`            
| sales CRM| salesforce          | `vendor_salesforce`           
| email    | sendgrid            | `vendor_sendgrid`             
| NPS      | uservoice           | `vendor_uservoice`            
| tickets  | zendesk             | `vendor_zendesk`              
| chat     | zendesk_chat        | `vendor_zendesk_chat`         



### Reserved for administrative and future use

   Schema   |               Name               | Note |
------------|----------------------------------|------|
 admin      | pg_user_authorization            |  |
 alpha      | aggregate_mouse_position         |  |
 alpha      | aggregate_scroll_abandonment     |  |
 alpha      | aggregate_scroll_position        |  |
 alpha      | url_category                     |  |
 public     | knex_migration                   |  |
 public     | knex_migration_lock              |  |




### Function, Extensions, and Listen/Notify

On record insert into table `person`, a trigger will broadcast a notification identified as `project_${projectId}`.

`community.update_reports();`   -- NOTE: See [Community Reports](#) for how to use community report functions.


##### List of installed extensions (`\dx`)

Name               | Version |   Schema   |                        Description
-------------------|---------|------------|------------------------------------------------------------
aws_commons        | 1.0     | admin      | Common data types across AWS services
aws_s3             | 1.0     | admin      | AWS S3 extension for importing data from S3
hll                | 2.11    | public     | type for storing hyperloglog data
pg_stat_statements | 1.6     | public     | track execution statistics of all SQL statements executed
plpgsql            | 1.0     | pg_catalog | PL/pgSQL procedural language
tablefunc          | 1.0     | public     | functions that manipulate whole tables, including crosstab
tsm_system_rows    | 1.0     | public     | TABLESAMPLE method which accepts number of rows as a limit
