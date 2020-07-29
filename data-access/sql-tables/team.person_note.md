---
title: 'Table team.person_note'
sidebar_label: 'team.person_note'
---
Table "team.person_note"
Column        |           Type           | Nullable | Default | Storage  | Description 
---------------------|--------------------------|----------|---------|----------|-------------
`"projectId"`           | integer                  | not null |         | plain    | 
`"identityId"`          | character varying(80)    | not null |         | extended | 
`"content"`             | jsonb                    |          |         | extended | 
`"details"`             | jsonb                    |          |         | extended | 
`"lastChangedByUserId"` | integer                  |          |         | plain    | 
`"lastChangedByUserIp"` | inet                     |          |         | main     | 
`"createdAt"`           | timestamp with time zone |          | now()   | plain    | 
`"updatedAt"`           | timestamp with time zone |          | now()   | plain    | 
### Indexes:
```
"ProjectId_User__Note" PRIMARY KEY, btree ("projectId", "identityId")
```
### Policies:
```
POLICY "PersonNote__rls_1_policy"
USING (("projectId" = get_user_accessible_project_id()))
```
### Access method:
```
heap
```