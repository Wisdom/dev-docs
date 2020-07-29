---
title: 'Table "team.gallery_session_view"'
sidebar_label: 'team.gallery_session_view'
---
Column   |           Type           | Nullable |                              Default                               | Storage  | Description 
------------|--------------------------|----------|--------------------------------------------------------------------|----------|-------------
`"viewId"`     | bigint                   | not null | nextval('"UserEngagementTracking_userEngagementId_seq"'::regclass) | plain    | 
`"projectId"`  | integer                  | not null |                                                                    | plain    | 
`"userId"`     | integer                  | not null |                                                                    | plain    | 
`"typeId"`     | integer                  |          |                                                                    | plain    | 
`"identityId"` | character varying(255)   |          |                                                                    | extended | 
`"details"`    | jsonb                    |          |                                                                    | extended | 
`"viewedAt"`   | timestamp with time zone |          | CURRENT_TIMESTAMP                                                  | plain    | 
`"sessionId"`  | character varying(37)    |          |                                                                    | extended | 
### Indexes:
```
"UserEngagementTracking_pkey" PRIMARY KEY, btree ("viewId")
"IDX__GallerySessionView--projectId-sessionId-viewedAt" btree ("projectId", "sessionId", "viewedAt")
"userengagementtracking_projectid_occuredat_userid_typeid_index" btree ("projectId", "viewedAt", "userId", "typeId")
"userengagementtracking_userid_projectid_occuredat_typeid_index" btree ("userId", "projectId", "viewedAt", "typeId")
```
### Access method:
```
heap
```