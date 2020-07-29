---
title: 'Table "team.social_share_comment"'
sidebar_label: 'team.social_share_comment'
---
Column   |           Type           | Nullable |                         Default                         | Storage  | Description 
-----------|--------------------------|----------|---------------------------------------------------------|----------|-------------
`"commentId"` | bigint                   | not null | nextval('"SocialShareComment_commentId_seq"'::regclass) | plain    | 
`"shareId"`   | bigint                   | not null |                                                         | plain    | 
`"userId"`    | integer                  |          |                                                         | plain    | 
`"comment"`   | character varying(1024)  |          |                                                         | extended | 
`"createdAt"` | timestamp with time zone |          | now()                                                   | plain    | 
`"updatedAt"` | timestamp with time zone |          | now()                                                   | plain    | 
`"projectId"` | integer                  |          |                                                         | plain    | 
### Indexes:
```
"SocialShareComment_pkey" PRIMARY KEY, btree ("commentId")
"socialsharecomment_commentid_index" btree ("commentId")
"socialsharecomment_shareid_index" btree ("shareId")
"socialsharecomment_userid_index" btree ("userId")
Foreign-key constraints:
"FK_SocialShareComment_shareId" FOREIGN KEY ("shareId") REFERENCES social_share("shareId") ON UPDATE CASCADE ON DELETE CASCADE
"FK_SocialShareComment_userId" FOREIGN KEY ("userId") REFERENCES "user"("userId") ON UPDATE CASCADE ON DELETE CASCADE
```
### Access method:
```
heap
```