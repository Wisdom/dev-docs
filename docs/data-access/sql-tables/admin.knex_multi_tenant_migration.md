---
title: 'Table "admin.knex_multi_tenant_migration"'
sidebar_label: 'admin.knex_multi_tenant_migration'
---
Column     |           Type           | Nullable |                   Default                   | Storage  | Description 
----------------|--------------------------|----------|---------------------------------------------|----------|-------------
`"id"`             | integer                  | not null | nextval('knex_migrations_id_seq'::regclass) | plain    | 
`"name"`           | character varying(255)   |          |                                             | extended | 
`"batch"`          | integer                  |          |                                             | plain    | 
migration_time | timestamp with time zone |          |                                             | plain    | 
### Indexes:
```
"knex_migrations_pkey" PRIMARY KEY, btree (id)
```
### Access method:
```
heap
```