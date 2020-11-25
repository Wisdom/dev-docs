---
title: 'Table "enrichment.country"'
sidebar_label: 'enrichment.country'
---
Column |         Type          | Nullable | Default | Storage  | Description 
--------|-----------------------|----------|---------|----------|-------------
`"code"`   | character varying(3)  | not null |         | extended | 
`"name"`   | character varying(64) |          |         | extended | 
### Indexes:
```
"country__code_name" btree (code, name)
```
### Access method:
```
heap
```