---
title: 'Table alpha.aggregate_scroll_abandonment'
sidebar_label: 'alpha.aggregate_scroll_abandonment'
---
Table "alpha.aggregate_scroll_abandonment"
Column        |           Type           | Nullable | Default | Storage  | Description 
---------------------|--------------------------|----------|---------|----------|-------------
`"projectId"`           | integer                  | not null |         | plain    | 
`"occuredAt"`           | timestamp with time zone |          |         | plain    | 
`"sessionId"`           | character varying(37)    | not null |         | extended | 
`"identityId"`          | character varying(80)    |          |         | extended | 
`"screenWidth"`         | smallint                 |          |         | plain    | 
`"screenHeight"`        | smallint                 |          |         | plain    | 
`"pageTitle"`           | character varying(128)   |          |         | extended | 
`"pageURLOrigin"`       | character varying(255)   |          |         | extended | 
`"pageURLPath"`         | character varying(255)   |          |         | extended | 
`"pageURLSearchParams"` | jsonb                    |          |         | extended | 
### Indexes:
```
"aggregatescrollabandonment_projectid_occuredat_index" btree ("projectId", "occuredAt")
```
### Access method:
```
heap
```