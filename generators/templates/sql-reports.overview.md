---
title: Community SQL Reports Overview
sidebar_label: Overview
---

## Running Community Queries

A Few Sample Queries to get you started.



### A Safe, Simple and Collaborative system.
From an open community, reports are created 


- Only Variable literal values (single quote vars). Passing idents are not supported (double quote variables).
- Function is executed as current user?????
- During a `report_update` function call, all views within the `community_types` schema will be deleted, cascading to all dependents, and then replaced. Therefore, if you are building queries ontop of community queries, they too should be created as a community query to ensure they are always updated and not deleted.
- Undercovers, PLPSQL uses `EXECUTE` from a `format()`. Var markers are only injected if they are non-null.

SQL:
    format('SELECT $$_session_id$$ LIMIT 5;', 
    REPLACE(__sql, '$$_session_id$$', _session_id)


A Few Example Queries to get you started developing




<!--INJECT_QUERY_TABLE_HERE-->




CORE:
    - list all pages.
    - get users with first + last visit time + activity trend???

@wisdom/components/page-engagement`


PERIOD_SUM
PERIOD TREND:
    Activity Time (avg, median, stddev)
    Page Views
    Proportional

Questions To ask:
    - Do users know this feature exists.
            -- Have they visited, AND interacted on it?
    - Do users like this feature?
            -- 
    

    -- When do users interact with features?  1. Time to Activation overlayed with 2. Median activity time per user
        (cohort by calendar date (days), or activeTime sum (15 mins))

FEATURE SUCCESS:
    - number of users as percent of app total? (shift delay days???)
    - median activity time.
    - 

Page Engagement
Page Engagement by Person:
    TREND

Histogram cohorted?




The query will not be executed if two dollar signs exist in the query: `$$`, indicating that a param has not been substituted.









## Developing Community Queries

A few example community queries to help you get started developing SQL reports.

<!--INJECT_DEV_QUERY_TABLE_HERE-->

1. `SELECT * FROM community.report(NULL::community_types."@wisdom/developing/hello-world");`

2. `SELECT * FROM community.report(NULL::community_types."@wisdom/developing/building-on-other-queries");`

3. `SELECT * FROM community.report(NULL::community_types."@wisdom/developing/passing-parameters", _project_id=>10);`

4. `SELECT * FROM community.report(NULL::community_types."@wisdom/developing/all-together", _project_id=>10);`




## Semantic Requirements And Conventions

When namimg files and folders, keep in mind:
- Root directory folders must start with '@', as Github name handle.
- Files and folders must be lowercased, and only allow a-z, 0-9 and dash.
- Three files are required per report: query.sql, manifest.json, and README.md.


### Strict Type Checking
-- views created from JSON type




PR Process:
    - must accept contributor license MIT contributor guide as part of a PR checklist