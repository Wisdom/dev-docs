---
title: 'Report: Hello world Query'
sidebar_label: '@wisdom/developing/all-together'
---


## Example Usage

```sql
SELECT * FROM community.report(NULL::"@wisdom/developing/all-together", 
	_project_id = ?
);
```


## Report Context




#### Context
Here we take a community report and left join it on the `person` table to add two columns, the person's name and email.



## Report Definitions

#### Input Parameters


| Name                                               |
|----------------------------------------------------|
| projectid                                          |



#### Output Record Type


| Name                           | Type                 |
|--------------------------------|----------------------|
| name                           | text                 |
| email                          | varchar255           |
| projectId                      | integer              |
| sessionStart                   | timestamptz          |
| identityId                     | varchar80            |
| timezoneIANA                   | varchar255           |
| countryCode                    | varchar4             |
| browserName                    | varchar32            |
| activeTime                     | integer              |



#### SQL Report Query

```
SELECT
    person."firstName" || ' ' || person."lastName" AS name,
    person.email,
    session.*
FROM
    report(
        NULL::community_types."@wisdom/developing/passing-parameters", 
        _project_id => ($1->>'_project_id')::INTEGER
    ) AS session
LEFT JOIN atomic.person
ON 
    person."identityId" = session."identityId" AND
    person."projectId" = session."projectId"
```

    