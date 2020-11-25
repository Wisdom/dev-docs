---
title: 'Table "atomic.mail_inbox"'
sidebar_label: 'atomic.mail_inbox'
---
Column       |           Type           | Nullable |      Default      | Storage  | Description 
--------------------|--------------------------|----------|-------------------|----------|-------------
`"projectId"`          | integer                  | not null |                   | plain    | 
`"mailId"`             | character varying(45)    | not null |                   | extended | 
`"toEmails"`           | text[]                   | not null |                   | extended | 
`"sentAt"`             | timestamp with time zone |          |                   | plain    | 
`"insertedAt"`         | timestamp with time zone | not null | CURRENT_TIMESTAMP | plain    | 
`"to"`                 | jsonb                    |          |                   | extended | 
`"cc"`                 | jsonb                    |          |                   | extended | 
`"from"`               | jsonb                    |          |                   | extended | 
`"subject"`            | character varying(150)   |          |                   | extended | 
`"textPreview"`        | character varying(150)   |          |                   | extended | 
`"headers"`            | character varying(10000) |          |                   | extended | 
`"senderIp"`           | inet                     |          |                   | main     | 
`"envelope"`           | jsonb                    |          |                   | extended | 
`"dkim"`               | character varying(200)   |          |                   | extended | 
`"spf"`                | character varying(200)   |          |                   | extended | 
`"isHtml"`             | boolean                  |          |                   | plain    | 
`"attachementRefs"`    | jsonb                    |          |                   | extended | 
`"attachmentCount"`    | integer                  |          |                   | plain    | 
`"toEmailsLowerCased"` | text[]                   |          |                   | extended | 
`"softDeletedAt"`      | timestamp with time zone |          |                   | plain    | 
### Indexes:
```
"PersonInbox_pkey" PRIMARY KEY, btree ("projectId", "toEmails", "insertedAt")
"PersonInbox_toEmails" gin ("toEmails")
"personinbox_mailid_unique" UNIQUE CONSTRAINT, btree ("mailId")
```
### Access method:
```
heap
```