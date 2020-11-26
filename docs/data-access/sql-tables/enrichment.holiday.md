---
title: 'Table "enrichment.holiday"'
sidebar_label: 'enrichment.holiday'
---
Column  |           Type           | Nullable | Default | Storage  | Description 
---------|--------------------------|----------|---------|----------|-------------
`"code"`    | text                     |          |         | extended | 
`"country"` | text                     |          |         | extended | 
`"state"`   | text                     |          |         | extended | 
`"region"`  | text                     |          |         | extended | 
`"date"`    | date                     | not null |         | plain    | 
`"start"`   | timestamp with time zone | not null |         | plain    | 
`"finish"`  | timestamp with time zone | not null |         | plain    | 
`"name"`    | text                     |          |         | extended | 
`"type"`    | text                     |          |         | extended | 
### Indexes:
```
"holiday__idx__location_event" btree (country, state, region) INCLUDE (code, date, start, finish, name, type)
```
### Access method:
```
heap
```