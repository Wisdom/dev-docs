---
title: 'Report: Hello World Query'
sidebar_label: '@wisdom/developing/hello-world'
---


## Example Usage

```sql
SELECT * FROM community.report(NULL::"@wisdom/developing/hello-world");
```


## Report Context



#### Context
Here we've got the most basic example of a community report. From 10 generated rows, we statically return two 'Hello World' and 'foo' strings. The column names are defined in the manifest file.


## Report Definitions

#### Input Parameters


| Name                                               |
|----------------------------------------------------|



#### Output Record Type


| Name                           | Type                 |
|--------------------------------|----------------------|
| greeting                       | text                 |
| bar                            | text                 |



#### SQL Report Query

```
SELECT 
    'Hello World',
    'foo'
FROM
    generate_series(1,10) i; -- Generate 10 rows.
```

    