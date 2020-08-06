---
title: OnReady
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
import Code from '../../../../src/common/code/'


# onReady
`wisdom('onReady', callback)`

Call provided function upon initialization of wisdom.

### Usage

<Code language='javascript' title='Utility: On Ready' code={`
// Log 'Hello Wisdom' on initialization.
wisdom('onReady', () => console.log('Hello Wisdom') );
`}/>

### Arguments
| name | required | type |
|---|---|---|
| callback | **REQUIRED** | string |

Callback function that will be called upon initialization of wisdom.
No parameters will be passed to the callback function.
