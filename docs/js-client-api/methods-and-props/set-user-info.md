### Set User Info

`setUserInfo` accepts both special properties and custom properties. Either can be specified, the difference being that Wisdom knows how to best utilize special properties, for example, display avatar Images, or provide contact information for each user, or group users by Company.


<div class='spacer64'></div>


```js
wisdom('setUserInfo', {
  /* User Info */
  identityId: '2183649', // Or 'john@example.com'
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
  phone: '1.650.123.4567',
  companyName: 'Acme Inc.',
  totalSpen: 123,456.00,

  // Many other fields can be specified.
  myReallyCustomField: 'This works too.',
  anotherFieldToTrack: 'This is tracked as well'
});
```


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
