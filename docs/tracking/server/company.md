---
title: Company Tracking
sidebar_label: Company Tracking
preview: ''

createdAt: 2018-07-5 9:02:52
updatedAt: 2018-07-11 12:42:57

seo:
  title: ''
  desc: ''

tags:

author: ''
public: True
---

import Image from '@theme/IdealImage';
import Code from '../../../src/common/code/'


## Company Membership

Part of what makes Wisdom a really compelling tool is the company CRM tracker. You can [search for particular companies](https://app.getwisdom.io/org/~/project/~/dashboard/reports/companies/directory).

<Image img={require('./company.png')} className='noShadow'/>


In order to update company traits, on your server, you should HTTP POST to the following endpoint `https://producer.getwisdom.io/api/v1/ingestion/company/${__COMPANY_ID__}`, providing the following params in the body of the HTTP Post. Remember to [generate an API token](https://app.getwisdom.io/org/~/project/~/configs/api-access) and include it in the body as `apiSecretToken`.



| Company Trait          | SQL Field Type           |
|------------------------|--------------------------|
| `companyId`              | character varying(40)    |
| `name`                   | character varying(128)   |
| `description`            | character varying(1024)  |
| `notes`                  | jsonb                    |
| `leaders`                | text[]                   |
| `tags`                   | text[]                   |
| `tasks`                  | jsonb                    |
| `details`                | jsonb                    |
| `isPaid`                 | boolean                  |
| `streetAddressHQ`        | character varying(64)    |
| `cityAddressHQ`          | character varying(64)    |
| `regionCodeAddressHQ`    | character varying(64)    |
| `countryCodeAddressHQ`   | character varying(64)    |
| `postalZipCodeHQ`        | character varying(64)    |
| `phone`                  | character varying(32)    |
| `logoURL`                | character varying(512)   |
| `website`                | character varying(128)   |
| `domain`                 | character varying(128)   |
| `monthlyRevenuePerSeat`  | numeric                  |
| `monthlyRevenueEstimate` | numeric                  |
| `stripeCustomerId`       | character varying(36)    |
| `totalRevenue`           | numeric(12,4)            |



<Code type='bash' title='BASH Example: Updating Company Names & Descriptions' code={`
curl -X POST "https://producer.getwisdom.io/api/v1/ingestion/company/$(__COMPANY_ID__)" \\
-H 'Content-Type: application/json; charset=utf-8' \\
-d \
"
{
    \\"apiSecretToken\\": \\"xxxxxxxxxxxxxxxxxxx\\",
    \\"name\\": \\"SaaS Corp\\",
    \\"description\\": \\"test\\",
    \\"notes\\": \\"Notes to record.\\",
    \\"tags\\": [\\"enterprise\\", \\"emea\\"],
    \\"phone\\": \\"+1 (415) 123 - 4567\\",
    \\"domain\\": \\"example.com\\",
    \\"logoURL\\": \\"https://www.example.com/logo.png\\"
}"
`}/>


<Code language='javascript' title='JS Example: Updating Company Names & Descriptions' code={`
const request = require('request');\n
request({
    url: \`https://producer.getwisdom.io/api/v1/ingestion/company/\${companyId}\`,
    method: 'post'
    json: true,
    body: {
        // API Token created at "https://app.getwisdom.io/org/~/project/~/configs/api-access"
        apiSecretToken: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
        name,
        description,
        notes,
        leaders,
        tags,
        tasks,
        details,
        isPaid,
        streetAddressHQ,
        cityAddressHQ,
        regionCodeAddressHQ ,
        countryCodeAddressHQ,
        postalZipCodeHQ,
        phone,
        logoURL,
        website,
        domain,
        revPerSeat,
        estMonthlyRev,
    },
})
`}/>



## Generating an API Token 

Remember to [generate an API token](https://app.getwisdom.io/org/~/project/~/configs/api-access) for your project, in order to use the server side API to update company information.
<Image img={require('./auth-token.png')} className='noShadow'/>

