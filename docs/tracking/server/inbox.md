---
title: Email Inbox Tracking
sidebar_label: Email Inbox Tracking
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

import Image from '@theme/IdealImage';
import Code from '../../../src/common/code/'


## Email Inbox Across All Users.

Part of understanding customer engagement and churn is understanding how users's work together as part of a larger team. team and corporate restructuring can be a challenge to understand from a product analyst's perspective. Understanding the greater team dynamics helps shed light why certain workflows benefit particular teams and not others.

You can find your application's email inbox at [Inbox](https://app.getwisdom.io/org/~/project/~/dashboard/inbox).
Wisdom organizes recieved emails cronologically across all user, and also limited to a particular user.

<Image img={require('./inbox.png')} className='noShadow'/>


Within Wisdom's user CRM, you be able to glance at the most recent emails, or click through and sift through the user's entire inbox journey- hopefully your team hasn't been too spammy!

<Image img={require('./profile.png')} className='noShadow'/>




## Setting up Inbox Tracking
Setup is really easy, just BCC all emails to your assigned secret email address- it's domain is `@mail-catcher.getwisdom.io`.


<Code language='javascript' title='Sanitizer Functions' code={`
  const msg = {
    to: 'john@customer.com',
    from: {
      email: 'support@company.io',
      name: 'Company team',
    },
    bcc: [
      'PROJECT_XXXXXXXXXXXXXXXXXXXXXXX@mail-catcher.getwisdom.io',
    ],
    replyTo: 'support@company.io',
    templateId: 'd-123456', // or HTML content...
  };\n
  return sendRenderedEmail(msg, userData)
    .then(...)
    .catch(...);
`}/>
