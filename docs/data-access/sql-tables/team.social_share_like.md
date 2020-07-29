---
title: 'Table "team.social_share_like"'
sidebar_label: 'team.social_share_like'
---
Column   |           Type           | Nullable |                      Default                      | Storage | Description 
------------|--------------------------|----------|---------------------------------------------------|---------|-------------
`"likeId"`     | bigint                   | not null | nextval('"SocialShareLike_likeId_seq"'::regclass) | plain   | 
`"shareId"`    | bigint                   | not null |                                                   | plain   | 
`"userId"`     | integer                  |          |                                                   | plain   | 
`"reactionId"` | integer                  |          |                                                   | plain   | 
`"createdAt"`  | timestamp with time zone |          | now()                                             | plain   | 
`"updatedAt"`  | timestamp with time zone |          | now()                                             | plain   | 
`"projectId"`  | integer                  |          |                                                   | plain   | 
### Indexes:
```
"SocialShareLike_pkey" PRIMARY KEY, btree ("likeId")
"socialsharelike_shareid_userid_index" btree ("shareId", "userId")
"socialsharelike_userid_shareid_index" btree ("userId", "shareId")
Foreign-key constraints:
"FK_SocialShareComment_shareId" FOREIGN KEY ("shareId") REFERENCES social_share("shareId") ON UPDATE CASCADE ON DELETE CASCADE
"FK_SocialShareComment_userId" FOREIGN KEY ("userId") REFERENCES "user"("userId") ON UPDATE CASCADE ON DELETE CASCADE
```
### Access method:
```
heap
```