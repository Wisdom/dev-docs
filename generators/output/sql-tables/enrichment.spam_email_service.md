---
title: 'Table "enrichment.spam_email_service"'
sidebar_label: 'enrichment.spam_email_service'
---
Column |          Type          | Nullable | Default | Storage  | Description 
--------|------------------------|----------|---------|----------|-------------
`"domain"` | character varying(100) | not null |         | extended | 
### Indexes:
```
"PublicEmailService_pkey" PRIMARY KEY, btree (domain)
"publicemailservice_domain_unique" UNIQUE CONSTRAINT, btree (domain)
"publicemailservice__domain__hash_idx" hash (domain)
```
### Access method:
```
heap
```