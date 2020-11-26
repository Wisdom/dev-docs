---
title: 'Table "enrichment.company_basic"'
sidebar_label: 'enrichment.company_basic'
---
Column          |   Type   | Nullable | Default | Storage  | Description 
-------------------------|----------|----------|---------|----------|-------------
`"domain"`                  | text     | not null |         | extended | 
`"name"`                    | text     |          |         | extended | 
`"yearFounded"`             | smallint |          |         | plain    | 
`"industry"`                | text     |          |         | extended | 
`"sizeRange"`               | text     |          |         | extended | 
`"locality"`                | text     |          |         | extended | 
`"country"`                 | text     |          |         | extended | 
`"currentEmployeeEstimate"` | integer  |          |         | plain    | 
`"totalEmployeeEstimate"`   | integer  |          |         | plain    | 
`"linkedinUrl"`             | text     |          |         | extended | 
`"twitterUrl"`              | text     |          |         | extended | 
`"facebookUrl"`             | text     |          |         | extended | 
`"crunchbaseUrl"`           | text     |          |         | extended | 
### Indexes:
```
"company_basic__idx__year_employees" UNIQUE, btree (domain) INCLUDE ("yearFounded", "sizeRange", "currentEmployeeEstimate", "totalEmployeeEstimate")
```
### Access method:
```
heap
```