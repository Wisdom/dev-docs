---
title: Object Storage (AWS S3)
sidebar_label: S3 Object Storage
---


import Code from '../../src/common/code/'


:::note TL;DR
- Data stored in Ireland.<br/>
- Files are Brotli compressed.<br/>
- ProjectId is redundantly used for consistency with multi-tenant logic.<br/>
- {MM} Month starts at one.<br/>
- {DD} starts at one.
:::


## Object Storage:

Wisdom makes use of object ("blob", "bucket") storage for various purposes, including for saving session records, rendered video clips ("GIFs"), tracked email messages, and caching certain SQL queries. All this data is fully readible- just reach out to the Wisdom team to recieve your **READ_ONLY** S3 access credentials. Generally the most important resources uploaded to S3 are the session recording JSON objects comprising of records like HTML changes and user actions.


### Object Schema (virtual folders):
To better manage data retention of S3 objects, the common naming pattern has emerged of prefixing namespace_type + calendar(YYYY/MM/DD) + projectId. This makes it easy to routinely delete old data matching criteria for example, `session_recordings/2019/06/*`. For redundant safety, we add a tenantId (`projectId`) for each S3 object. The calendar date applied is derrived from the primary data field for each record. For recorded sessions stored within the `session_recordings` prefix, this calendar string is derrived from the `sessionStart` column of the `atomic.session` table.

Session Recording objects are uploaded to your Wisdom bucket at a location determined by the year, month, and day of the `"sessionStart"` column of the `session` table, with the file name as the `"sessionId"`.

All files are [Brotli](https://en.wikipedia.org/wiki/Brotli) encoded and compressed. [Browser support](https://caniuse.com/#feat=brotli) is reported at 95% (August 2020), with IE 11 and Opera Mini being the usual non-implementing laggards.



```
- session_recordings/{YYYY}/{MM}/{DD}/{projectId}_{sessionId}.json
- archived_session_recordings/{YYYY}/{MM}/{DD}/{projectId}_{sessionId}.json
- mail_inbox/{YYYY}/{MM}/{DD}/{projectId}_{mailId}.html
- media_rendered/{YYYY}/{MM}/{DD}/{projectId}_{postId}.{jpg|mp4|gif etc}
- system_analysis/.../{projectId}_${name}.{file_type_usually_json}  -- NOTE: no history
```

#### Cantidate Folder Schema Additions:
The Wisdom dev team is considering the following S3 schema updates to be added near the end of 2020.
```
- report_marketplace/${appId}/{projectId}  -- NOTE: loose schema
- visual_regressions/{YYYY}/{MM}/{DD}/{projectId}_{eventId}...
- persisted_web_assets/{YYYY}/{MM}/{DD}/{projectId}_...
```


### Example Code

Accessing S3 object data isn't particularily complicated. Try out the blow code to get certain blob data.

<Code type='js' title='Reading S3 Objects: Getting a Session Record' code={`
const AWS = require('aws-sdk');
\n
const s3 = AWS.S3({
    apiVersion: '2006-03-01',
    region: 'eu-west-1',
    accessKeyId: 'XXXXXXXXXXXXXXX', \t// Add your credentials here
    secretAccessKey: 'XXXXXXXXXXXXXXX', // Add your credentials here
});\n\n
(async (session) => {
    const calendarStr = new Date(session.sessionStart) // ISO date: "2020/07/28"
    \t.toISOString()
    \t.slice(0, 10)
    \t.replace(/-/g, '/');\n
    const sessionRecoring = await s3.getObject({
        Bucket: 'wisdom-project-1', // Replace with your assigned bucket name,
        Key: \`session_recordings/\${calendarStr}/\${session.projectId}_\${session.sessionId}.json\`
    });
    console.log(JSON.stringify(sessionRecoring, null, 2));
})();
`}/>
