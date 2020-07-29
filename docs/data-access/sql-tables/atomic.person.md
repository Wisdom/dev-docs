---
title: 'Table "atomic.person"'
sidebar_label: 'atomic.person'
---
Column      |           Type           | Nullable | Default | Storage  | Description 
------------------|--------------------------|----------|---------|----------|-------------
`"projectId"`        | integer                  | not null |         | plain    | 
`"identityId"`       | character varying(80)    | not null |         | extended | 
`"tags"`             | text[]                   |          |         | extended | 
`"username"`         | character varying(32)    |          |         | extended | 
`"avatarURL"`        | character varying(200)   |          |         | extended | 
`"userRole"`         | character varying(32)    |          |         | extended | 
`"email"`            | character varying(255)   |          |         | extended | 
`"phone"`            | character varying(255)   |          |         | extended | 
`"firstName"`        | character varying(32)    |          |         | extended | 
`"lastName"`         | character varying(32)    |          |         | extended | 
`"gender"`           | text                     |          |         | extended | 
`"birthDate"`        | date                     |          |         | plain    | 
`"totalSpend"`       | integer                  |          |         | plain    | 
`"plan"`             | character varying(32)    |          |         | extended | 
`"geoLat"`           | numeric(12,3)            |          |         | main     | 
`"geoLng"`           | numeric(12,3)            |          |         | main     | 
`"firstEncountered"` | timestamp with time zone |          |         | plain    | 
`"registeredAt"`     | timestamp with time zone |          |         | plain    | 
`"traits"`           | jsonb                    |          |         | extended | 
`"jurisdiction"`     | character varying(32)    |          |         | extended | 
`"createdAt"`        | timestamp with time zone |          | now()   | plain    | 
`"updatedAt"`        | timestamp with time zone |          | now()   | plain    | 
`"companyIds"`       | text[]                   |          |         | extended | 
`"stripeCustomerId"` | character varying(36)    |          |         | extended | 
`"softDeletedAt"`    | timestamp with time zone |          |         | plain    | 
### Indexes:
```
"ProjectId_User" PRIMARY KEY, btree ("projectId", "identityId")
"Person_companyIds" gin ("companyIds")
"Person_tags" gin (tags)
"person__idx__proj_created_updated_identity" btree ("projectId", "createdAt", "updatedAt", "identityId")
"person__idx__proj_identity_created_updated" btree ("projectId", "identityId", "createdAt", "updatedAt")
"person_projectid_createdat_identityid_index" btree ("projectId", "createdAt", "identityId") CLUSTER
"person_projectid_email_index" btree ("projectId", email)
"person_projectid_updatedat_identityid_index" btree ("projectId", "updatedAt", "identityId")
Check constraints:
"Person_gender_check" CHECK (gender = ANY (ARRAY['male'::text, 'female'::text, 'other'::text]))
```
### Policies:
```
POLICY "Person__rls_1_policy"
USING (("projectId" = get_user_accessible_project_id()))
```
### Access method:
```
heap
```