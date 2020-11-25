---
title: 'Table "hint_plan.hints"'
sidebar_label: 'hint_plan.hints'
---
Column       |  Type   | Nullable |                   Default                   | Storage  | Description 
-------------------|---------|----------|---------------------------------------------|----------|-------------
`"id"`                | integer | not null | nextval('hint_plan.hints_id_seq'::regclass) | plain    | 
norm_query_string | text    | not null |                                             | extended | 
application_name  | text    | not null |                                             | extended | 
`"hints"`             | text    | not null |                                             | extended | 
### Indexes:
```
"hints_pkey" PRIMARY KEY, btree (id)
"hints_norm_and_app" UNIQUE, btree (norm_query_string, application_name)
```
### Access method:
```
heap
```