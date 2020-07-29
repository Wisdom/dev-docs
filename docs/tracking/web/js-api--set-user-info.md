---
title: Tracking User Info
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


# Identity

<Code language='javascript' title='Identity User' code={`
wisdom('identify', __USER_IDENTITY_ID__);
`}/>


<!-- #####Anonymous ID
There are certain cases where you don’t actually know who the user is according to your database, but you still want to be able to tie them to traits, events or page views. For example, you may not know who a user is when tracking newsletter signups or anonymous page views.

In these cases, you should use an Anonymous ID.

The Anonymous ID can be any pseudo-unique identifier. For example, on your servers you can use a Session ID. If you don’t have any readily available identifier, you can always generate a new random one — we recommend UUIDs.

Note: Our browser and mobile libraries automatically use Anonymous IDs under the covers to keep track of users as they navigate around your website or app, so you don’t need to worry about them when using those libraries.
 -->


#### User ID
User IDs are a permanent and unique identifier, like a database ID or in certain cases an email address.

We recommend using database IDs instead of simple email addresses or usernames, because database IDs never change. This guarantees, even if the user changes their email address, you can still recognize them as the same person in all of your analytical tools. This also allows you to correlate analytics data with your own internal database.




<div class='spacer64'></div>


# Set User Info

`setUserInfo` accepts both special properties and custom properties. Either can be specified, the difference being that Wisdom knows how to best utilize special properties, for example, display avatar Images, or provide contact information for each user, or group users by Company.


<div class='spacer64'></div>


<Code language='javascript' title='Set User Info' code={`
wisdom('setUserInfo', {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
  phone: '1.650.123.4567',
  companyIds: ['491'], 
  totalSpend: 123,456.00,
  traits: {
    // Many other fields can be specified.
    myReallyCustomField: 'This works too.',
    anotherFieldToTrack: 'This is tracked as well'
  },
});
`}/>


<div class='spacer64'></div>


### Reserved Traits

Trait Name | Type | Description
---|---|---
`identityId`   |  string  | Unique ID in your database for a user
`username`     |  String  | This should be unique to each user, like the usernames of Twitter or GitHub.
`avatarURL`    |  String  | URL to an avatar image for the user
`userRole`     |  String  | The application role of a user (Example: "Admin", "Member")
`email`        |  String  | Phone number of a user
`phone`        |  String  | Email address of a user
`firstName`    |  String  | First name of a user
`lastName`     |  String  | Last name of a user
`companyIds`   |  Array   | List of Company IDs the user is part of. Example: ['112','113']
`plan`         |  String  | Current billing plan used by user
`totalSpend`   |  Number  | Total application spend of a user
`birthday`     |  Date    | Date of birth of the user
`firstSeen`    |  Date    | Date the user was first seen
`registeredAt` |  Date    | Date the user’s account was first created
