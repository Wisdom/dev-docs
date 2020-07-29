---
title: 'Table "enrichment.person_enrichment"'
sidebar_label: 'enrichment.person_enrichment'
---
Column            |           Type           | Nullable | Default | Storage  | Description 
------------------------------|--------------------------|----------|---------|----------|-------------
`"email"`                        | character varying(255)   | not null |         | extended | 
`"details"`                      | jsonb                    |          |         | extended | 
`"createdAt"`                    | timestamp with time zone |          | now()   | plain    | 
`"updatedAt"`                    | timestamp with time zone |          | now()   | plain    | 
first_name                   | character varying(255)   |          |         | extended | 
`"name"`                         | character varying(255)   |          |         | extended | 
`"verified"`                     | boolean                  |          |         | plain    | 
`"avatar"`                       | character varying(255)   |          |         | extended | 
`"gender"`                       | character varying(255)   |          |         | extended | 
`"location"`                     | character varying(256)   |          |         | extended | 
`"bio"`                          | character varying(1000)  |          |         | extended | 
`"education"`                    | character varying(1000)  |          |         | extended | 
`"employment"`                   | character varying(1000)  |          |         | extended | 
`"website"`                      | character varying(255)   |          |         | extended | 
max_followers                | integer                  |          |         | plain    | 
sum_followers                | integer                  |          |         | plain    | 
`"angellist"`                    | character varying(255)   |          |         | extended | 
angellist_bio                | character varying(1000)  |          |         | extended | 
angellist_followers          | integer                  |          |         | plain    | 
`"linkedin"`                     | character varying(255)   |          |         | extended | 
linkedin_bio                 | character varying(2000)  |          |         | extended | 
linkedin_followers           | integer                  |          |         | plain    | 
`"xing"`                         | character varying(255)   |          |         | extended | 
`"producthunt"`                  | character varying(255)   |          |         | extended | 
`"facebook"`                     | character varying(255)   |          |         | extended | 
facebook_friends             | integer                  |          |         | plain    | 
facebook_followers           | integer                  |          |         | plain    | 
facebook_engagement          | integer                  |          |         | plain    | 
facebook_engagement_percent  | real                     |          |         | plain    | 
`"twitter"`                      | character varying(255)   |          |         | extended | 
twitter_verified             | boolean                  |          |         | plain    | 
twitter_bio                  | character varying(500)   |          |         | extended | 
twitter_followers            | integer                  |          |         | plain    | 
twitter_posts                | integer                  |          |         | plain    | 
twitter_engagement           | integer                  |          |         | plain    | 
twitter_engagement_percent   | real                     |          |         | plain    | 
`"stackoverflow"`                | character varying(255)   |          |         | extended | 
`"dribbble"`                     | character varying(255)   |          |         | extended | 
dribbble_followers           | integer                  |          |         | plain    | 
`"pinterest"`                    | character varying(255)   |          |         | extended | 
pinterest_bio                | character varying(255)   |          |         | extended | 
pinterest_followers          | integer                  |          |         | plain    | 
`"instagram"`                    | character varying(255)   |          |         | extended | 
instagram_verified           | boolean                  |          |         | plain    | 
instagram_bio                | character varying(255)   |          |         | extended | 
instagram_followers          | integer                  |          |         | plain    | 
instagram_is_private         | boolean                  |          |         | plain    | 
instagram_posts              | integer                  |          |         | plain    | 
instagram_engagement         | integer                  |          |         | plain    | 
instagram_engagement_percent | real                     |          |         | plain    | 
instagram_posts_captions     | character varying(255)   |          |         | extended | 
`"github"`                       | character varying(255)   |          |         | extended | 
github_followers             | integer                  |          |         | plain    | 
`"youtube"`                      | character varying(255)   |          |         | extended | 
youtube_verified             | boolean                  |          |         | plain    | 
youtube_followers            | integer                  |          |         | plain    | 
youtube_posts                | integer                  |          |         | plain    | 
youtube_engagement           | integer                  |          |         | plain    | 
youtube_engagement_percent   | real                     |          |         | plain    | 
`"googleplus"`                   | character varying(255)   |          |         | extended | 
googleplus_followers         | integer                  |          |         | plain    | 
`"googleapps"`                   | character varying(255)   |          |         | extended | 
googleapps_rated             | integer                  |          |         | plain    | 
googleapps_average           | real                     |          |         | plain    | 
googleapps_shared            | integer                  |          |         | plain    | 
`"klout"`                        | character varying(255)   |          |         | extended | 
klout_score                  | integer                  |          |         | plain    | 
### Indexes:
```
"PersonEnrichment_pkey" PRIMARY KEY, btree (email)
```
### Access method:
```
heap
```