---
title: 60 Second Setup
sidebar_label: 60 Second Setup
preview: ''
createdAt: 2018-07-5 9:02:52
updatedAt: 2018-07-11 12:42:57

seo:
  title: 'What is Cobrowsing | Wisdom'
  desc: 'Cobrowsing is an interactive form of screensharing?'

tags:
  - Customer Support

author: 'John Gracey'
public: False
---

import Code from '../../src/common/code/'
export const snippet1 = `
<script type="text/javascript">
/*  -- Wisdom -- Start of Snippet v1.0 (www.GetWisdom.io) -- */
!function(W,I,S,D,O,M){"use strict";if(S.__WISDOM__INIT__OBJECT_REFERENCE=W,!(W in S)){var f=S[W]=function(){arguments.length&&f.q.push({args:arguments,ts:new Date})};f.ts=new Date,f.q=[],f.flag=function(){return null};var g=D.createElement("script");g.src="https://script.getwisdom.io/v"+(I|0),g.type="text/javascript",g.charset="UTF-8",g.crossOrigin="anonymous",g.async=!0;var h=D.getElementsByTagName("script")[0];h.parentNode.insertBefore(g,h)}}("wisdom",1,window,document);
\n\n// Find your projectId at https://app.getwisdom.io/org/~/project/~/configs/code
wisdom('init', __INSERT_PROJECT_ID_HERE__);
\n/*  -- Wisdom -- End of Snippet -- */
</script>
`;

export const snippet2 = `
wisdom('identify', __UNIQUE_USER_IDENTITY_ID_HERE__);
\nwisdom('setUserInfo', {
  // Optional, but highly recommended.
  email:      __EMAIL_OF_YOUR_USER_HERE,      // eg. john@example.com
  firstName:  __FIRST_NAME_OF_YOUR_USER_HERE, // eg. John
  lastName:   __LAST_NAME_OF_YOUR_USER_HERE,  // eg. Smith
  phone:      __TELEPHONE_OF_YOUR_USER_HERE,  // eg. 650-123-4567
  companyIds: [...__COMPANY_IDS_HERE__],      // eg. [100, 202, 'a4e71']
  activeCompanyId: __COMPANY_ID__,            // The company currently being tracked.
  traits: { /* Custom Key-Value pairs here. */ },
});
`


Here we will be providing you with some JavaScript code to include on your app to install wisdom. For Single Page Applications we recommend running Wisdom's JavaScript snippet after you have loaded your customer's account information, for example, after login. For traditional server rendered static webpages, simply add the JavaScript snippet between the `<HEAD/>` tags in your HTML.

## Tracking Code JavaScript Snippet
[Here is a link to your JS tracking code](https://app.getwisdom.io/org/~/project/~/configs/tracking/code). The `__PROJECT_IDENTITY_ID__` will be generated for you and is already included in the snippet on your tracking code page of your project, but your Identity ID object is still required to be added manually to identify your customers.

**NOTE 1:** Double check that you have the correct project selected in the drop-down on the top-right of the Wisdom application. Wisdom's JS snippets are specific to each project, meaning [this snippet](https://app.getwisdom.io/org/~/project/~/configs/tracking/code) may not be the one you are setting up now if you have multiple projects.

**NOTE 2:** Wisdom does not work for `localhost` servers or behind private networks (eg. VPN only servers). Although Wisdom captures HTML changes, some resources are fetched after recording to reduce bandwidth (like images and CSS). As such, Wisdom requires access to these public resources.

### Example
Below is an example of Wisdom's JS snippet that is setup inside `<HEAD/>` tags with the required identity IDs, as well as some additional user information.


<Code language='html' title='1. Recording Setup' code={snippet1}/>


In your web application, as soon as you've fetched your users's account information (such as after login or registration), you should pass the user's `identityId` to Wisdom in order to uniquely identify the user, along with other basic information you'd like to see.

<Code language='javascript' title='2. User Profile Setup' code={snippet2}/>

### User Identity ID
When starting Wisdom, you will be **required** to provide a user identity ID that will be unique to each logged-in user.
This will be used to track users across multiple tabs and sessions, as well as relay information to plugins and integrations.

User IDs are a permanent unique identifier, like a database ID or in certain cases an email address.

We recommend using database IDs instead of simple email addresses or usernames, because database IDs never change. This guarantees, even if the user changes their email address, you can still recognize them as the same person in all of your analytical tools.

### Project Identity ID
A project identity ID is automatically generated for you when you create a Wisdom project. It is required for the script to run fully because it is used to associate your Wisdom installation with the project you created.

You can find the project's Identity ID on its [tracking code page](https://app.getwisdom.io/org/~/project/~/configs/tracking/code). If you copy the script from that page, the project ID will already be filled in.



## How to use the code

1. Copy and paste the [provided JS code](https://app.getwisdom.io/org/~/project/~/configs/tracking/code) into any section of your app where you want to use Wisdom.
2. Edit the code to include custom variables for the required `USER_IDENTITY_ID`, and ensure the correct `PROJECT_IDENTITY_ID` is set.
3. Load up your app in a browser where to a page the JS file would be installed, and check your the browser's developer console.
4. Deploy your app to a staging server to test out live view and co-browsing
