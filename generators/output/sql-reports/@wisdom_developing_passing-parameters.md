---
title: 'Report: Hello world Query'
sidebar_label: '@wisdom/developing/passing-parameters'
---


## Example Usage

```sql
SELECT * FROM community.report(NULL::community_types."@wisdom/developing/passing-parameters", 
	_project_id => ?
);
```


## Report Context




#### Context
Here we've got a simple example of passing parameters into community reports. All parameters passed are accessible as a JSONB object at $1.  Accessing a value by key value generally requires casting to a known data type.

`($1->>'_project_id')::INTEGER`




## Report Definitions

#### Input Parameters


| Name                                               |
|----------------------------------------------------|
| projectid                                          |



#### Output Record Type


| Name                           | Type                 |
|--------------------------------|----------------------|
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
    "projectId",
    "sessionStart",
    "identityId",
    "timezoneIANA",
    "countryCode",
    "browserName",
    "activeTime"
FROM ATOMIC.SESSION
WHERE
    "projectId" = ($1->>'_project_id')::INTEGER
ORDER BY 
    "sessionStart" DESC
LIMIT 10;
```

    