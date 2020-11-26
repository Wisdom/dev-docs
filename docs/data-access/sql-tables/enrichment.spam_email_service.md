---
title: 'Table "enrichment.spam_email_service"'
sidebar_label: 'enrichment.spam_email_service'
---
Column |          Type          | Nullable | Default | Storage  | Description 
--------|------------------------|----------|---------|----------|-------------
`"domain"` | character varying(100) | not null |         | extended | 
### Indexes:
```
"publicemailservice__domain__btree_idx" UNIQUE, btree (domain)
"publicemailservice__domain__hash_idx" hash (domain)
```
### Access method:
```
heap
```