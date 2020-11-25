---
title: 'Table "enrichment.holiday"'
sidebar_label: 'enrichment.holiday'
---
Column  |           Type           | Nullable | Default | Storage  | Description 
---------|--------------------------|----------|---------|----------|-------------
`"code"`    | character varying(12)    |          |         | extended | 
`"country"` | character varying(2)     |          |         | extended | 
`"state"`   | character varying(2)     |          |         | extended | 
`"region"`  | character varying(4)     |          |         | extended | 
`"date"`    | date                     | not null |         | plain    | 
`"start"`   | timestamp with time zone | not null |         | plain    | 
`"finish"`  | timestamp with time zone | not null |         | plain    | 
`"name"`    | text                     |          |         | extended | 
`"type"`    | text                     |          |         | extended | 
```
### Access method:
```
heap
```