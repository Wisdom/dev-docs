---
title: 'Report: Hello world Query'
sidebar_label: '@wisdom/developing/building-on-other-queries'
---


## Example Usage

```sql
SELECT * FROM community.report(NULL::"@wisdom/developing/building-on-other-queries");
```


## Report Context



#### Context
Here we've got a query fetching records from a community report, and adding on one static text column 'Added Column' named `more`.


## Report Definitions

#### Input Parameters


| Name                                               |
|----------------------------------------------------|



#### Output Record Type


| Name                           | Type                 |
|--------------------------------|----------------------|
| greeting                       | text                 |
| bar                            | text                 |
| more                           | text                 |



#### SQL Report Query

```
SELECT
    *,
    'Added Column'
FROM
    community.report(NULL::community_types."@wisdom/developing/hello-world");

```

    