---
title: 'Table "atomic.session"'
sidebar_label: 'atomic.session'
---
Column          |           Type           | Nullable | Default | Storage  |                                                       Description                                                       
-------------------------|--------------------------|----------|---------|----------|-------------------------------------------------------------------------------------------------------------------------
`"projectId"`               | integer                  | not null |         | plain    | 
`"sessionId"`               | character varying(37)    | not null |         | extended | 
`"identityId"`              | character varying(80)    |          |         | extended | 
`"anonymousId"`             | character varying(37)    |          |         | extended | For tracking when no identityId is known. Used for stitching sessions.
`"tags"`                    | text[]                   |          |         | extended | 
`"deviceId"`                | character varying(37)    |          |         | extended | 
`"visitId"`                 | character varying(37)    |          |         | extended | 
`"tabId"`                   | character varying(37)    |          |         | extended | Used for external page path analysis
`"pageId"`                  | character varying(37)    |          |         | extended | Handles static pages and socket reconnects
`"sessionStart"`            | timestamp with time zone | not null |         | plain    | 
`"sessionEnd"`              | timestamp with time zone | not null |         | plain    | 
`"duration"`                | integer                  | not null |         | plain    | 
`"activeTime"`              | integer                  |          |         | plain    | 
`"localStartTime"`          | time without time zone   |          |         | plain    | 
`"timezoneOffset"`          | integer                  |          |         | plain    | 
`"timezoneIANA"`            | character varying(255)   |          |         | extended | 
`"clockSkew"`               | integer                  |          |         | plain    | 
`"browserFingerprint"`      | character varying(80)    |          |         | extended | 
`"deviceFingerprint"`       | character varying(80)    |          |         | extended | 
`"ipAddress"`               | inet                     |          |         | main     | 
`"countryCode"`             | character varying(4)     |          |         | extended | 
`"region"`                  | character varying(32)    |          |         | extended | 
`"city"`                    | character varying(32)    |          |         | extended | 
`"isBot"`                   | boolean                  |          |         | plain    | 
`"userAgent"`               | character varying(160)   |          |         | extended | 
`"browserVersion"`          | integer                  |          |         | plain    | 
`"browserName"`             | character varying(32)    |          |         | extended | 
`"engineName"`              | character varying(24)    |          |         | extended | 
`"deviceCategory"`          | character varying(24)    |          |         | extended | 
`"deviceVendor"`            | character varying(24)    |          |         | extended | 
`"deviceType"`              | character varying(24)    |          |         | extended | 
`"deviceModel"`             | character varying(32)    |          |         | extended | 
`"osName"`                  | character varying(24)    |          |         | extended | 
`"maxTouchPoints"`          | smallint                 |          |         | plain    | 
`"screenWidth"`             | smallint                 |          |         | plain    | 
`"screenHeight"`            | smallint                 |          |         | plain    | 
`"requestedLanguage"`       | character varying(2)     |          |         | extended | 
`"requestedRegion"`         | character varying(2)     |          |         | extended | 
`"translatedLanguage"`      | character varying(12)    |          |         | extended | 
`"utmCampaign"`             | text[]                   |          |         | extended | 
`"utmMedium"`               | text[]                   |          |         | extended | 
`"utmSource"`               | text[]                   |          |         | extended | 
`"utmTerm"`                 | text[]                   |          |         | extended | 
`"utmContent"`              | text[]                   |          |         | extended | 
`"referrerURLOrigin"`       | character varying(255)   |          |         | extended | 
`"referrerURLPath"`         | character varying(255)   |          |         | extended | 
`"referrerURLSearchParams"` | jsonb                    |          |         | extended | 
`"initTitle"`               | character varying(128)   |          |         | extended | 
`"initURLOrigin"`           | character varying(255)   |          |         | extended | 
`"initURLPath"`             | character varying(255)   |          |         | extended | 
`"initURLSearchParams"`     | jsonb                    |          |         | extended | 
`"exitTitle"`               | character varying(128)   |          |         | extended | 
`"exitURLOrgin"`            | character varying(255)   |          |         | extended | 
`"exitURLPath"`             | character varying(255)   |          |         | extended | 
`"exitURLSearchParams"`     | jsonb                    |          |         | extended | 
`"pageReloaded"`            | boolean                  |          |         | plain    | 
`"domInteractive"`          | integer                  |          |         | plain    | Milliseconds until Document.readyState changes to "interactive" and the corresponding readystatechange event is thrown.
`"domContentLoaded"`        | integer                  |          |         | plain    | 
`"load"`                    | integer                  |          |         | plain    | 
`"notes"`                   | character varying(255)   |          |         | extended | 
`"companyId"`               | text                     |          |         | extended | 
`"userActionsCount"`        | integer                  |          |         | plain    | 
`"userType"`                | integer                  |          |         | plain    | 
`"public"`                  | boolean                  |          | false   | plain    | 
`"softDeleted"`             | timestamp with time zone |          |         | plain    | 
`"pageViewsCount"`          | integer                  |          |         | plain    | 
`"buildHash"`               | character varying(32)    |          |         | extended | 
`"verified"`                | boolean                  |          |         | plain    | 
`"hasHtml"`                 | boolean                  |          |         | plain    | 
`"wisdomVersion"`           | character varying(20)    |          |         | extended | 
`"pageCreatedAt"`           | timestamp with time zone |          |         | plain    | 
`"softDeletedAt"`           | timestamp with time zone |          |         | plain    | 
s3Bytes                 | integer                  |          |         | plain    | 
### Indexes:
```
"Session_pkey" PRIMARY KEY, btree ("projectId", "sessionStart", "sessionId")
"Session_companyId" btree ("companyId")
"Session_tags" gin (tags)
"Session_utmCampaign" gin ("utmCampaign")
"Session_utmContent" gin ("utmContent")
"Session_utmMedium" gin ("utmMedium")
"Session_utmSource" gin ("utmSource")
"Session_utmTerm" gin ("utmTerm")
"session__idx__proj_start_session_duration" btree ("projectId", "sessionStart", "sessionId", "activeTime", duration, "identityId", "pageViewsCount")
"session_projectid_anonymousid_sessionstart_index" btree ("projectId", "anonymousId", "sessionStart")
"session_projectid_deviceid_index" btree ("projectId", "deviceId")
"session_projectid_identityid_sessionstart_index" btree ("projectId", "identityId", "sessionStart")
"session_projectid_ipaddress_sessionstart_sessionid_index" btree ("projectId", "ipAddress", "sessionStart", "sessionId")
"session_projectid_screenwidth_index" btree ("projectId", "screenWidth")
"session_projectid_sessionid_index" btree ("projectId", "sessionId")
```
### Policies:
```
POLICY "Session__rls_1_policy"
USING (("projectId" = get_user_accessible_project_id()))
```
### Access method:
```
heap
```