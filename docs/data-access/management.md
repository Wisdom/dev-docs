---
title: Data Lifecycle Management
sidebar_label: Lifecycle Management:preview
---



### Data Retention

Wisdom utilizes pass-through (cost plus) pricing ontop of AWS infrastructure allowing our customers to fine-tune their storage requirements- and in many cases receive substantial cost savings.

1. Duration: Increase Data Retention from zero days to an indefinitely timeline (billing per gigabyte/hour).
2. Durability: Reducing data replication factor to cut cost by ~20%, reducing data availability and data safety in the case of data center destruction.


| Type                                  | Description                      |
|---------------------------------------|----------------------------------|
| S3 Objects: Recorded Sessions         |                                  |
| S3 Objects: (everything else)         |                                  |
| SQL Tables: <br/> - atomic.sessions <br/> - atomic.events table|         |
| SQL Tables: (everything else)         |                                  |


### Data Durability

| Type                 | Description   |
|----------------------|---------------|
| S3 Recorded Sessions |  Configurable |
| PSQL                 |  Configurable |


## Data Deprecation

Transfering out old SQL data to S3 on a weekly basis for data continuity multiple years out.