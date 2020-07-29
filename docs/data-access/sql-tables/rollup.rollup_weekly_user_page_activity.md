---
title: 'Table "rollup.rollup_weekly_user_page_activity"'
sidebar_label: 'rollup.rollup_weekly_user_page_activity'
---
Column         |           Type           | Nullable | Default | Storage  | Description 
-----------------------|--------------------------|----------|---------|----------|-------------
`"projectId"`             | integer                  | not null |         | plain    | 
`"date"`                  | timestamp with time zone | not null |         | plain    | 
`"identityId"`            | character varying(255)   |          |         | extended | 
`"pageURLOrigin"`         | character varying(255)   |          |         | extended | 
`"pageURLPathCompressed"` | character varying(255)   |          |         | extended | 
`"activeTime"`            | bigint                   |          |         | plain    | 
`"pageViews"`             | bigint                   |          |         | plain    | 
### Indexes:
```
"rollupweeklyuserpageactivity_projectid_date_identityid_pageurlo" UNIQUE CONSTRAINT, btree ("projectId", date, "identityId", "pageURLOrigin", "pageURLPathCompressed")
"rollupweeklyuserpageactivity_projectid_identityid_date_pageurlo" btree ("projectId", "identityId", date, "pageURLOrigin", "pageURLPathCompressed", "activeTime", "pageViews")
"rollupweeklyuserpageactivity_projectid_pageurlorigin_pageurlpat" btree ("projectId", "pageURLOrigin", "pageURLPathCompressed", date, "identityId", "activeTime", "pageViews")
```
### Access method:
```
heap
```