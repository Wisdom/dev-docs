---
title: Community SQL Reports Overview
sidebar_label: Overview
---

## About

Like most things in life, someone's already thought of it, and very likely already done it. Just try registering a `.com` domain name or registering a username on Reddit. With Relational Databases being around since the 1970s thanks to IBM's Edgar Codd, analytics and reporting ideas have been around for over 50 years. Building on this body of knowledge, we've put together a SQL library built by the Wisdom community to easily share analytics reports- collaboration taking place from [Github](https://github.com/Wisdom/community-sql).

<br/>

Getting started is easy:

```sql
-- 1. Update the Library stored in your PostgreSQL database:
SELECT community.update_reports();

-- 2. Pick a query from the library and run it.
SELECT * FROM community.report(NULL::community_types."@wisdom/developing/hello-world");
```


### How it Works
When the `community.report()` function is run, the SQL code of the desired report is looked-up within the `community.queries` table- and this table is updated with the `community.update_reports()` function that pulls in queries from the [Github Repo](https://github.com/Wisdom/community-sql). On Github, SQL reports are defined with two files: 1) the SQL code stored in `query.sql`, 2) Metadata stored in a `manifest.json` file. Within the manifest file all mandatory SQL query parameters are defined. 

You may note the strange syntax when running a community query (eg. `null::community_types."@example/test"). PostgreSQL's procedural language ("PL/pgSQL") has a strongly-typed type system that requires all queries have a predefined return type. This strange syntax converts null to the proper return type of the SQL query, ultimately defined within the manifest.json file.



A Few Example Queries to get you started developing





| Report Query Path                                  | Title                     | Requires Params |
|----------------------------------------------------|---------------------------|-----------------|







## Developing Community Queries

A few example community queries to help you get started developing SQL reports.


| Step  | Report Query Path                                  | Title                     | Requires Params |
|-------|----------------------------------------------------|---------------------------|-----------------|


1. `SELECT * FROM community.report(NULL::community_types."@wisdom/developing/hello-world");`

2. `SELECT * FROM community.report(NULL::community_types."@wisdom/developing/building-on-other-queries");`

3. `SELECT * FROM community.report(NULL::community_types."@wisdom/developing/passing-parameters", _project_id=>10);`

4. `SELECT * FROM community.report(NULL::community_types."@wisdom/developing/all-together", _project_id=>10);`




## Semantic Requirements And Conventions

When namimg files and folders, keep in mind:
- Root directory folders must start with '@', as your own Github name handle- so everyone knows who the author/owner is.
- Files and folders must be lowercased, and only allow the following characters: a-z, 0-9 and dash.
- Three files are required per report: query.sql, manifest.json, and README.md.
- To contribute, submit a pull request and accept the MIT contributor license assignment.



### A Safe, Simple and Collaborative system.
From an open community, reports are created 


- Only literal value variables (single quote variables) are possible. Passing idents are not supported (double quote variables).
- The community report is executed as the current user, with all permissions they have.
- During a `community.report_update` function call, all views within the `community_types` schema will be deleted, cascading to all dependents, and then replaced. Therefore, if you are building queries ontop of community queries, they too should be created as a community query to ensure they are always updated and not deleted.
- Undercovers, PLPSQL uses `EXECUTE` from a `format()`. Variables are only injected if they are non-null.
- You can access variables from the $1 JSONB parameter with type casting:  `($1->>'_project_id')::INTEGER`

