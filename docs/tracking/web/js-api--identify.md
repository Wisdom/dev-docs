
---
title: Identify
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



```js
wisdom('identify', __USER_IDENTITY_ID__);
```


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