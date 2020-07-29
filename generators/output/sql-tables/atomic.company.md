---
title: 'Table "atomic.company"'
sidebar_label: 'atomic.company'
---
Column         |           Type           | Nullable | Default | Storage  | Description 
------------------------|--------------------------|----------|---------|----------|-------------
`"companyId"`              | character varying(40)    | not null |         | extended | 
`"projectId"`              | integer                  | not null |         | plain    | 
`"name"`                   | character varying(128)   |          |         | extended | 
`"description"`            | character varying(4096)  |          |         | extended | 
`"notes"`                  | jsonb                    |          |         | extended | 
`"leaders"`                | text[]                   |          |         | extended | 
`"tags"`                   | text[]                   |          |         | extended | 
`"tasks"`                  | jsonb                    |          |         | extended | 
`"details"`                | jsonb                    |          |         | extended | 
`"isPaid"`                 | boolean                  |          |         | plain    | 
`"streetAddressHQ"`        | character varying(64)    |          |         | extended | 
`"cityAddressHQ"`          | character varying(64)    |          |         | extended | 
`"regionCodeAddressHQ"`    | character varying(64)    |          |         | extended | 
`"countryCodeAddressHQ"`   | character varying(64)    |          |         | extended | 
`"postalZipCodeHQ"`        | character varying(64)    |          |         | extended | 
`"phone"`                  | character varying(32)    |          |         | extended | 
`"logoURL"`                | character varying(512)   |          |         | extended | 
`"website"`                | character varying(128)   |          |         | extended | 
`"domain"`                 | character varying(128)   |          |         | extended | 
`"monthlyRevenuePerSeat"`  | numeric                  |          |         | main     | 
`"monthlyRevenueEstimate"` | numeric                  |          |         | main     | 
`"createdAt"`              | timestamp with time zone |          | now()   | plain    | 
`"updatedAt"`              | timestamp with time zone |          | now()   | plain    | 
`"stripeCustomerId"`       | character varying(36)    |          |         | extended | 
`"totalRevenue"`           | numeric(12,4)            |          |         | main     | 
`"softDeletedAt"`          | timestamp with time zone |          |         | plain    | 
### Indexes:
```
"Company_pkey" PRIMARY KEY, btree ("companyId")
"Unique__Company__projectId_companyId" UNIQUE CONSTRAINT, btree ("projectId", "companyId")
"Company_tags" gin (tags)
"company_projectid_companyid_index" btree ("projectId", "companyId")
"company_projectid_createdat_index" btree ("projectId", "createdAt")
"company_projectid_domain_index" btree ("projectId", domain)
"company_projectid_phone_index" btree ("projectId", phone)
```
### Policies:
```
POLICY "Company__rls_1_policy"
USING (("projectId" = get_user_accessible_project_id()))
```
### Access method:
```
heap
```