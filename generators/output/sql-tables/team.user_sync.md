---
title: 'Table "team.user_sync"'
sidebar_label: 'team.user_sync'
---
Column   |           Type           | Nullable | Default | Storage  | Description 
-----------|--------------------------|----------|---------|----------|-------------
`"userId"`    | integer                  | not null |         | plain    | 
`"email"`     | character varying(64)    | not null |         | extended | 
`"firstName"` | character varying(64)    |          |         | extended | 
`"lastName"`  | character varying(64)    |          |         | extended | 
`"avatarURL"` | character varying(256)   |          |         | extended | 
`"createdAt"` | timestamp with time zone |          |         | plain    | 
`"orgId"`     | integer                  | not null |         | plain    | 
### Indexes:
```
"sync__user_sync__userid" PRIMARY KEY, btree ("orgId", "userId")
"sync__user_sync__email" UNIQUE CONSTRAINT, btree ("orgId", email)
```
### Access method:
```
heap
```