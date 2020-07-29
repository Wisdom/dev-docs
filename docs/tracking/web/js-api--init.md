---
title: Initialization
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


# init
`wisdom('init', projectId, configuration)`

Initialize wisdom and start recording

### Usage

<Code language='js' title='Initialization Snippet' code={`
wisdom('init', __YOUR_PROJECT_ID_HERE__, {
    /* Optional Configuration Overrides */
    identityId: currentUser.id,
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
});
`}/>


### Arguments

| name | required | type |
|---|---|---|
| projectId | **REQUIRED** | string |

The Project Identifier Id for the project associated with your app. Your `projectId` can be found on the [JS tracking](https://app.getwisdom.io/org/~/project/~/configs/tracking/code) page within the Wisdom web app.

---

| name | required | type |
|---|---|---|
| configuration | *Optional* | object |

These override configurations will be merged with the persisted configurations set on the Wisdom web application configurations page. Reach out if you need low level control.