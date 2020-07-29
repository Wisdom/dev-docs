---
title: Script Lifecycle
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
import Code from '../../../src/common/code/'



# End

<Code language='javascript' title='End' code={`
wisdom.end();
`}/>

Will stop the recording immediately.


<Code language='javascript' title='Logout and Stop' code={`
wisdom('logoutAndStop');
// OR
wisdom.logoutAndStop();
`}/>


# Restart

Will immediately restart the recording, as if a new page was loaded.

<Code language='javascript' title='Logout and Restart' code={`
wisdom('logoutAndRestart');
// OR
wisdom.logoutAndRestart();
`}/>
