---
title: 'Table team.social_share'
sidebar_label: 'team.social_share'
---
Table "team.social_share"
Column       |           Type           | Nullable |                    Default                     | Storage  | Description 
--------------------|--------------------------|----------|------------------------------------------------|----------|-------------
`"shareId"`            | bigint                   | not null | nextval('"SocialShare_shareId_seq"'::regclass) | plain    | 
`"projectId"`          | integer                  | not null |                                                | plain    | 
`"userId"`             | integer                  |          |                                                | plain    | 
`"type"`               | integer                  | not null |                                                | plain    | 
`"title"`              | character varying(128)   |          |                                                | extended | 
`"description"`        | character varying(1024)  |          |                                                | extended | 
`"emoji"`              | integer                  |          |                                                | plain    | 
`"tags"`               | text[]                   |          |                                                | extended | 
`"wallIds"`            | bigint[]                 |          |                                                | extended | 
`"sessionId"`          | character varying(37)    | not null |                                                | extended | 
`"sessionStart"`       | timestamp with time zone | not null |                                                | plain    | 
`"sessionEnd"`         | timestamp with time zone |          |                                                | plain    | 
`"createdAt"`          | timestamp with time zone |          | now()                                          | plain    | 
`"updatedAt"`          | timestamp with time zone |          | now()                                          | plain    | 
`"identityId"`         | character varying(80)    |          |                                                | extended | 
`"public"`             | boolean                  |          |                                                | plain    | 
`"resolved"`           | boolean                  |          |                                                | plain    | 
`"reviewLevel"`        | integer                  |          |                                                | plain    | 
`"priority"`           | integer                  |          |                                                | plain    | 
`"secret"`             | character varying(256)   |          |                                                | extended | 
`"mediaUpdatedAt"`     | timestamp with time zone |          |                                                | plain    | 
`"assignedUserIds"`    | bigint[]                 |          |                                                | extended | 
`"requestUpdate"`      | timestamp with time zone |          |                                                | plain    | 
`"anonymousId"`        | character varying(37)    |          |                                                | extended | 
`"apologizedAt"`       | timestamp with time zone |          |                                                | plain    | 
`"apologizedByUserId"` | integer                  |          |                                                | plain    | 
`"apologyMsg"`         | character varying(2000)  |          |                                                | extended | 
### Indexes:
```
"SocialShare_pkey" PRIMARY KEY, btree ("shareId")
"SocialShare--projectId-identityId-sessionId-createdAt" btree ("projectId", "identityId", "sessionId", "createdAt")
"SocialShare--secret-projectId-public-shareId-sessionAt" btree (secret, "projectId", public, "shareId", "sessionId")
"socialshare_projectid_apologizedat_apologizedbyuserid_index" btree ("projectId", "apologizedAt", "apologizedByUserId")
"socialshare_projectid_apologizedbyuserid_apologizedat_index" btree ("projectId", "apologizedByUserId", "apologizedAt")
"socialshare_projectid_index" btree ("projectId")
"socialshare_userid_index" btree ("userId")
Foreign-key constraints:
"FK_SocialShare_userId" FOREIGN KEY ("userId") REFERENCES "user"("userId") ON UPDATE CASCADE ON DELETE CASCADE
Referenced by:
TABLE "social_share_comment" CONSTRAINT "FK_SocialShareComment_shareId" FOREIGN KEY ("shareId") REFERENCES social_share("shareId") ON UPDATE CASCADE ON DELETE CASCADE
TABLE "social_share_like" CONSTRAINT "FK_SocialShareComment_shareId" FOREIGN KEY ("shareId") REFERENCES social_share("shareId") ON UPDATE CASCADE ON DELETE CASCADE
```
### Policies:
```
POLICY "SocialShare__rls_1_policy"
USING (("projectId" = get_user_accessible_project_id()))
```
### Access method:
```
heap
```