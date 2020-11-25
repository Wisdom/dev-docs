---
title: 'Table "rollup.rollup_daily_project_metrics"'
sidebar_label: 'rollup.rollup_daily_project_metrics'
---
Column              |           Type           | Nullable |      Default      | Storage  | Description 
----------------------------------|--------------------------|----------|-------------------|----------|-------------
`"projectId"`                        | integer                  | not null |                   | plain    | 
`"date"`                             | timestamp with time zone | not null |                   | plain    | 
`"createdAt"`                        | timestamp with time zone |          | CURRENT_TIMESTAMP | plain    | 
`"sessions"`                         | bigint                   |          |                   | plain    | 
`"pageviews"`                        | bigint                   |          |                   | plain    | 
`"clicks"`                           | bigint                   |          |                   | plain    | 
`"rageClicks"`                       | bigint                   |          |                   | plain    | 
`"errors"`                           | bigint                   |          |                   | plain    | 
`"newUsers"`                         | bigint                   |          |                   | plain    | 
`"newCompanies"`                     | bigint                   |          |                   | plain    | 
`"inputEvents"`                      | bigint                   |          |                   | plain    | 
`"csp"`                              | bigint                   |          |                   | plain    | 
`"totalDuration"`                    | bigint                   |          |                   | plain    | 
`"totalActiveTime"`                  | bigint                   |          |                   | plain    | 
event_app404s                    | bigint                   |          |                   | plain    | 
event_app401s                    | bigint                   |          |                   | plain    | 
event_appCrash                   | bigint                   |          |                   | plain    | 
event_userInvite                 | bigint                   |          |                   | plain    | 
event_userRemove                 | bigint                   |          |                   | plain    | 
event_userProfileUpdate          | bigint                   |          |                   | plain    | 
event_feedback                   | bigint                   |          |                   | plain    | 
event_searchQuery                | bigint                   |          |                   | plain    | 
event_authRegistrationSuccess    | bigint                   |          |                   | plain    | 
event_authRegistrationFail       | bigint                   |          |                   | plain    | 
event_authPreRegistrationSuccess | bigint                   |          |                   | plain    | 
event_authPreRegistrationFail    | bigint                   |          |                   | plain    | 
event_authLoginSuccess           | bigint                   |          |                   | plain    | 
event_authLoginFail              | bigint                   |          |                   | plain    | 
event_authLogoutSuccess          | bigint                   |          |                   | plain    | 
event_authLogoutFail             | bigint                   |          |                   | plain    | 
event_authForgotPWSuccess        | bigint                   |          |                   | plain    | 
event_authForgotPWFail           | bigint                   |          |                   | plain    | 
event_authPasswordResetSuccess   | bigint                   |          |                   | plain    | 
event_authPasswordResetFail      | bigint                   |          |                   | plain    | 
event_ecommerceCardAdd           | bigint                   |          |                   | plain    | 
event_ecommerceCardRemove        | bigint                   |          |                   | plain    | 
event_ecommerceCardPurchase      | bigint                   |          |                   | plain    | 
event_ecommerceCardAbandon       | bigint                   |          |                   | plain    | 
`"alltimeIdentityIds"`               | bigint                   |          |                   | plain    | 
`"alltimeSessions"`                  | bigint                   |          |                   | plain    | 
`"allTimePageviews"`                 | bigint                   |          |                   | plain    | 
`"uniqueErrors"`                     | bigint                   |          |                   | plain    | 
`"uniqueIdentityIds"`                | bigint                   |          |                   | plain    | 
`"uniqueVisitedPages"`               | bigint                   |          |                   | plain    | 
`"uniqueIpAddresses"`                | bigint                   |          |                   | plain    | 
`"uniqueHllIpAddresses"`             | hll(13,5,-1,1)           |          |                   | external | 
`"uniqueHllErrors"`                  | hll(11,5,-1,1)           |          |                   | external | 
`"uniqueHllIdentityIds"`             | hll(13,5,-1,1)           |          |                   | external | 
`"uniqueHllVisitedPages"`            | hll(11,5,-1,1)           |          |                   | external | 
`"lostUsers7DaysHll"`                | hll(12,5,-1,1)           |          |                   | external | 
`"lostUsers14DaysHll"`               | hll(12,5,-1,1)           |          |                   | external | 
`"lostUsers30DaysHll"`               | hll(12,5,-1,1)           |          |                   | external | 
`"lostUsers30Days"`                  | bigint                   |          |                   | plain    | 
`"lostUsers30DaysCumulative"`        | bigint                   |          |                   | plain    | 
### Indexes:
```
"RollupDailyProjectMetrics_pkey" PRIMARY KEY, btree ("projectId", date) CLUSTER
"rollupdailyprojectmetrics_projectid_date_pageviews_index" btree ("projectId", date, pageviews)
"rollupdailyprojectmetrics_projectid_date_sessions_index" btree ("projectId", date, sessions)
"rollupdailyprojectmetrics_projectid_date_unique" UNIQUE CONSTRAINT, btree ("projectId", date)
```
### Access method:
```
heap
```