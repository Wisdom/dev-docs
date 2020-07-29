---
title: 'Table "community.queries"'
sidebar_label: 'community.queries'
---
Column  | Type | Nullable | Default | Storage  | Description 
----------|------|----------|---------|----------|-------------
`"path"`     | text | not null |         | extended | 
`"sql"`      | text | not null |         | extended | 
`"manifest"` | json | not null |         | extended | 
`"readme"`   | text | not null |         | extended | 
### Indexes:
```
"community__queries__path__primary" PRIMARY KEY, btree (path)
```
### Access method:
```
heap
```