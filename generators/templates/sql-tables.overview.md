---
title: 'Overview: Tables Schemas'
sidebar_label: Overview
---

import Image from '@theme/IdealImage';


# Credentials

Wisdom by default does NOT provide you with usernames and passwords cooresponding with connections to your PostgreSQL database. This is because for security purposes the password is only displayed once. When you are ready to recieve this password, reach out to the Wisdom tean. For various purposes there are a few different user names created.




### Full Org Access Connection Details + Credentials:

| Property       | Value                                  |
|----------------|----------------------------------------|
| host           | ${orgId}.sql.wisdom-dashboards.com     |
| port           | 5432                                   |
| database       | org_${orgId}                           |
| username       |                                        |
| password       | (Ask)                                  |


### Project Level Data Access Connection Details + Credentials:

| Property       | Value                                  |
|----------------|----------------------------------------|
| host           | ${orgId}.sql.wisdom-dashboards.com     |
| port           | 5432                                   |
| database       | project_${project_Id}                  |
| username       |                                        |
| password       | (Ask)                                  |


### Various Groups:

| Group Roles                               | Purpose                                               |
|-------------------------------------------|-------------------------------------------------------|
| customer_role__read_only_access           | Customer Read Only                                    |
| customer_role__read_only_rls_on_project   | Customer Read Only - Data limited to specific project |
| wisdom_role__read_only_access             | Wisdom Admin role                                     |
| master                                    | Wisdom Admin role                                     |


## Terminal / Command Line Connections
`psql  \n\t \\ -h ${ORG_ID}.sql.wisdom-dashboards.com \n\t \\ -d ${DATABASE}  \n\t \\ -U ${USER_NAME}  \n\t \\ -p 5432`

# Context

Wisdom collects terrabytes of data. We've found that frequently we cannot build reports fast enough- there is just too much information to explore. We wanted to expose functionality that our own team has been able to use for quite some time- that is direct SQL access. For paid enterprise accounts, you'll be able to batch run SQL queries for your own data across 17 different tables.


<Image img={require('../sql.png')}/>

<br/>

<br/>





Default database seach_path:
```sql
show search_path;
> atomic, public, rollup, team, enrichment, trained, normalized_vendor, admin, beta, alpha
```



### Schemas
Note that there is a proposal to make use of a `sandbox` schema for customer write access. To prevent future conflicts, this schema will not be added to the default search_path;

Show Schemas:
```sql
select nspname from pg_catalog.pg_namespace;
```



### List of Schemas

<!--INSERT_SCHEMAS_HERE-->


### List of Tables

<!--INSERT_TABLES_HERE-->



### Data Syncing SaaS Vendors
Note: Requires setup of vendor secret API keys (auth tokens). Since this functionality is relatively new, you should reach out to your assigned Wisdom account manager to discuss getting started with normalized vendor data.

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



### Tables Reserved for Administrative and for Future Use

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

#### Triggers

On record insert into table `person`, a trigger will broadcast a notification identified as `project_${projectId}`. This will help you implement real-time data processing within your application, for example, new user signup notifications.

#### Functions

NOTE: See [Community Reports](#) for how to use and run community report functions.
   - `community.report();`
   - `community.update_reports();`


#### Installed Extensions (`\dx`)

Name               | Version |   Schema   |                        Description
-------------------|---------|------------|------------------------------------------------------------
aws_commons        | 1.0     | admin      | Common data types across AWS services
aws_s3             | 1.0     | admin      | AWS S3 extension for importing data from S3
hll                | 2.11    | public     | type for storing hyperloglog data
pg_stat_statements | 1.6     | public     | track execution statistics of all SQL statements executed
plpgsql            | 1.0     | pg_catalog | PL/pgSQL procedural language
tablefunc          | 1.0     | public     | functions that manipulate whole tables, including crosstab
tsm_system_rows    | 1.0     | public     | TABLESAMPLE method which accepts number of rows as a limit




