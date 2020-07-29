---
title: 'Table "atomic.employee"'
sidebar_label: 'atomic.employee'
---
Column     |           Type           | Nullable | Default | Storage  | Description 
---------------|--------------------------|----------|---------|----------|-------------
`"identityId"`    | character varying(40)    | not null |         | extended | 
`"companyId"`     | character varying(40)    | not null |         | extended | 
`"projectId"`     | integer                  | not null |         | plain    | 
`"title"`         | character varying(128)   |          |         | extended | 
`"description"`   | character varying(4096)  |          |         | extended | 
`"notes"`         | jsonb                    |          |         | extended | 
`"tags"`          | character varying(64)[]  |          |         | extended | 
`"startAt"`       | timestamp with time zone |          | now()   | plain    | 
`"endAt"`         | timestamp with time zone |          |         | plain    | 
`"reportsTo"`     | character varying(40)[]  |          |         | extended | 
`"directReports"` | character varying(40)[]  |          |         | extended | 
`"officePhone"`   | character varying(32)    |          |         | extended | 
`"cellPhone"`     | character varying(32)    |          |         | extended | 
`"createdAt"`     | timestamp with time zone |          | now()   | plain    | 
`"updatedAt"`     | timestamp with time zone |          | now()   | plain    | 
`"seniority"`     | character varying(40)    |          |         | extended | 
`"department"`    | character varying(60)    |          |         | extended | 
`"softDeletedAt"` | timestamp with time zone |          |         | plain    | 
### Indexes:
```
"Unique__Employee__projectId_companyId_identityId" UNIQUE CONSTRAINT, btree ("projectId", "companyId", "identityId")
"Employee__directReports_Employee" gin ("directReports") WHERE "directReports" IS NOT NULL
"Employee__reportsTo_Employee" gin ("reportsTo") WHERE "reportsTo" IS NOT NULL
"Employee__tags" gin (tags) WHERE tags IS NOT NULL
"employee_projectid_companyid_identityid_index" btree ("projectId", "companyId", "identityId")
"employee_projectid_identityid_companyid_index" btree ("projectId", "identityId", "companyId")
```
### Policies:
```
POLICY "Employee__rls_1_policy"
USING (("projectId" = get_user_accessible_project_id()))
```
### Access method:
```
heap
```