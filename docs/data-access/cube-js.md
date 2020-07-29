---
title: Cube.js Analytics Framework
sidebar_label: Cube.js
---

import Image from '@theme/IdealImage';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Code from '../../src/common/code/'


<Image img={require('./cubejs.png')} className='noShadow'/>

[Visit Cubejs](https://cube.dev/)


Cubejs is an open source analytics framework that greatly simplifies running analytics queries. Cubejs comprises of a frontend library and backend analytical server infrastructure that Wisdom fully manages for you. Like many modern analytics frameworks, Cubejs differentiates between data dimensions (time, browser) and data measures (user count, unique page views).


### Cubes

atomic.person
atomic.session
atomic.events
atomic.mail_inbox

virtual.pageviews


rollup


### Example Code


<Tabs
  defaultValue="js"
  values={[
    {label: 'JS Code', value: 'js'},
    {label: 'Cubejs Schema', value: 'cubejs'},
    {label: 'Generated SQL', value: 'sql'},
  ]}>
  <TabItem value="js">
    <Code language='javascript' title='JavaScript' code={`
import React from 'react';
import cubejs from '@cubejs-client/core';
import { QueryRenderer } from '@cubejs-client/react';
import { Spin } from 'antd';
import { Chart, Axis, Tooltip, Geom } from 'bizcharts';
import moment from 'moment';\n
const HACKER_NEWS_API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpIjozODU5NH0.5wEbQo-VG2DEjR2nBpRpoJeIcE_oJqnrm78yUo9lasw';\n
const Example = (
  <QueryRenderer
    cubejsApi={cubejs(HACKER_NEWS_API_KEY)}
    query={{
        measures: ['Stories.count'],
        dimensions: ['Stories.time.month']
    }}
    render={({ resultSet }) => {
      if (!resultSet) return (<Spin />);\n
      return (
        <Chart
            data={resultSet.chartPivot()}
            scale={{ category: { tickCount: 8 } }}
            height={400}
            forceFit
        >
            ​<Axis name="category" label={{ formatter: v => moment(v).format("MMM 'YY") }} />￼
            <Tooltip crosshairs={{ type: 'y' }} />
            <Geom position="category*Stories.count" type="line" size={2} />
        </Chat>
      );
    }}
  />;
);\n
export default Example;
    `} />
  </TabItem>
  <TabItem value="cubejs">
    <Code language='javascript' title='CubeJS' code={`
cube(\`Stories\`, {
    ​sql: \`select * from \\\`bigquery-public-data\\\`.hacker_news.stories\`,￼￼ 
    ​measures: 
    ￼    ​count: {
    ￼      ​type: \`count\`
    ￼   ​}
    ￼ },\n        ￼
    ​dimensions: {
        category: {
        type: \`string\`,
        case: {
            ​when: [
    ￼          { sql: \`STARTS_WITH(\${title}, "how HN")\`, label: \`Show\` },
    ￼          ​{ sql: \`STARTS_WITH(\${title} "Ask HN")\`, label: \`Ask\`},
    ￼        ],
    ￼        else: { label: \`Other\` }
          }
        },\n        ￼
￼    ​  time: {
￼    ​    sql: \`time_ts\`,￼
￼    ​    type: \`time\`
￼    ​  },\n        ￼
￼    ​  title: {
        sql: \`title\`,
        type: \`string\`
      }
    }
});
    `} />
  </TabItem>
  <TabItem value="sql">
    <Code language='sql' title='SQL' code={`
SELECT
    CASE
        WHEN STARTS_WITH(stories.title, "Show HN") THEN 'Show'
        WHEN STARTS_WITH(stories.title, "Ask HN") THEN 'Ask'
        ELSE 'Other'
    END \`stories_category\`,
    COUNT(stories.id) \`stories_count\`
FROM (
        SELECT *
        FROM \`bigquery-public-data.hacker_news.stories\`
        WHERE time_ts IS NOT NULL
    ) AS stories
GROUP BY 1
ORDER BY 2 DESC
LIMIT 10000
    `} />
  </TabItem>
</Tabs>;