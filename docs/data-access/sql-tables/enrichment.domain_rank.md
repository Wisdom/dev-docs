---
title: 'Table "enrichment.domain_rank"'
sidebar_label: 'enrichment.domain_rank'
---
Column  |          Type          | Nullable | Default | Storage  | Description 
---------|------------------------|----------|---------|----------|-------------
`"domain"`  | character varying(100) | not null |         | extended | 
`"rank"`    | integer                | not null |         | plain    | 
`"rankLog"` | numeric                |          |         | main     | 
### Indexes:
```
"domainrank__domain_rank__hash_idx" hash (domain)
"domainrank_rank_domain_index" UNIQUE, btree (rank, domain)
```
### Access method:
```
heap
```