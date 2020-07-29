---
title: Data Access Rights (GDPR)
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




> **Early Preview Only**
>
> These endpoints are not yet publicly available. API expected to be available by late November 2018





## Data Subject Access Rights endpoints

Wisdom accounts are specified by `orgId` and `projectId`. All users are specified by their `identityId`, which often is the database ID of the user record or their email address. Remember that identityIds cannot change.


### Update Consent

`PATCH https://api.getwisdom.io/v1/org/:orgId/project/:projectId/compliance/user/:identityId/consent`
  - Request Params:
    - `clause_1_consent` Boolean, required (consents to application diagnostics)    
    - `clause_2_consent` Boolean, required (consents to feature usage)
    - `clause_3_consent` Boolean, required (consents to browser information)
    - `clause_4_consent` Boolean, required (consents to user information)
    - `clause_5_consent` Boolean, required (consents to user behaviour interaction)
    - `user_ipv6` String. Field is required by Wisdom when known for legal compliance reasons. IPv6 (mapping IPv4 to IPv6 space) of user consent.
    - `agreement_time` Datatime of user agreement to all consent clauses
    - NOTE: `manual` - For auditing purposes,  value is set to `true` to differentiate between Wisdom's consent management (banner notifications) and alternative legal methods.


### Get Consent
- Gets the latest consent state.

`GET https://api.getwisdom.io/v1/org/:orgId/project/:projectId/compliance/user/:identityId/consent`


### Get All Data of User <badge class='badge--info'>Deferred Request</badge>

`GET https://api.getwisdom.io/v1/org/:orgId/project/:projectId/compliance/user/:identityId/all-data`



### Delete All data of User <badge class='badge--info'>Deferred Request</badge>
- Deleting data does not revoke consent.

`DELETE https://api.getwisdom.io/v1/org/:orgId/project/:projectId/compliance/user/:identityId/all-data`




### Get User Profile Data
`GET https://api.getwisdom.io/v1/org/:orgId/project/:projectId/compliance/user/:identityId/profile`



### Update User Profile Data <badge class='badge--info'>Deferred Request</badge>
- User information updates is a queued request, but is usually fulfilled within 60 seconds.

`PATCH https://api.getwisdom.io/v1/org/:orgId/project/:projectId/compliance/user/:identityId/profile`



### Pending Actions
- Only includes deferrable actions.
`GET https://api.getwisdom.io/v1/org/:orgId/project/:projectId/compliance/pending-requests`







------------ ????????????????????????

???????????????????/








### Compliance Endpoints

Check out our [Resource Center](https://getwisdom.io/resource-center) for our most up to date legal policies and regulatory compliance documents. Wisdom fully supports the privacy rights of its customers and their users. 


> **[danger] Early Preview Only**
>
> These endpoints are not yet publicly available. API expected to be available by the second week of April 2018.





### Data Subject Access Rights endpoints

Accounts are specified by `accountId`. All users are specified by their `identityId`, which often is the database ID of the user record or their email address. Remember that identityIds cannot change.


### Update Consent

`PATCH https://api.getwisdom.io/v1/account/:accountId/compliance/user/:identityId/consent`
  - Request Params:
    - `clause_1_consent` Boolean, required (consents to application diagnostics)    
    - `clause_2_consent` Boolean, required (consents to feature usage)
    - `clause_3_consent` Boolean, required (consents to browser information)
    - `clause_4_consent` Boolean, required (consents to user information)
    - `clause_5_consent` Boolean, required (consents to user behaviour interaction)
    - `user_ipv6` String. Field is required by Wisdom when known for legal compliance reasons. IPv6 (mapping IPv4 to IPv6 space) of user consent.
    - `agreement_time` Datatime of user agreement to all consent clauses
    - NOTE: `manual` - For auditing purposes,  value is set to `true` to differentiate between Wisdom's consent management (banner notifications) and alternative legal methods.


### Get Consent
- Gets the latest consent state.

`GET https://api.getwisdom.io/v1/account/:accountId/compliance/user/:identityId/consent`


### Get All Data of User <badge class='badge--info'>Deferred Request</badge>

`GET https://api.getwisdom.io/v1/account/:accountId/compliance/user/:identityId/all-data`



### Delete All data of User <badge class='badge--info'>Deferred Request</badge>
- Deleting data does not revoke consent.

`DELETE https://api.getwisdom.io/v1/account/:accountId/compliance/user/:identityId/all-data`




### Get User Profile Data
`GET https://api.getwisdom.io/v1/account/:accountId/compliance/user/:identityId/profile`



### Update User Profile Data <badge class='badge--info'>Deferred Request</badge>
- User information updates is a queued request, but is usually fulfilled within 60 seconds.

`PATCH https://api.getwisdom.io/v1/account/:accountId/compliance/user/:identityId/profile`



### Pending Actions
- Only includes deferrable actions.
`GET https://api.getwisdom.io/v1/account/:accountId/compliance/pending-requests`
