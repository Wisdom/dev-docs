

### Identify



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

#### Traits

Traits are pieces of information you know about a user that are included in an identify call. These could be demographics like age, gender, or something account-specific like pricing plans, even things like whether a user has seen a particular A/B test variation. We let you customize it based on your needs!

We’ve reserved some traits that have semantic meanings for users, and we handle them in special ways. For example, we always expect email to be a string of the user’s email address. We’ll send this on to destinations like Mailchimp that require an email address for their tracking.

You should only use reserved traits for their intended meaning.

Reserved traits we’ve standardized:



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
`companyName`  |  String  | Company Name the user represents
`companyId`    |  String  | Company ID the user represents
`companyTitle` |  String  | Title of a user, usually related to their position at a specific company (Example: “VP of Engineering”)
`plan`         |  String  | Current billing plan used by user
`totalSpend`   |  Number  | Total application spend of a user
`birthday`     |  Date    | Date of birth of the user
`firstSeen`    |  Date    | Date the user was first seen
`registeredAt` |  Date    | Date the user’s account was first created
`gender`       |  String  | Gender of a user
