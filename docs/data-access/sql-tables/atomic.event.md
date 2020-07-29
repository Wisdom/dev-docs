---
title: 'Table "atomic.event"'
sidebar_label: 'atomic.event'
---
Column         |           Type           | Nullable |                 Default                  | Storage  | Description 
-----------------------|--------------------------|----------|------------------------------------------|----------|-------------
`"eventId"`               | bigint                   | not null | nextval('"Event_eventId_seq"'::regclass) | plain    | 
`"projectId"`             | integer                  | not null |                                          | plain    | 
`"sessionId"`             | character varying(37)    | not null |                                          | extended | 
`"identityId"`            | character varying(80)    |          |                                          | extended | 
`"occuredAt"`             | timestamp with time zone |          |                                          | plain    | 
`"localTime"`             | time without time zone   |          |                                          | plain    | 
`"pageTitle"`             | character varying(128)   |          |                                          | extended | 
`"pageURLOrigin"`         | character varying(255)   |          |                                          | extended | 
`"pageURLPath"`           | character varying(255)   |          |                                          | extended | 
`"pageURLSearchParams"`   | jsonb                    |          |                                          | extended | 
`"type"`                  | text                     |          |                                          | extended | 
`"genType"`               | character varying(24)    |          |                                          | extended | 
`"genText"`               | character varying(256)   |          |                                          | extended | 
`"genSelector"`           | character varying(320)   |          |                                          | extended | 
`"genInt"`                | integer                  |          |                                          | plain    | 
`"genBool"`               | boolean                  |          |                                          | plain    | 
`"details"`               | jsonb                    |          |                                          | extended | 
`"pageURLPathCompressed"` | character varying(255)   |          |                                          | extended | 
`"softDeletedAt"`         | timestamp with time zone |          |                                          | plain    | 
### Indexes:
```
"Event_pkey" PRIMARY KEY, btree ("eventId")
"Event--projectId-pageURLPathCompressed-occuredAt" btree ("projectId", "pageURLPathCompressed", "occuredAt")
"Event-Constraint-2" btree ("projectId", type, "occuredAt")
"Event-Constraint-3" btree ("projectId", "pageURLPath", "occuredAt")
"Event-Contraint-0" btree ("projectId", "occuredAt") CLUSTER
"event__partial_idx_event_error_id_identity" btree ("projectId", "occuredAt", (details ->> 'errorId'::text), "identityId") WHERE type = 'ERROR'::text
"event__partial_idx_page_change__compressedurl_time" btree ("projectId", "pageURLOrigin", "pageURLPathCompressed", "occuredAt", "identityId", ((details ->> 'active'::text)::integer), "sessionId") WHERE type = 'PAGE_CHANGE'::text
"event__partial_idx_page_change__identityid_compressedurl" btree ("projectId", "identityId", "pageURLOrigin", "pageURLPathCompressed", "occuredAt", ((details ->> 'active'::text)::integer), "sessionId") WHERE type = 'PAGE_CHANGE'::text AND "identityId" IS NOT NULL
"event__partial_idx_page_change__occured_page_user_session" btree ("projectId", "occuredAt", "pageURLOrigin", "pageURLPath", "identityId", ((details ->> 'active'::text)::bigint), "sessionId") WHERE type = 'PAGE_CHANGE'::text
"partial_idx_event_error_id_identity" btree ("projectId", "occuredAt", (details -> 'errorId'::text), "identityId") WHERE type = 'ERROR'::text
```
### Policies:
```
POLICY "Event__rls_1_policy"
USING (("projectId" = get_user_accessible_project_id()))
```
### Access method:
```
heap
```