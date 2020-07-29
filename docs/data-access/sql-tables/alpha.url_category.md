---
title: 'Table "alpha.url_category"'
sidebar_label: 'alpha.url_category'
---
Column       |           Type           | Nullable |                   Default                    | Storage  | Description 
--------------------|--------------------------|----------|----------------------------------------------|----------|-------------
`"urlId"`              | bigint                   | not null | nextval('"UrlCategory_urlId_seq"'::regclass) | plain    | 
`"projectId"`          | integer                  | not null |                                              | plain    | 
`"pageUrlOrigin"`      | character varying(120)   | not null |                                              | extended | 
`"pageUrlPath"`        | character varying(255)   | not null |                                              | extended | 
`"groupedPageUrlPath"` | character varying(255)   | not null |                                              | extended | 
`"lastTaggedByUserId"` | integer                  |          |                                              | plain    | 
`"lastTaggedAt"`       | timestamp with time zone |          |                                              | plain    | 
`"lastPredictedAt"`    | timestamp with time zone |          |                                              | plain    | 
`"tags"`               | text[]                   |          |                                              | extended | 
`"guessedTags"`        | text[]                   |          |                                              | extended | 
`"note"`               | character varying(255)   |          |                                              | extended | 
### Indexes:
```
"UrlCategory_pkey" PRIMARY KEY, btree ("urlId")
"urlcategory_pageurlorigin_pageurlpath_unique" UNIQUE CONSTRAINT, btree ("pageUrlOrigin", "pageUrlPath")
"UrlCategory_guessedTags" gin ("guessedTags")
"UrlCategory_tags" gin (tags)
"urlcategory_projectid_groupedpageurlpath_pageurlpath_index" btree ("projectId", "groupedPageUrlPath", "pageUrlPath")
"urlcategory_projectid_lasttaggedat_lasttaggedbyuserid_index" btree ("projectId", "lastTaggedAt", "lastTaggedByUserId")
"urlcategory_projectid_pageurlpath_groupedpageurlpath_index" btree ("projectId", "pageUrlPath", "groupedPageUrlPath")
```
### Access method:
```
heap
```