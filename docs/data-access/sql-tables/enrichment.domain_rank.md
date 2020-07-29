---
title: 'Table "enrichment.domain_rank"'
sidebar_label: 'enrichment.domain_rank'
---
Column |          Type          | Nullable | Default | Storage  | Description 
--------|------------------------|----------|---------|----------|-------------
`"domain"` | character varying(100) | not null |         | extended | 
`"rank"`   | integer                | not null |         | plain    | 
### Indexes:
```
"DomainRank_pkey" PRIMARY KEY, btree (domain, rank)
"domainrank_domain_unique" UNIQUE CONSTRAINT, btree (domain)
"domainrank_rank_unique" UNIQUE CONSTRAINT, btree (rank)
"domainrank__domain_rank__hash_idx" hash (domain)
"domainrank_rank_domain_index" btree (rank, domain)
```
### Access method:
```
heap
```