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
`"genType"`               | text                     |          |                                          | extended | 
`"genText"`               | character varying(256)   |          |                                          | extended | 
`"genSelector"`           | text                     |          |                                          | extended | 
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
"event__idx_proj_session" btree ("projectId" DESC NULLS LAST, "sessionId" varchar_pattern_ops) INCLUDE ("eventId")
"event__partial_idx_page_change__compressedurl_time" btree ("projectId", "pageURLOrigin", "pageURLPathCompressed", "occuredAt", "identityId", ((details ->> 'active'::text)::integer), "sessionId") WHERE type = 'PAGE_CHANGE'::text
"event__partial_idx_page_change__identityid_compressedurl" btree ("projectId", "identityId", "pageURLOrigin", "pageURLPathCompressed", "occuredAt", ((details ->> 'active'::text)::integer), "sessionId") WHERE type = 'PAGE_CHANGE'::text AND "identityId" IS NOT NULL
"event__partial_idx_page_change__occured_page_user_session" btree ("projectId", "occuredAt", "pageURLOrigin", "pageURLPath", "identityId", ((details ->> 'active'::text)::bigint), "sessionId") WHERE type = 'PAGE_CHANGE'::text
"partial_idx_event_error_id_identity" btree ("projectId", "occuredAt", (details -> 'errorId'::text), "identityId") WHERE type = 'ERROR'::text
"partial_idx_event_errorid" btree ("projectId", (details ->> 'errorId'::text) varchar_pattern_ops) INCLUDE ("eventId", "sessionId") WHERE type = 'ERROR'::text
"partial_idx_event_genselector_url_time_sessionid" btree ("projectId" DESC NULLS LAST, "genSelector" varchar_pattern_ops DESC NULLS LAST, "pageURLPathCompressed" varchar_pattern_ops DESC NULLS LAST, "pageURLOrigin" DESC NULLS LAST, "occuredAt" DESC NULLS LAST) INCLUDE ("sessionId", "identityId", details) WHERE type = 'CLICK'::text
"partial_idx_event_input_genselector_url_time" btree ("projectId" DESC NULLS LAST, "genSelector" varchar_pattern_ops DESC NULLS LAST, "pageURLPathCompressed" varchar_pattern_ops DESC NULLS LAST, "pageURLOrigin" varchar_pattern_ops DESC NULLS LAST, "occuredAt" DESC NULLS LAST) INCLUDE ("genText", "sessionId") WHERE type = 'INPUT'::text
"partial_idx_event_url_genselector_time_sessionid" btree ("projectId" DESC NULLS LAST, "pageURLPathCompressed" varchar_pattern_ops DESC NULLS LAST, "pageURLOrigin" varchar_pattern_ops DESC NULLS LAST, "genSelector" varchar_pattern_ops DESC NULLS LAST, "occuredAt" DESC NULLS LAST) INCLUDE ("sessionId", "identityId", details) WHERE type = 'CLICK'::text
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